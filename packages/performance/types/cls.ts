import type { LoadState, Metric } from './metric'

export interface CLSMetric extends Metric {
  name: 'CLS'
  entries: LayoutShift[]

  largestShiftTarget?: string
  largestShiftTime?: DOMHighResTimeStamp
  largestShiftValue?: number
  largestShiftEntry?: LayoutShift
  largestShiftSource?: LayoutShiftAttribution
  loadState?: LoadState
}

export interface CLSReportCallback {
  (metric: CLSMetric): void
}
