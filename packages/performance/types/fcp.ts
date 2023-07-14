import type { LoadState, Metric } from './metric'

export interface FCPMetric extends Metric {
  name: 'FCP'
  entries: PerformancePaintTiming[]

  timeToFirstByte?: number
  firstByteToFCP?: number
  loadState?: LoadState
  fcpEntry?: PerformancePaintTiming
  navigationEntry?: PerformanceNavigationTiming
}

export interface FCPReportCallback {
  (metric: FCPMetric): void
}
