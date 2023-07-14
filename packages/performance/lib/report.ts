import { MetricType, MetricRatingThresholds } from '../types'

function formatRating(
  value: number,
  thresholds: MetricRatingThresholds
): MetricType['rating'] {
  const [min, max] = thresholds

  return value > max
    ? 'poor'
    : value < min
      ? 'needs-improvement'
      : 'good'
}

export function createReport<MetricName extends MetricType['name']>(
  callback: (metric: Extract<MetricType, { name: MetricName }>) => void,
  metric: Extract<MetricType, { name: MetricName }>,
  thresholds: MetricRatingThresholds,
  reportAllChanges?: boolean
) {

  let prevValue: number
  let delta: number

  return (forceReport?: boolean) => {
    if (metric.value >= 0) {
      if (forceReport || reportAllChanges) {
        delta = metric.value - (prevValue || 0)

        if (delta || prevValue === undefined) {
          prevValue = metric.value
          metric.delta = delta
          metric.rating = formatRating(metric.value, thresholds)
          callback(metric)
        }
      }
    }
  }
}
