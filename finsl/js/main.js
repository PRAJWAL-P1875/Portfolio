// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initAnimations();
    initProjects();
    initScrollEffects();
    initParticles();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
}

// Animation initialization
function initAnimations() {
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .course-card, .achievement-item, .event-card, .interest-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Add floating animation to achievement items with staggered delays
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
}

// Project modal functionality
function initProjects() {
    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-modal');

    // Close modal when clicking X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Project modal content
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modal-body');
    
    const projectData = {
        neuroglove: {
            title: "NeuroGlove",
            description: "An innovative AI-powered gesture recognition glove that translates hand movements into digital commands. This project combines machine learning algorithms with embedded systems to create an intuitive human-computer interface.",
            technologies: ["Arduino", "Machine Learning", "Sensors", "Python"],
            features: [
                "Real-time gesture recognition",
                "Wireless connectivity",
                "Multiple gesture support",
                "High accuracy detection"
            ]
        },
        colordetection: {
            title: "Color Detection System",
            description: "A computer vision system that can accurately identify and classify colors in real-time using advanced image processing techniques.",
            technologies: ["Python", "OpenCV", "Image Processing", "Machine Learning"],
            features: [
                "Real-time color detection",
                "Multiple color classification",
                "High accuracy algorithms",
                "User-friendly interface"
            ]
        },
        linefollowing: {
            title: "Line Following Robot",
            description: "An autonomous robot capable of following predetermined paths using sensor arrays and intelligent control algorithms.",
            technologies: ["Arduino", "Sensors", "Motor Control", "Embedded C"],
            features: [
                "Autonomous navigation",
                "Obstacle detection",
                "Speed optimization",
                "Path tracking accuracy"
            ]
        },
        opticals: {
            title: "Smart Glasses for Blind",
            description: "Assistive technology that helps visually impaired individuals navigate their environment through audio feedback and obstacle detection.",
            technologies: ["Ultrasonic Sensors", "Audio Processing", "Microcontroller", "IoT"],
            features: [
                "Obstacle detection",
                "Audio navigation",
                "Wearable design",
                "Battery efficient"
            ]
        },
        blindstick: {
            title: "Smart Blind Stick",
            description: "An enhanced walking stick with ultrasonic sensors and haptic feedback to assist visually impaired individuals in navigation.",
            technologies: ["Arduino", "Ultrasonic Sensors", "Haptic Feedback", "Bluetooth"],
            features: [
                "Distance measurement",
                "Vibration alerts",
                "Water detection",
                "Emergency features"
            ]
        },
        humanfollowing: {
            title: "Human Following Robot",
            description: "An  robot that can identify and follow a specific person using computer vision and tracking algorithms.",
            technologies: ["Computer Vision", "AI", "Motor Control", "arduino"],
            features: [
                "Person identification",
                "Real-time tracking",
                "Obstacle avoidance",
                "Autonomous following"
            ]
        },
        healthmonitoring: {
            title: "Health Monitoring System",
            description: "An IoT-based system that continuously monitors vital health parameters and provides real-time health data analysis.",
            technologies: ["IoT", "Sensors",],
            features: [
                "Multi-parameter monitoring",
                "Real-time alerts",
                "Data visualization",
                "Cloud integration"
            ]
        },
        flames: {
            title: "FLAMES Program",
            description: "A fun compatibility calculator that determines relationship compatibility based on names using the FLAMES algorithm.",
            technologies: ["C", "Algorithm Design", "GUI Development"],
            features: [
                "Name compatibility analysis",
                "FLAMES algorithm implementation",
                "Interactive interface",
                "Result visualization"
            ]
        },
        foodmenu: {
            title: "Food Menu Website",
            description: "An interactive restaurant menu system with modern design and user-friendly navigation for enhanced dining experience.",
            technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            features: [
                "Interactive menu display",
                "Category filtering",
                "Responsive design",
                "Order management"
            ]
        },
        musicwebsite: {
            title: "Music Website",
            description: "A web-based music streaming platform with playlist management and audio controls for music enthusiasts.",
            technologies: ["HTML", "CSS", "JavaScript", "Audio API"],
            features: [
                "Music streaming",
                "Playlist creation",
                "Audio controls",
                "User interface"
            ]
        },
        timetableapp: {
            title: "Personal Timetable App",
            description: "A custom schedule management application designed to help students and professionals organize their daily activities efficiently.",
            technologies: ["JavaScript", "Local Storage", "Responsive Design", "Calendar API"],
            features: [
                "Schedule management",
                "Reminder notifications",
                "Calendar integration",
                "Export functionality"
            ]
        },
        opticals: {
            title: "Smart Glasses for Blind",
            description: "Assistive technology that helps visually impaired individuals navigate their environment through audio feedback and obstacle detection.",
            technologies: ["Ultrasonic Sensors", "Audio Processing", "Microcontroller", "IoT"],
            features: [
                "Obstacle detection",
                "Audio navigation",
                "Wearable design",
                "Battery efficient"
            ]
        },
        blindstick: {
            title: "Smart Blind Stick",
            description: "An enhanced walking stick with ultrasonic sensors and haptic feedback to assist visually impaired individuals in navigation.",
            technologies: ["Arduino", "Ultrasonic Sensors", "Haptic Feedback", "Bluetooth"],
            features: [
                "Distance measurement",
                "Vibration alerts",
                "Water detection",
                "Emergency features"
            ]
        },
        humanfollowing: {
            title: "Human Following Robot",
            description: "An AI-powered robot that can identify and follow a specific person using computer vision and tracking algorithms.",
            technologies: ["Computer Vision", "AI", "Motor Control", "Raspberry Pi"],
            features: [
                "Person identification",
                "Real-time tracking",
                "Obstacle avoidance",
                "Autonomous following"
            ]
        },
        healthmonitoring: {
            title: "Health Monitoring System",
            description: "An IoT-based system that continuously monitors vital health parameters and provides real-time health data analysis.",
            technologies: ["IoT", "Sensors", "Data Analytics", "Cloud Computing"],
            features: [
                "Multi-parameter monitoring",
                "Real-time alerts",
                "Data visualization",
                "Cloud integration"
            ]
        },
        flames: {
            title: "FLAMES Program",
            description: "A fun compatibility calculator that determines relationship compatibility based on names using the FLAMES algorithm.",
            technologies: ["c", "Algorithm Design", "GUI Development"],
            features: [
                "Name compatibility analysis",
                "FLAMES algorithm implementation",
                "Interactive interface",
                "Result visualization"
            ]
        },
        foodmenu: {
            title: "Food Menu Website",
            description: "An interactive restaurant menu system with modern design and user-friendly navigation for enhanced dining experience.",
            technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            features: [
                "Interactive menu display",
                "Category filtering",
                "Responsive design",
                "Order management"
            ]
        },
        musicwebsite: {
            title: "Music Website",
            description: "A web-based music streaming platform with playlist management and audio controls for music enthusiasts.",
            technologies: ["HTML", "CSS", "JavaScript", "Audio API"],
            features: [
                "Music streaming",
                "Playlist creation",
                "Audio controls",
                "User interface"
            ]
        },
        timetableapp: {
            title: "Personal Timetable App",
            description: "A custom schedule management application designed to help students and professionals organize their daily activities efficiently.",
            technologies: ["JavaScript", "Local Storage", "Responsive Design", "Calendar API"],
            features: [
                "Schedule management",
                "Reminder notifications",
                "Calendar integration",
                "Export functionality"
            ]
        }
    };

    const project = projectData[projectId];
    if (project) {
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p style="margin-bottom: 20px; color: #ccc; line-height: 1.6;">${project.description}</p>
            
            <h3 style="color: #64ffda; margin-bottom: 15px;">Technologies Used:</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 25px;">
                ${project.technologies.map(tech => 
                    `<span style="background: rgba(100, 255, 218, 0.2); color: #64ffda; padding: 5px 12px; border-radius: 15px; font-size: 0.9rem;">${tech}</span>`
                ).join('')}
            </div>
            
            <h3 style="color: #64ffda; margin-bottom: 15px;">Key Features:</h3>
            <ul style="color: #ccc; line-height: 1.8;">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
        modal.style.display = 'block';
    }
}

