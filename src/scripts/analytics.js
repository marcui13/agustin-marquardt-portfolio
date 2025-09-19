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