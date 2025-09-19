/**
 * Audience and User Behavior Tracking
 *
 * This module provides comprehensive audience analytics to understand
 * user demographics, behavior patterns, and engagement metrics.
 */

import { trackEvent, trackUserPreference, trackTimeOnSection } from './analytics.js';

/**
 * Initialize audience tracking features
 */
export function initAudienceTracking() {
  trackDeviceInfo();
  trackUserBehavior();
  trackEngagementMetrics();
  setupScrollTracking();
  setupTimeTracking();
}

/**
 * Track detailed device and technical information
 */
function trackDeviceInfo() {
  const deviceInfo = {
    screen_size: getScreenSize(),
    device_memory: getDeviceMemory(),
    cores: navigator.hardwareConcurrency || 'unknown',
    touch_support: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    pixel_ratio: window.devicePixelRatio || 1
  };

  trackEvent('device_info', 'technical', JSON.stringify(deviceInfo));
}

/**
 * Track user behavior patterns
 */
function trackUserBehavior() {
  // Track if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    trackUserPreference('accessibility', 'reduced_motion');
  }

  // Track color scheme preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    trackUserPreference('color_scheme', 'dark');
  } else {
    trackUserPreference('color_scheme', 'light');
  }

  // Track language preferences
  const languages = navigator.languages || [navigator.language];
  trackEvent('language_preferences', 'user_info', languages.join(','));
}

/**
 * Track engagement metrics
 */
function trackEngagementMetrics() {
  // Track when user becomes active/inactive
  let isActive = true;
  let inactiveTime = 0;

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isActive = false;
      trackEvent('user_activity', 'engagement', 'page_hidden');
    } else {
      isActive = true;
      trackEvent('user_activity', 'engagement', 'page_visible');
    }
  });

  // Track focus/blur events
  window.addEventListener('focus', () => {
    trackEvent('user_activity', 'engagement', 'window_focus');
  });

  window.addEventListener('blur', () => {
    trackEvent('user_activity', 'engagement', 'window_blur');
  });
}

/**
 * Setup scroll tracking to understand content engagement
 */
function setupScrollTracking() {
  let maxScroll = 0;
  const milestones = [25, 50, 75, 90, 100];
  const reached = new Set();

  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    maxScroll = Math.max(maxScroll, scrollPercent);

    milestones.forEach(milestone => {
      if (scrollPercent >= milestone && !reached.has(milestone)) {
        reached.add(milestone);
        trackEvent('scroll_depth', 'engagement', `${milestone}%`, milestone);
      }
    });
  });

  // Track final scroll depth on page unload
  window.addEventListener('beforeunload', () => {
    trackEvent('max_scroll_depth', 'engagement', `${maxScroll}%`, maxScroll);
  });
}

/**
 * Setup time tracking for different sections
 */
function setupTimeTracking() {
  const sectionTimes = new Map();
  let currentSection = null;
  let sectionStartTime = Date.now();

  // Observe sections with intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        // User is viewing this section
        if (currentSection && currentSection !== entry.target.id) {
          // Log time for previous section
          const timeSpent = Math.round((Date.now() - sectionStartTime) / 1000);
          trackTimeOnSection(currentSection, timeSpent);
        }

        currentSection = entry.target.id || 'unknown_section';
        sectionStartTime = Date.now();
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '-20% 0px -20% 0px'
  });

  // Observe main content sections
  document.querySelectorAll('main section, main > div, .section').forEach(section => {
    if (!section.id) {
      section.id = `section_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    observer.observe(section);
  });

  // Track final section time on page unload
  window.addEventListener('beforeunload', () => {
    if (currentSection) {
      const timeSpent = Math.round((Date.now() - sectionStartTime) / 1000);
      trackTimeOnSection(currentSection, timeSpent);
    }
  });
}

/**
 * Get categorized screen size
 */
function getScreenSize() {
  const width = screen.width;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  if (width < 1440) return 'laptop';
  return 'desktop';
}

/**
 * Get device memory if available
 */
function getDeviceMemory() {
  return navigator.deviceMemory || 'unknown';
}

/**
 * Track user location data (with privacy considerations)
 * This function requests location permission and tracks general location data
 */
export function trackLocationData() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Round coordinates to protect privacy (city-level accuracy)
        const lat = Math.round(position.coords.latitude * 10) / 10;
        const lng = Math.round(position.coords.longitude * 10) / 10;

        trackEvent('user_location', 'demographics', `${lat},${lng}`);
        trackEvent('location_accuracy', 'technical', position.coords.accuracy.toString());
      },
      (error) => {
        trackEvent('location_permission', 'privacy', 'denied');
      },
      {
        timeout: 10000,
        maximumAge: 600000 // 10 minutes cache
      }
    );
  }
}

/**
 * Track user interaction patterns
 */
export function trackInteractionPatterns() {
  let clickCount = 0;
  let keyboardUsage = 0;

  document.addEventListener('click', () => {
    clickCount++;
  });

  document.addEventListener('keydown', () => {
    keyboardUsage++;
  });

  // Send interaction data every 30 seconds
  setInterval(() => {
    if (clickCount > 0 || keyboardUsage > 0) {
      trackEvent('interaction_patterns', 'behavior', `clicks:${clickCount},keys:${keyboardUsage}`);
      clickCount = 0;
      keyboardUsage = 0;
    }
  }, 30000);
}