// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    
    if (mobileNav.classList.contains('active')) {
        menuIcon.className = 'fas fa-times';
    } else {
        menuIcon.className = 'fas fa-bars';
    }
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
    });
});

// Close mobile menu when window is resized to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
    }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing Animation
const roles = ['Full Stack Developer', 'UI/UX Designer', 'Data Scientist'];
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById('typedText');

function typeRole() {
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting) {
        typedTextElement.textContent = currentRole.slice(0, currentCharIndex + 1);
        currentCharIndex++;
        
        if (currentCharIndex === currentRole.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        }
    } else {
        typedTextElement.textContent = currentRole.slice(0, currentCharIndex - 1);
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        }
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeRole, typingSpeed);
}

// Start typing animation
typeRole();

// Skills Animation
function animateSkills() {
    const progressBars = document.querySelectorAll('.progress-fill');
    const circularSkills = document.querySelectorAll('.circular-progress');
    
    // Animate progress bars
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
    
    // Animate circular progress
    circularSkills.forEach(skill => {
        const percentage = skill.getAttribute('data-percentage');
        const circle = skill.querySelector('.progress-ring-fill');
        const circumference = 2 * Math.PI * 50; // radius = 50
        const offset = circumference - (percentage / 100) * circumference;
        
        circle.style.strokeDashoffset = offset;
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'skills') {
                animateSkills();
            }
            
            // Add fade-in animation to cards
            const cards = entry.target.querySelectorAll('.education-card, .service-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe sections for animations
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Initialize card animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.education-card, .service-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Message sent successfully! Thank you for contacting me.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.profile-img');
    
    if (heroImage) {
        const speed = scrolled * 0.5;
        heroImage.style.transform = `translateY(${speed}px)`;
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
});

// Add smooth reveal animations
const revealElements = document.querySelectorAll('.hero-text, .about-text, .section-header');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(element);
});

// Google Maps Integration
let map;
let marker;
let isFullscreen = false;

// Initialize Google Map
function initMap() {
    // Dhaka, Bangladesh coordinates
    const dhakaLocation = { lat: 23.8103, lng: 90.4125 };
    
    // Remove loading indicator
    const mapElement = document.getElementById('map');
    const loadingElement = mapElement.querySelector('.map-loading');
    if (loadingElement) {
        loadingElement.remove();
    }
    
    // Initialize map
    map = new google.maps.Map(mapElement, {
        zoom: 12,
        center: dhakaLocation,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [{"color": "#1e293b"}]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#1e293b"}]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#94a3b8"}]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#3b82f6"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#94a3b8"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#334155"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#10b981"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#475569"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#334155"}]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#94a3b8"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{"color": "#3b82f6"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#2563eb"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#ffffff"}]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{"color": "#475569"}]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#94a3b8"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#0f172a"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#06b6d4"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#0f172a"}]
            }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
    });
    
    // Add custom marker
    marker = new google.maps.Marker({
        position: dhakaLocation,
        map: map,
        title: 'Abdullah Jarif - Dhaka, Bangladesh',
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>
                    <circle cx="20" cy="20" r="8" fill="#ffffff"/>
                </svg>
            `),
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(20, 20)
        },
        animation: google.maps.Animation.BOUNCE
    });
    
    // Stop bouncing after 3 seconds
    setTimeout(() => {
        marker.setAnimation(null);
    }, 3000);
    
    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="color: #1e293b; padding: 10px; font-family: 'Inter', sans-serif;">
                <h3 style="margin: 0 0 8px 0; color: #3b82f6;">Abdullah Jarif</h3>
                <p style="margin: 0; font-size: 14px;">Full Stack Developer</p>
                <p style="margin: 4px 0 0 0; font-size: 12px; color: #64748b;">Dhaka, Bangladesh</p>
            </div>
        `
    });
    
    // Show info window on marker click
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Map controls functionality
document.addEventListener('DOMContentLoaded', () => {
    const mapToggleBtn = document.getElementById('mapToggle');
    const directionsBtn = document.getElementById('directionsBtn');
    const mapElement = document.getElementById('map');
    
    // Fullscreen toggle
    mapToggleBtn.addEventListener('click', () => {
        if (!isFullscreen) {
            // Enter fullscreen
            const overlay = document.createElement('div');
            overlay.className = 'map-fullscreen-overlay';
            document.body.appendChild(overlay);
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'map-close-btn';
            closeBtn.innerHTML = '<i class="fas fa-times"></i>';
            mapElement.appendChild(closeBtn);
            
            mapElement.classList.add('map-fullscreen');
            document.body.style.overflow = 'hidden';
            
            mapToggleBtn.innerHTML = '<i class="fas fa-compress"></i><span>Exit Fullscreen</span>';
            isFullscreen = true;
            
            // Trigger map resize
            setTimeout(() => {
                if (map) {
                    google.maps.event.trigger(map, 'resize');
                    map.setCenter({ lat: 23.8103, lng: 90.4125 });
                }
            }, 300);
            
            // Close fullscreen handlers
            const exitFullscreen = () => {
                mapElement.classList.remove('map-fullscreen');
                document.body.style.overflow = '';
                overlay.remove();
                closeBtn.remove();
                mapToggleBtn.innerHTML = '<i class="fas fa-expand"></i><span>Fullscreen</span>';
                isFullscreen = false;
                
                // Trigger map resize
                setTimeout(() => {
                    if (map) {
                        google.maps.event.trigger(map, 'resize');
                        map.setCenter({ lat: 23.8103, lng: 90.4125 });
                    }
                }, 300);
            };
            
            closeBtn.addEventListener('click', exitFullscreen);
            overlay.addEventListener('click', exitFullscreen);
            
            // ESC key to exit fullscreen
            const handleEscape = (e) => {
                if (e.key === 'Escape' && isFullscreen) {
                    exitFullscreen();
                    document.removeEventListener('keydown', handleEscape);
                }
            };
            document.addEventListener('keydown', handleEscape);
            
        }
    });
    
    // Directions button
    directionsBtn.addEventListener('click', () => {
        const destination = 'Dhaka, Bangladesh';
        const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
        window.open(url, '_blank');
    });
});

// Fallback if Google Maps fails to load
window.addEventListener('load', () => {
    setTimeout(() => {
        const mapElement = document.getElementById('map');
        const loadingElement = mapElement.querySelector('.map-loading');
        
        if (loadingElement && typeof google === 'undefined') {
            loadingElement.innerHTML = `
                <i class="fas fa-map-marked-alt" style="font-size: 2rem; margin-bottom: 1rem; color: #3b82f6;"></i>
                <p>Map temporarily unavailable</p>
                <p style="font-size: 0.875rem; margin-top: 0.5rem;">Please check your internet connection</p>
            `;
        }
    }, 5000);
});

// Make initMap globally available
window.initMap = initMap;
