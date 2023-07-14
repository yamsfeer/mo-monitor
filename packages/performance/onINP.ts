import { createMetric } from './lib/metric'
import { createReport } from './lib/report'
import {
  INPMetric,
  MetricRatingThresholds,
  MetricType,
  INPReportCallback,
  ReportOpts
} from './types'

export const INPThresholds: MetricRatingThresholds = [200, 500]

export function onINP(callback: INPReportCallback, opts: ReportOpts) {
  let metric = createMetric('INP')
  let report: ReturnType<typeof createReport>

  function handleEntries(entries: INPMetric['entries']) {
    entries.forEach((entry: PerformanceEventTiming) => {
      // TODO
      // if (entry.interactionId) {
      // const duration = entry.processingEnd - entry.startTime
      // console.log('Interaction:', entry.name, duration, entry)
      // }
    })
  }
}
