import {
  MetricRatingThresholds,
  TTIReportCallback,
  ReportOpts
} from './types'

export const TTIThresholds: MetricRatingThresholds = [380, 730]

export function onTTI(callback: TTIReportCallback, opts: ReportOpts = {}) {

}
