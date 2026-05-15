/**
 * Mike's Plumbing & Drains
 * Main JavaScript File
 */

(function() {
    'use strict';

    // DOM Elements
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('.site-header');
    
    /**
     * Mobile Menu Toggle
     */
    function toggleMobileMenu() {
        const isOpen = navMenu.classList.contains('is-open');
        
        if (isOpen) {
            navMenu.classList.remove('is-open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.setAttribute('aria-label', 'Open menu');
        } else {
            navMenu.classList.add('is-open');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            mobileMenuToggle.setAttribute('aria-label', 'Close menu');
        }
    }
    
    // Event listener for mobile menu toggle
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    /**
     * Close mobile menu when clicking on a nav link
     */
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('is-open')) {
                toggleMobileMenu();
            }
        });
    });
    
    /**
     * Close mobile menu when clicking outside
     */
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('is-open')) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = mobileMenuToggle && mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle) {
                toggleMobileMenu();
            }
        }
    });
    
    /**
     * Smooth scroll for anchor links
     */
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    /**
     * Add shadow to header on scroll
     */
    function handleScroll() {
        if (window.scrollY > 10) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }
    
    if (header) {
        window.addEventListener('scroll', handleScroll);
    }
    
    /**
     * Form submission handler (placeholder)
     * Replace this with actual form handling when backend is ready
     */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Placeholder: Show alert - replace with actual form submission
            alert('Thank you for your request! This is a placeholder form. Please replace with actual form handling backend.');
            
            // Optional: Log form data to console for debugging
            const formData = new FormData(contactForm);
            console.log('Form data:', Object.fromEntries(formData));
        });
    }
    
    /**
     * Intersection Observer for fade-in animations
     */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should fade in
    document.querySelectorAll('.service-card, .feature, .review-card').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeInObserver.observe(el);
    });
    
    // Add CSS class for visible state
    const style = document.createElement('style');
    style.textContent = `
        .is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    console.log('Mike\'s Plumbing & Drains website loaded successfully!');
    
})();
