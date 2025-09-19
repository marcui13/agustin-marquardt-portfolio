/**
 * Page Navigation Tracking for Astro SPA behavior
 *
 * This script handles tracking page navigation in Astro applications that use client-side routing.
 * It automatically tracks pageviews when users navigate between pages without full page reloads.
 */

import { trackPageview, trackUserEngagement } from './analytics.js';
import { initAudienceTracking } from './audience-tracking.js';

/**
 * Initialize page tracking
 * Call this function once when the application loads
 */
export function initPageTracking() {
  // Track initial page load
  trackPageview(window.location.pathname);

  // Track user engagement data on first load
  setTimeout(() => {
    trackUserEngagement();
    initAudienceTracking();
  }, 2000); // Wait 2 seconds to ensure page is fully loaded

  // Track navigation events for SPA behavior
  let currentPath = window.location.pathname;

  // Use MutationObserver to detect when the page content changes
  const observer = new MutationObserver(() => {
    const newPath = window.location.pathname;
    if (newPath !== currentPath) {
      currentPath = newPath;
      trackPageview(newPath);
    }
  });

  // Start observing changes to the document
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Also listen for popstate events (back/forward button)
  window.addEventListener('popstate', () => {
    const newPath = window.location.pathname;
    if (newPath !== currentPath) {
      currentPath = newPath;
      trackPageview(newPath);
    }
  });

  // Listen for pushstate/replacestate events (programmatic navigation)
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function(...args) {
    originalPushState.apply(this, args);
    setTimeout(() => {
      const newPath = window.location.pathname;
      if (newPath !== currentPath) {
        currentPath = newPath;
        trackPageview(newPath);
      }
    }, 0);
  };

  history.replaceState = function(...args) {
    originalReplaceState.apply(this, args);
    setTimeout(() => {
      const newPath = window.location.pathname;
      if (newPath !== currentPath) {
        currentPath = newPath;
        trackPageview(newPath);
      }
    }, 0);
  };

  console.log('Google Analytics page tracking initialized');
}