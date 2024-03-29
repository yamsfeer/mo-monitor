import { createMetric } from './lib/metric'
import { observe } from './lib/observe'
import { createReport } from './lib/report'
import {
  MetricRatingThresholds,
  TTFBReportCallback,
  ReportOpts,
  TTFBMetric
} from './types'

export const TTFBThresholds: MetricRatingThresholds = [800, 1800]

export function onTTFB(callback: TTFBReportCallback, opts: ReportOpts = {}) {
  let metric = createMetric('TTFB')
  let report = createReport(
    callback,
    metric,
    TTFBThresholds,
    opts.reportAllChanges
  )

  function handleEntries(entries: TTFBMetric['entries']) {
    // todo
  }

  observe('navigation', handleEntries)
}
