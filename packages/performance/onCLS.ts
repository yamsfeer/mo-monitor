import { createMetric } from './lib/metric'
import { observe } from './lib/observe'
import { createReport } from './lib/report'

// import { onHidden } from './lib/pageEvents'
import { onFCP } from './onFCP'

import {
  CLSMetric,
  MetricRatingThresholds,
  CLSReportCallback,
  ReportOpts,
} from "./types"

export const CLSThresholds: MetricRatingThresholds = [0.1, 0.25]

export function onCLS(callback: CLSReportCallback, opts: ReportOpts) {
  onFCP(() => {
    let metric: CLSMetric = createMetric('CLS', 0)
    let report: ReturnType<typeof createReport>

    let value = 0
    let sessionEntries: LayoutShift[] = []

    function handleEntries(entries: LayoutShift[]) {
      entries.forEach(entry => {
        if (entry.hadRecentInput) {
          return
        }

        const firstEntry = sessionEntries[0]
        const lastEntry = sessionEntries[sessionEntries.length - 1]

        if (
          value &&
          entry.startTime - lastEntry.startTime < 1000 &&
          entry.startTime - firstEntry.startTime < 5000
        ) {
          value += entry.value
          sessionEntries.push(entry)
        } else {
          value = entry.value
          sessionEntries = [entry]
        }
      })

      if (value > metric.value) {
        metric.value = value
        metric.entries = sessionEntries
        report()
      }
    }

    const observer = observe('layout-shift', handleEntries)

    if (observer) {
      report = createReport(
        callback,
        metric,
        CLSThresholds,
        opts.reportAllChanges
      )
      report()
    }
  })
}
