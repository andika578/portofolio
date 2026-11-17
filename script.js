/**
 * CANDRA NUR ANDIKA - IT & IOT PORTFOLIO
 * Lightweight Tab Navigation, Dynamic Typewriter Effect & Interactive Card Transitions
 */

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const tabContents = document.querySelectorAll('.tab-content');

  // --- 1. Dynamic Typewriter Effect for Hero Headline ---
  function initTypewriter() {
    const target = document.getElementById('typewriter-name');
    if (!target) return;

    const fullName = "Candra Nur Andika";
    let charIndex = 0;
    target.textContent = "";

    function typeChar() {
      if (charIndex < fullName.length) {
        target.textContent += fullName.charAt(charIndex);
        charIndex++;
        // Varied typing delay for natural feel (60ms - 100ms)
        const delay = Math.floor(Math.random() * 40) + 65;
        setTimeout(typeChar, delay);
      }
    }

    // Start typing after initial load
    setTimeout(typeChar, 350);
  }

  // Run typewriter immediately on open
  initTypewriter();

  // --- 2. Smooth Tab Navigation Mechanism ---
  function switchTab(tabId) {
    const targetElement = document.getElementById(`tab-${tabId}`);
    if (!targetElement) return;

    // Update nav buttons
    navItems.forEach(item => {
      if (item.getAttribute('data-tab') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update active tab visibility
    tabContents.forEach(tab => {
      if (tab.id === `tab-${tabId}`) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Trigger animations when switching to profile
    if (tabId === 'profile') {
      triggerSliderAnimation();
    }
  }

  // Add click listener to main nav items
  navItems.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      if (targetTab) {
        switchTab(targetTab);
      }
    });
  });

  // Handle elements with data-tab-trigger attribute
  document.querySelectorAll('[data-tab-trigger]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = elem.getAttribute('data-tab-trigger');
      if (targetTab) {
        switchTab(targetTab);
      }
    });
  });

  // Handle internal anchor links (e.g. href="#contact", href="#project", href="#profile", href="#skills")
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').substring(1);
      if (['profile', 'skills', 'project', 'contact'].includes(targetId)) {
        e.preventDefault();
        switchTab(targetId);
      }
    });
  });

  // --- 3. Animate Expertise Sliders ---
  function triggerSliderAnimation() {
    const sliderFills = document.querySelectorAll('.slider-fill');
    sliderFills.forEach(fill => {
      const targetWidth = fill.style.width;
      fill.style.width = '0%';
      setTimeout(() => {
        fill.style.width = targetWidth;
      }, 120);
    });
  }

  // Initial trigger for sliders
  triggerSliderAnimation();
});
