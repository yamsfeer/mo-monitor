import type { LoadState, Metric } from './metric'

export interface TTFBMetric extends Metric {
  name: 'TTFB'
  entries: PerformanceNavigationTiming[]

  waitingTime?: number
  dnsTime?: number
  connectionTime?: number
  requestTime?: number
  navigationEntry?: PerformanceNavigationTiming
}

export interface TTFBReportCallback {
  (metric: TTFBMetric): void
}
