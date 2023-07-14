import { reportError } from '../report'

function normalizeError(err: any) {
  return err
}

function normalizeRejection(reason: any) {
  return reason
}

window.addEventListener('error', err => reportError(normalizeError(err)))
window.addEventListener('unhandledrejection', reason => reportError(normalizeRejection(reason)))
