interface PerformanceEntry {
  readonly duration: DOMHighResTimeStamp
  readonly entryType: string
  readonly name: string
  readonly startTime: DOMHighResTimeStamp
  toJSON(): any
}

declare global {
  interface Document {
    // https://wicg.github.io/nav-speculation/prerendering.html#document-prerendering
    prerendering?: boolean;
    // https://wicg.github.io/page-lifecycle/#sec-api
    wasDiscarded?: boolean;
  }

  interface Performance {
    getEntriesByType<K extends keyof PerformanceEntryMap>(
      type: K
    ): PerformanceEntryMap[K][];
  }

  // https://w3c.github.io/event-timing/#sec-modifications-perf-timeline
  interface PerformanceObserverInit {
    durationThreshold?: number;
  }

  // https://wicg.github.io/nav-speculation/prerendering.html#performance-navigation-timing-extension
  interface PerformanceNavigationTiming {
    activationStart?: number;
  }

  // https://wicg.github.io/event-timing/#sec-performance-event-timing
  /* {
    name: "keydown"
    entryType: "first-input"
    startTime: 2562.800000000745
    duration: 0

    interactionId: 0
    cancelable: true
    processingEnd: 2565.39999999851
    processingStart: 2565.39999999851
    target: body
    [[Prototype]]: PerformanceEventTiming
  } */
  interface PerformanceEventTiming extends PerformanceEntry {
    duration: DOMHighResTimeStamp;
    interactionId?: number;
  }

  // https://wicg.github.io/layout-instability/#sec-layout-shift-attribution
  interface LayoutShiftAttribution {
    node?: Node;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }

  // https://wicg.github.io/layout-instability/#sec-layout-shift
  interface LayoutShift extends PerformanceEntry {
    value: number;
    sources: LayoutShiftAttribution[];
    hadRecentInput: boolean;
  }

  // https://w3c.github.io/largest-contentful-paint/#sec-largest-contentful-paint-interface
  /* {
    duration: 0
    entryType: "largest-contentful-paint"
    name: ""
    startTime: 297.30000000074506

    element: h1
    id: ""
    loadTime: 0
    renderTime: 297.3
    size: 5312
    url: ""
    [[Prototype]]: LargestContentfulPaint
  } */
  interface LargestContentfulPaint extends PerformanceEntry {
    renderTime: DOMHighResTimeStamp;
    loadTime: DOMHighResTimeStamp;
    size: number;
    id: string;
    url: string;
    element?: Element;
  }
}

/*
  PerformanceObserver.supportedEntryTypes
  ['element', 'event', 'first-input', 'largest-contentful-paint',
  'layout-shift', 'longtask', 'mark', 'measure',
  'navigation', 'paint', 'resource'] */
export type PerformanceEntryTypes =
  | 'mark' // 类似 Date.now()

  | 'element' // 测量元素，与 elementtiming 配合
  | 'largest-contentful-paint' // 支持的元素和 element 相同

  | 'event' // 事件生命周期中的许多时间戳
  | 'first-input'

  | 'navigation' // TTFB 就是 responseStart

  | 'longtask' // TTI

  | 'layout-shift'
  | 'measure'
  | 'paint'
  | 'resource'
