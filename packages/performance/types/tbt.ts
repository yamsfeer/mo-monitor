import type { LoadState, Metric } from './metric'

export interface TBTMetric extends Metric {
  name: 'TBT'
  // entries: LayoutShift[]

  // ...
}

export interface TBTReportCallback {
  (metric: TBTMetric): void
}
