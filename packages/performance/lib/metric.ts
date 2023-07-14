import { MetricType } from '../types'

function uuid() {
  return Math.random().toString()
}

export function createMetric<MetricName extends MetricType['name']>(
  name: MetricName,
  value?: number
) {
  const entries: Extract<MetricType, { name: MetricName }>['entries'] = []
  let navigationType: MetricType['navigationType'] = 'navigate'

  return {
    name,
    value: typeof value === 'undefined' ? -1 : value,
    rating: 'good' as const,
    delta: 0,
    entries,
    id: uuid(),
    navigationType,
  }
}
