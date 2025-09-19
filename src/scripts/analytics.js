/**
 * Google Analytics 4 Integration Module
 *
 * This module provides functions to track pageviews and custom events in your Astro portfolio.
 *
 * Setup Instructions:
 * 1. Replace 'GA_MEASUREMENT_ID' in MainLayout.astro with your actual Google Analytics Measurement ID
 * 2. Import this module in components where you want to track events
 *
 * Usage Examples:
 * - trackPageview('/about') - Track a page view
 * - trackEvent('project_click', 'portfolio', 'Project Name') - Track custom events
 */

/**
 * Tracks a pageview in Google Analytics
 * @param {string} url - The URL/path to track (e.g., '/about', '/projects')
 */
export function trackPageview(url) {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-0Z8WEDB2LG', {
      page_path: url
    });
  }
}

/**
 * Tracks a custom event in Google Analytics
 * @param {string} eventName - The name of the event (e.g., 'project_click', 'contact_form_submit')
 * @param {string} eventCategory - The category of the event (e.g., 'portfolio', 'contact', 'navigation')
 * @param {string} eventLabel - Additional label for the event (e.g., project name, button text)
 * @param {number} value - Optional numeric value associated with the event
 */
export function trackEvent(eventName, eventCategory, eventLabel, value = null) {
  if (typeof gtag !== 'undefined') {
    const eventData = {
      event_category: eventCategory,
      event_label: eventLabel
    };

    if (value !== null) {
      eventData.value = value;
    }

    gtag('event', eventName, eventData);
  }
}

/**
 * Tracks when a project is clicked in the portfolio
 * @param {string} projectName - The name of the project
 * @param {string} projectUrl - The URL of the project (optional)
 */
export function trackProjectClick(projectName, projectUrl = null) {
  const eventLabel = projectUrl ? `${projectName} - ${projectUrl}` : projectName;
  trackEvent('project_click', 'portfolio', eventLabel);
}

/**
 * Tracks when a contact method is used
 * @param {string} contactMethod - The method used (e.g., 'email', 'linkedin', 'github')
 */
export function trackContactClick(contactMethod) {
  trackEvent('contact_click', 'contact', contactMethod);
}

/**
 * Tracks navigation to different sections
 * @param {string} sectionName - The section navigated to (e.g., 'about', 'projects', 'contact')
 */
export function trackNavigation(sectionName) {
  trackEvent('navigation_click', 'navigation', sectionName);
}

/**
 * Tracks when external links are clicked
 * @param {string} linkUrl - The external URL clicked
 * @param {string} linkText - The text of the link
 */
export function trackExternalLink(linkUrl, linkText) {
  trackEvent('external_link_click', 'outbound', `${linkText} - ${linkUrl}`);
}

/**
 * Tracks user engagement and session details
 * This function sends enhanced user data to better understand the audience
 */
export function trackUserEngagement() {
  if (typeof gtag !== 'undefined') {
    // Enhanced user data
    const userData = {
      'custom_map.timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
      'custom_map.screen_resolution': `${screen.width}x${screen.height}`,
      'custom_map.color_depth': screen.colorDepth,
      'custom_map.language_preference': navigator.language,
      'custom_map.platform': navigator.platform,
      'custom_map.online_status': navigator.onLine ? 'online' : 'offline'
    };

    // Track user engagement event with custom parameters
    gtag('event', 'user_engagement', userData);

    // Track session info
    gtag('event', 'session_info', {
      'custom_map.referrer': document.referrer || 'direct',
      'custom_map.viewport': `${window.innerWidth}x${window.innerHeight}`,
      'custom_map.connection_type': getConnectionType()
    });
  }
}

/**
 * Gets connection type information
 * @returns {string} Connection type or 'unknown'
 */
function getConnectionType() {
  if ('connection' in navigator) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return connection ? `${connection.effectiveType || 'unknown'}_${connection.type || 'unknown'}` : 'unknown';
  }
  return 'unknown';
}

/**
 * Tracks user preferences and behavior patterns
 * @param {string} action - The action performed (e.g., 'dark_mode_toggle', 'language_change')
 * @param {string} value - The value or preference selected
 */
export function trackUserPreference(action, value) {
  trackEvent('user_preference', 'interaction', `${action}: ${value}`);
}

/**
 * Tracks time spent on specific sections
 * @param {string} section - The section name
 * @param {number} timeSpent - Time in seconds
 */
export function trackTimeOnSection(section, timeSpent) {
  if (timeSpent > 10) { // Only track if user spent more than 10 seconds
    trackEvent('time_on_section', 'engagement', section, timeSpent);
  }
}