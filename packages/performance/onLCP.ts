import { createMetric } from './lib/metric'
import { observe } from './lib/observe'
import { createReport } from './lib/report'
import {
  LCPMetric,
  MetricRatingThresholds,
  ReportCallback,
  ReportOpts
} from './types'

export const LCPThresholds: MetricRatingThresholds = [2500, 4000]

export function onLCP(callback: ReportCallback, opts: ReportOpts = {}) {
  let metric = createMetric('LCP')
  let report = createReport(
    callback,
    metric,
    LCPThresholds,
    opts.reportAllChanges
  )

  function handleEntries(entries: LCPMetric['entries']) {
    const lastEntry: LargestContentfulPaint = entries.pop()
    if (lastEntry) {
      metric.value = lastEntry.startTime
      metric.entries = [lastEntry]
      report()
    }
  }

  observe('largest-contentful-paint', handleEntries)
}
