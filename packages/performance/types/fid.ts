import type { LoadState, Metric } from './metric'

export interface FIDMetric extends Metric {
  name: 'FID'
  entries: PerformanceEventTiming[]

  eventTarget?: string
  eventTime?: number
  eventType?: string
  eventEntry?: PerformanceEventTiming
  loadState?: LoadState
}

export interface FIDReportCallback {
  (metric: FIDMetric): void
}
