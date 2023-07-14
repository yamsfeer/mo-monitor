import { createMetric } from './lib/metric'
import { observe } from './lib/observe'
import { createReport } from './lib/report'
import {
  FIDMetric,
  MetricRatingThresholds,
  FIDReportCallback,
  ReportOpts
} from './types'

export const FIDThresholds: MetricRatingThresholds = [100, 300]

export function onFID(callback: FIDReportCallback, opts: ReportOpts = {}) {
  let metric = createMetric('FID')
  let report: ReturnType<typeof createReport>

  function handleEntries(entries: FIDMetric['entries']) {
    entries.forEach((entry: PerformanceEventTiming) => {
      metric.value = entry.processingStart - entry.startTime
      metric.entries.push(entry)
      report(true)
    })
  }

  const observer = observe('first-input', handleEntries)

  if (observer) {
    report = createReport(
      callback,
      metric,
      FIDThresholds,
      opts.reportAllChanges
    )
  }
}
