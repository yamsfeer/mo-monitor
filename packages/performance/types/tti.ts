import type { LoadState, Metric } from './metric'

export interface TTIMetric extends Metric {
  name: 'TTI'
  // entries: LayoutShift[]

  // ...
}

export interface TTIReportCallback {
  (metric: TTIMetric): void
}
