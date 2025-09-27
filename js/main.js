// Gaia Financial Assistant - Modern Marketing Website JavaScript
// AI-Optimized interactions and animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initScrollAnimations();
    initNavbarScroll();
    initSmoothScrolling();
    initDownloadTracking();
    initInteractiveElements();
    
    console.log('🚀 Gaia Financial Assistant website loaded successfully!');
});

// Scroll Animations for AI Content Discovery
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Track scroll engagement for analytics
                trackScrollEngagement(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatedElements = document.querySelectorAll('.feature-card, .blog-card, .contact-card, .demo-step');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Dynamic Navbar on Scroll
function initNavbarScroll() {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add/remove scroll class for styling
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll direction (optional enhancement)
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Track navigation clicks for user behavior analysis
                trackNavigation(targetId);
            }
        });
    });
}

// Download Tracking and Modal (for future implementation)
function initDownloadTracking() {
    const downloadButtons = document.querySelectorAll('[onclick="downloadApp()"]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showDownloadModal();
            trackDownloadAttempt();
        });
    });
}

// Download Modal Functionality
function downloadApp() {
    showDownloadModal();
}

function scrollToDownload() {
    const downloadSection = document.querySelector('#download');
    if (downloadSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = downloadSection.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Track scroll to download for analytics
        console.log('📍 Scrolled to download section');
    }
}

function showDownloadModal() {
    // For now, show an alert. In production, this would be a proper modal
    const userConfirmed = confirm(
        '🚀 Ready to download Gaia Financial Assistant?\n\n' +
        'This will start the download of the setup file.\n' +
        'System Requirements: Windows 10+, 8GB RAM, Python 3.9+\n\n' +
        'Click OK to proceed with download.'
    );
    
    if (userConfirmed) {
        // Simulate download
        initiateDownload();
    }
}

function initiateDownload() {
    // Create download notification
    showNotification('Download starting...', 'success');
    
    // In production, this would trigger actual file download
    setTimeout(() => {
        showNotification('Download complete! Check your Downloads folder.', 'success');
    }, 2000);
    
    // Track successful download
    trackDownloadSuccess();
}

// Interactive Elements Enhancement
function initInteractiveElements() {
    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Button hover enhancements
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
    
    // Demo video placeholder interaction
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            showVideoModal();
        });
    }
}

// Video Modal (Future Implementation)
function showVideoModal() {
    showNotification('Demo video coming soon! Follow our social media for updates.', 'info');
    trackVideoInteraction();
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add notification styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                border-left: 4px solid var(--primary-color);
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
            }
            .notification-success { border-left-color: var(--success-color); }
            .notification-error { border-left-color: var(--danger-color); }
            .notification-info { border-left-color: var(--primary-color); }
            .notification-content {
                display: flex;
                align-items: center;
                padding: 16px 20px;
                gap: 12px;
            }
            .notification-icon {
                font-size: 1.2rem;
            }
            .notification-message {
                flex: 1;
                color: var(--dark-700);
                font-weight: 500;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--gray-500);
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warning: '⚠️'
    };
    return icons[type] || icons.info;
}

// Analytics and Tracking Functions
function trackScrollEngagement(element) {
    const elementName = element.className.split(' ')[0];
    console.log(`📊 User viewed: ${elementName}`);
    
    // In production, send to analytics service
    // analytics.track('element_viewed', { element: elementName });
}

function trackNavigation(targetId) {
    console.log(`🧭 Navigation clicked: ${targetId}`);
    
    // In production, send to analytics service
    // analytics.track('navigation_click', { target: targetId });
}

function trackDownloadAttempt() {
    console.log('📥 Download attempt initiated');
    
    // In production, send to analytics service
    // analytics.track('download_attempt', { 
    //     timestamp: new Date().toISOString(),
    //     userAgent: navigator.userAgent 
    // });
}

function trackDownloadSuccess() {
    console.log('✅ Download completed successfully');
    
    // In production, send to analytics service
    // analytics.track('download_success', { 
    //     timestamp: new Date().toISOString()
    // });
}

function trackVideoInteraction() {
    console.log('🎥 Demo video interaction');
    
    // In production, send to analytics service
    // analytics.track('video_interaction', { 
    //     action: 'demo_click'
    // });
}

// Contact Form Enhancement (Future Implementation)
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleContactSubmission(contactForm);
        });
    }
}

function handleContactSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    form.reset();
    
    // In production, send to backend
    console.log('📧 Contact form submitted:', data);
}

// Performance Monitoring
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`⚡ Page loaded in ${Math.round(loadTime)}ms`);
        
        // Track Core Web Vitals for SEO
        if ('web-vital' in window) {
            // This would integrate with actual web vitals library
            console.log('📈 Monitoring Core Web Vitals for SEO optimization');
        }
    });
}

// AI-Optimized SEO Enhancement
function enhanceSEOForAI() {
    // Add dynamic structured data based on user interaction
    const userInteractions = [];
    
    // Track user journey for better AI understanding
    document.addEventListener('click', (e) => {
        const element = e.target.closest('[data-track]');
        if (element) {
            userInteractions.push({
                element: element.getAttribute('data-track'),
                timestamp: new Date().toISOString()
            });
            
            // Log interactions for debugging and potential analytics
            console.log('🎯 User interaction tracked:', userInteractions[userInteractions.length - 1]);
        }
    });
    
    // Add FAQ schema dynamically based on user behavior
    setTimeout(() => {
        addDynamicFAQSchema(userInteractions);
    }, 3000);
}

function addDynamicFAQSchema(userInteractions) {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How quickly can I start using Gaia Financial Assistant?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After downloading, setup takes about 10 minutes. The app includes automated setup scripts and detailed installation guides to get you analyzing financial emails immediately."
                }
            },
            {
                "@type": "Question",
                "name": "Can Gaia work with my existing broker accounts?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Gaia currently supports portfolio imports from Bolero and KBC through Excel exports, with plans to add more Belgian brokers based on user demand."
                }
            }
        ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
}

// Dark Mode Toggle (Future Enhancement)
function initDarkModeToggle() {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Load saved preference
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
        }
    }
}

// Initialize performance monitoring and SEO enhancements
initPerformanceMonitoring();
enhanceSEOForAI();

// Export functions for potential external use
window.GaiaWebsite = {
    downloadApp,
    showNotification,
    trackDownloadAttempt,
    trackDownloadSuccess
};

// Console welcome message
console.log(`
🇧🇪 Gaia Financial Assistant
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 Local AI-Powered Financial Intelligence
📧 Automated Email Analysis  
📊 Portfolio Tracking
🔒 Privacy-First Design

Built with ❤️ for Belgian investors
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
