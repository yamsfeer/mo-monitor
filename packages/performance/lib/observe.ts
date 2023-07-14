interface PerformanceEntryMap {
  'event': PerformanceEventTiming[]
  'paint': PerformancePaintTiming[]
  'layout-shift': LayoutShift[]
  'largest-contentful-paint': LargestContentfulPaint[]
  'first-input': PerformanceEventTiming[]
  'navigation': PerformanceNavigationTiming[]
  'resource': PerformanceResourceTiming[]
}

export function observe<K extends keyof PerformanceEntryMap>(
  type: K,
  callback: (entries: PerformanceEntryMap[K]) => void,
  opts: PerformanceObserverInit = {}
) {
  if (!PerformanceObserver.supportedEntryTypes.includes(type)) {
    return
  }

  const observer = new PerformanceObserver((list) => {
    callback(list.getEntries() as PerformanceEntryMap[K])
  })
  observer.observe(
    Object.assign(
      {
        type,
        buffered: true,
      },
      opts
    ) as PerformanceObserverInit
  )
  return observer
}
