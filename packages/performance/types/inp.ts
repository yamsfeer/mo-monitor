import type { LoadState, Metric } from './metric'

export interface INPMetric extends Metric {
  name: 'INP'
  entries: PerformanceEventTiming[]

  eventTarget?: string
  eventTime?: number
  eventType?: string
  eventEntry?: PerformanceEventTiming
  loadState?: LoadState
}

export interface INPReportCallback {
  (metric: INPMetric): void
}
