// jsdom does not implement parts of the Performance API that the Sentry v8+
// browserTracingIntegration relies on (web-vitals instrumentation calls
// performance.getEntriesByType on init). Provide no-op shims so Sentry.init
// works under the jsdom test environment; real browsers supply these natively.
if (typeof performance.getEntriesByType !== 'function') {
  performance.getEntriesByType = () => [];
}
if (typeof performance.getEntriesByName !== 'function') {
  performance.getEntriesByName = () => [];
}
