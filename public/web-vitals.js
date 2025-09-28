// Core Web Vitals measurement for LocalAI Finance
// Measures and reports key performance metrics

function measureWebVitals() {
  // Largest Contentful Paint (LCP)
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('LCP:', entry.startTime);
      // In production, you would send this to your analytics service
    }
  }).observe({ type: 'largest-contentful-paint', buffered: true });

  // First Input Delay (FID)
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('FID:', entry.processingStart - entry.startTime);
    }
  }).observe({ type: 'first-input', buffered: true });

  // Cumulative Layout Shift (CLS)
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        console.log('CLS:', entry.value);
      }
    }
  }).observe({ type: 'layout-shift', buffered: true });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', measureWebVitals);
} else {
  measureWebVitals();
}