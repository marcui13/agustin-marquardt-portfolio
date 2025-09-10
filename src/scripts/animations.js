// Animation utilities for the portfolio
// This script can be imported in Astro pages or components

// Intersection Observer for scroll animations
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
}

// Staggered animations for multiple elements
export function staggerAnimations(selector, delay = 100) {
  if (typeof window === 'undefined') return;
  
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * delay}ms`;
  });
}

// Smooth page transitions
export function initPageTransitions() {
  if (typeof window === 'undefined') return;

  // Add loading class to body during navigation
  const links = document.querySelectorAll('a[href^="/"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Only for internal links
      if (link.hostname === window.location.hostname) {
        document.body.classList.add('page-transition');
      }
    });
  });
}

// Parallax effect for hero sections
export function initParallax() {
  if (typeof window === 'undefined') return;

  const parallaxElements = document.querySelectorAll('.parallax');
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const rate = scrolled * -0.5;
      element.style.transform = `translateY(${rate}px)`;
    });
  }

  // Throttle scroll events for performance
  let ticking = false;
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
      setTimeout(() => {
        ticking = false;
      }, 16);
    }
  }

  window.addEventListener('scroll', requestTick);
}

// Typing animation effect
export function typeWriter(element, text, speed = 50) {
  if (typeof window === 'undefined' || !element) return;
  
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize all animations when DOM is ready
export function initAllAnimations() {
  if (typeof window === 'undefined') return;

  document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initPageTransitions();
    
    // Initialize parallax only if user hasn't requested reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      initParallax();
    }
  });
}

// Auto-initialize if script is loaded directly
if (typeof window !== 'undefined') {
  initAllAnimations();
}