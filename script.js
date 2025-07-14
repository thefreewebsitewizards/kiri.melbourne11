// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Portfolio Filtering
const categoryBtns = document.querySelectorAll('.category-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        portfolioItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.classList.remove('hidden');
                item.style.display = 'block';
            } else {
                item.classList.add('hidden');
                item.style.display = 'none';
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(250, 248, 245, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(250, 248, 245, 0.95)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.featured-item, .portfolio-item, .service-card, .process-card, .product-card, .testimonial-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Instagram feed simulation (placeholder)
function loadInstagramFeed() {
    // This would typically connect to Instagram's API
    // For now, it's a placeholder for future implementation
    console.log('Instagram feed would load here');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Kiri Melbourne Portfolio loaded successfully!');
    
    // Simulate loading Instagram feed
    setTimeout(loadInstagramFeed, 1000);
});

// Contact form handling (if you add a contact form later)
function handleContactForm(event) {
    event.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I\'ll get back to you soon via Instagram.');
}

// Add loading states for buttons
document.querySelectorAll('.cta-button, .dm-button, .order-button, .footer-dm-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add a subtle loading effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Lazy loading for images (when you add real images)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();


// Shop Tab Filtering
const shopTabs = document.querySelectorAll('.tab-btn');
const shopItems = document.querySelectorAll('.shop-item');

shopTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        shopTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        const category = tab.getAttribute('data-category');
        
        // Filter shop items
        shopItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});


// Particle Animation System
function createParticles(sectionSelector, particleCount = 20) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;
    
    // Create particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    // Create individual particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        particlesContainer.appendChild(particle);
    }
    
    section.appendChild(particlesContainer);
}

// Initialize particles for all sections
document.addEventListener('DOMContentLoaded', function() {
    // Create particles for each section
    createParticles('.hero', 25);
    createParticles('.about', 20);
    createParticles('.portfolio', 30);
    createParticles('.services', 20);
    createParticles('.shop', 25);
    createParticles('.contact', 15);
    
    // Intersection Observer for particle animation triggers
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const particles = entry.target.querySelectorAll('.particle');
                particles.forEach((particle, index) => {
                    setTimeout(() => {
                        particle.style.animationPlayState = 'running';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections with particles
    document.querySelectorAll('.hero, .about, .portfolio, .services, .shop, .contact').forEach(section => {
        observer.observe(section);
    });
});