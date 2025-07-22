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
    
    // Add particles to portfolio and activities pages (full page)
    if (document.querySelector('body.portfolio-page')) {
        createParticles('body', 30);
    }
    if (document.querySelector('body.activities-page')) {
        createParticles('body', 30);
    }
    
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
    document.querySelectorAll('.hero, .about, .portfolio, .services, .shop, .contact, .page-header').forEach(section => {
        observer.observe(section);
    });
    
    // Observe body for portfolio and activities pages
    if (document.querySelector('body.portfolio-page') || document.querySelector('body.activities-page')) {
        observer.observe(document.body);
    }
});

// Image Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    // Add click event to all gallery images
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'flex';
            modal.classList.add('show');
            modalImage.src = this.src;
            modalCaption.textContent = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.style.display = 'none';
            modal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Prevent modal image click from closing modal
      modalImage.addEventListener('click', function(e) {
          e.stopPropagation();
      });
  });

// Commission Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const commissionModal = document.getElementById('commissionModal');
    const commissionBtn = document.getElementById('commissionBtn');
    const commissionClose = document.querySelector('.commission-close');
    const cancelBtn = document.querySelector('.cancel-btn');
    const commissionForm = document.getElementById('commissionForm');
    
    // Open commission modal
    if (commissionBtn) {
        commissionBtn.addEventListener('click', function() {
            commissionModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close commission modal
    function closeCommissionModal() {
        commissionModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    if (commissionClose) {
        commissionClose.addEventListener('click', closeCommissionModal);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeCommissionModal);
    }
    
    // Close modal when clicking outside
    commissionModal.addEventListener('click', function(e) {
        if (e.target === commissionModal) {
            closeCommissionModal();
        }
    });
    
    // Close commission modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && commissionModal.style.display === 'block') {
            closeCommissionModal();
        }
    });
    
    // Handle form submission
    if (commissionForm) {
        commissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(commissionForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // Create email body
            let emailBody = `Commission Enquiry:\n\n`;
            emailBody += `Name: ${data.name}\n`;
            emailBody += `Email: ${data.email}\n`;
            emailBody += `City: ${data.city}\n`;
            emailBody += `Number of people/pets: ${data.people}\n`;
            emailBody += `Background option: ${data.background}\n`;
            emailBody += `Description: ${data.description}\n`;
            
            // Create Gmail compose link
            const subject = encodeURIComponent('Portrait Commission Enquiry');
            const body = encodeURIComponent(emailBody);
            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=kiriimai.art@gmail.com&su=${subject}&body=${body}`;
            
            // Detect if user is on mobile
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            // For mobile devices, try different approaches
            if (isMobile) {
                // Try to open Gmail app first, fallback to web
                const gmailAppLink = `googlegmail://co?to=kiriimai.art@gmail.com&subject=${subject}&body=${body}`;
                
                // Create a temporary link to test if Gmail app is available
                const tempLink = document.createElement('a');
                tempLink.href = gmailAppLink;
                tempLink.style.display = 'none';
                document.body.appendChild(tempLink);
                
                // Try to open Gmail app
                try {
                    tempLink.click();
                    // If Gmail app doesn't open within 2 seconds, open web version
                    setTimeout(() => {
                        window.open(gmailLink, '_blank');
                    }, 2000);
                } catch (error) {
                    // Fallback to web Gmail
                    window.open(gmailLink, '_blank');
                }
                
                document.body.removeChild(tempLink);
            } else {
                // Desktop: Open Gmail in new tab
                window.open(gmailLink, '_blank');
            }
            
            // Show success message with mobile-friendly text
            const successMessage = isMobile 
                ? 'Thank you for your enquiry! Gmail will open with your commission details pre-filled. If the Gmail app doesn\'t open, please check your browser for a new tab with Gmail web.'
                : 'Thank you for your enquiry! Gmail will open in a new tab with your commission details pre-filled. Please review and send the email to complete your enquiry.';
            
            alert(successMessage);
            
            // Close modal and reset form
             closeCommissionModal();
             commissionForm.reset();
         });
     }
 });