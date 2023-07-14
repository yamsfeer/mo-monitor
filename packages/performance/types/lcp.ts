import type { LoadState, Metric } from './metric'

export interface LCPMetric extends Metric {
  name: 'LCP'
  entries: LargestContentfulPaint[]

  element?: string
  url?: string
  navigationEntry?: PerformanceNavigationTiming
  lcpResourceEntry?: PerformanceResourceTiming
  lcpEntry?: LargestContentfulPaint
}

export interface LCPReportCallback {
  (metric: LCPMetric): void
}