// Scroll effects
function initScrollEffects() {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Show/hide navbar based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;

        // Parallax effect for home section
        const homeSection = document.getElementById('home');
        if (homeSection) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            homeSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Enhanced Particle system for darker theme
function initParticles() {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    // Create more particles for dramatic effect
    for (let i = 0; i < 80; i++) {
        createParticle(homeSection);
    }
    
    // Create floating orbs
    for (let i = 0; i < 10; i++) {
        createFloatingOrb(homeSection);
    }
    
    // Create background image placeholder for home
    createHomeBackground(homeSection);
    
    // Create floating geometric shapes
    createFloatingShapes(homeSection);
    
    // Create star field
    createStarField(homeSection);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle enhanced-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 4 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 3) + 's';
    
    // Random colors for particles
    const colors = ['#64ffda', '#bb86fc', '#ff6b6b', '#4ecdc4'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
    
    container.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createParticle(container); // Create new particle
        }
    }, 7000);
}

function createFloatingOrb(container) {
    const orb = document.createElement('div');
    orb.className = 'floating-orb';
    orb.style.cssText = `
        position: absolute;
        width: ${Math.random() * 20 + 10}px;
        height: ${Math.random() * 20 + 10}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(100, 255, 218, 0.6) 0%, rgba(100, 255, 218, 0.1) 70%);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: orbFloat ${Math.random() * 10 + 8}s ease-in-out infinite;
        animation-delay: ${Math.random() * 5}s;
        pointer-events: none;
        z-index: 1;
        filter: blur(1px);
    `;
    
    container.appendChild(orb);
    
    // Remove and recreate orb
    setTimeout(() => {
        if (orb.parentNode) {
            orb.parentNode.removeChild(orb);
            createFloatingOrb(container);
        }
    }, 18000);
}


    
    // Add background placeholder text
    const bgText = document.createElement('div');
    bgText.style.cssText = `
        position: absolute;
        bottom: 20px;
        right: 20px;
        background: rgba(100, 255, 218, 0.1);
        color: #64ffda;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 0.9rem;
        border: 1px dashed #64ffda;
        opacity: 0.7;
    `;
    bgText.textContent = 'Add Your Background Image Here';
    
    bgOverlay.appendChild(bgText);
    container.appendChild(bgOverlay);


function createFloatingShapes(container) {
    // Create geometric shapes
    const shapes = ['◆', '●', '▲', '■', '♦'];
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const shape = document.createElement('div');
            shape.className = 'floating-shape';
            shape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            shape.style.cssText = `
                position: absolute;
                color: ${['#64ffda', '#bb86fc', '#ff6b6b', '#4ecdc4'][Math.floor(Math.random() * 4)]};
                font-size: ${Math.random() * 20 + 15}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: shapeFloat ${Math.random() * 8 + 6}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
                pointer-events: none;
                z-index: 1;
                opacity: 0.6;
            `;
            
            container.appendChild(shape);
        }, i * 300);
    }
}

function createStarField(container) {
    // Create twinkling stars
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #ffffff;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            pointer-events: none;
            z-index: 1;
        `;
        
        container.appendChild(star);
    }
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.classList.add('typewriter');
        
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
}

// Initialize typing effect after page load
window.addEventListener('load', function() {
    setTimeout(initTypingEffect, 500);
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });

    // Add click ripple effect to cards
    const cards = document.querySelectorAll('.project-card, .course-card, .achievement-item, .event-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        background: rgba(100, 255, 218, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Make openProjectModal globally available
window.openProjectModal = openProjectModal;
