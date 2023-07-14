import type { CLSMetric } from './cls'
import type { FCPMetric } from './fcp'
import type { FIDMetric } from './fid'
import type { INPMetric } from './inp'
import type { LCPMetric } from './lcp'
import type { TTFBMetric } from './ttfb'

import type { TBTMetric } from './tbt'
import type { TTIMetric } from './tti'

export interface Metric {
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB' | 'TBT' | 'TTI'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  id: string
  entries: (
    | PerformanceEntry
    | LayoutShift
  )[]
  navigationType:
  | 'navigate'
  | 'reload'
  | 'back-forward'
  | 'back-forward-cache'
  | 'prerender'
  | 'restore'
}

export type MetricType =
  | CLSMetric
  | FCPMetric
  | FIDMetric
  | INPMetric
  | LCPMetric
  | TTFBMetric
  | TBTMetric
  | TTIMetric

export type MetricRatingThresholds = [number, number]


export interface ReportCallback {
  (metric: MetricType): void
}

export interface ReportOpts {
  reportAllChanges?: boolean
  durationThreshold?: number
}

export type LoadState =
  | 'loading'
  | 'dom-interactive'
  | 'dom-content-loaded'
  | 'complete'
