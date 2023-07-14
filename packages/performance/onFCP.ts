import { createMetric } from "./lib/metric"
import { observe } from "./lib/observe"
import { createReport } from "./lib/report"
import {
  MetricRatingThresholds,
  ReportCallback,
  ReportOpts,
  FCPMetric,
} from "./types"

export const FCPThresholds: MetricRatingThresholds = [1800, 3000]

export function onFCP(callback: ReportCallback, opts: ReportOpts = {}) {
  let metric = createMetric('FCP')
  let report: ReturnType<typeof createReport>


  function handleEntries(entries: FCPMetric['entries']) {
    entries.forEach(entry => {
      if (entry.name === 'largest-contentful-paint') {
        observer.disconnect()

        metric.value = entry.startTime
        metric.entries.push(entry)
        report()
      }
    })
  }

  const observer = observe('paint', handleEntries)
  if (observer) {
    report = createReport(
      callback,
      metric,
      FCPThresholds,
      opts.reportAllChanges
    )
  }
}
