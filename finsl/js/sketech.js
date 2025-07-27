// JavaScript for Sketch Portfolio Page

document.addEventListener('DOMContentLoaded', function() {
    initSketchPortfolio();
    initSketchAnimations();
});

function initSketchPortfolio() {
    // Add loading animation to sketch items
    const sketchItems = document.querySelectorAll('.sketch-item');
    
    // Animate sketch items on load
    sketchItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.8s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add hover effects to sketch placeholders
    const sketchPlaceholders = document.querySelectorAll('.sketch-placeholder');
    sketchPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.borderColor = '#bb86fc';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.borderColor = '#64ffda';
        });
    });
}

function initSketchAnimations() {
    // Create floating particles for artistic effect
    createArtisticParticles();
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe sketch items for animation
    const sketchItems = document.querySelectorAll('.sketch-item');
    sketchItems.forEach(item => {
        observer.observe(item);
    });
}

function createArtisticParticles() {
    const container = document.querySelector('.sketch-portfolio-section');
    if (!container) return;

    // Create artistic particles
    for (let i = 0; i < 30; i++) {
        createArtisticParticle(container);
    }
}

function createArtisticParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'artistic-particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: ${Math.random() > 0.5 ? '#64ffda' : '#bb86fc'};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.3};
        animation: artisticFloat ${Math.random() * 3 + 2}s ease-in-out infinite;
        animation-delay: ${Math.random() * 2}s;
        pointer-events: none;
        z-index: 1;
    `;
    
    container.appendChild(particle);
    
    // Remove and recreate particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createArtisticParticle(container);
        }
    }, 5000);
}

// Add artistic particle animation styles
const artisticStyles = document.createElement('style');
artisticStyles.textContent = `
    @keyframes artisticFloat {
        0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
        }
        25% {
            transform: translateY(-30px) translateX(15px) rotate(90deg);
            opacity: 0.7;
        }
        50% {
            transform: translateY(-60px) translateX(-15px) rotate(180deg);
            opacity: 1;
        }
        75% {
            transform: translateY(-30px) translateX(30px) rotate(270deg);
            opacity: 0.7;
        }
    }
    
    .sketch-item.animate-in {
        animation: slideInUp 0.8s ease-out;
    }
    
    .sketch-placeholder {
        transition: all 0.3s ease;
    }
    
    .sketch-item:hover .sketch-placeholder {
        transform: scale(1.02);
        box-shadow: 0 10px 25px rgba(100, 255, 218, 0.2);
    }
    
    .sketch-info {
        transition: all 0.3s ease;
    }
    
    .sketch-item:hover .sketch-info h4 {
        color: #bb86fc;
        transform: translateY(-2px);
    }
    
    .portfolio-note {
        animation: slideInUp 1s ease-out 0.5s both;
    }
`;

document.head.appendChild(artisticStyles);

// Add smooth scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
        if (!scrollButton) {
            createScrollToTopButton();
        }
    } else if (scrollButton) {
        scrollButton.remove();
    }
});

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.className = 'scroll-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #64ffda, #bb86fc);
        border: none;
        color: #0a0a0a;
        font-size: 18px;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
    `;
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.boxShadow = '0 10px 25px rgba(100, 255, 218, 0.5)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(100, 255, 218, 0.3)';
    });
    
    document.body.appendChild(button);
}
