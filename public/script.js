const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.card, .program-card, .service-card, .facility-card, .news-card, .download-card, .value-card, .research-card, .vision-card, .mission-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;
        
        const rotateY = (mouseX / cardRect.width) * 20;
        const rotateX = -(mouseY / cardRect.height) * 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const btnRect = button.getBoundingClientRect();
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;
        
        const mouseX = e.clientX - btnCenterX;
        const mouseY = e.clientY - btnCenterY;
        
        const rotateY = (mouseX / btnRect.width) * 10;
        const rotateX = -(mouseY / btnRect.height) * 10;
        
        button.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const heroElements = document.querySelectorAll('.hero-content, .hero-overlay');
    
    heroElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.staggered-animation');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.querySelectorAll('.timeline-date').forEach(date => {
    date.addEventListener('mousemove', (e) => {
        const dateRect = date.getBoundingClientRect();
        const dateCenterX = dateRect.left + dateRect.width / 2;
        const dateCenterY = dateRect.top + dateRect.height / 2;
        
        const mouseX = e.clientX - dateCenterX;
        const mouseY = e.clientY - dateCenterY;
        
        const rotateY = (mouseX / dateRect.width) * 30;
        const rotateX = -(mouseY / dateRect.height) * 30;
        
        date.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    });
    
    date.addEventListener('mouseleave', () => {
        date.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const itemCenterY = itemRect.top + itemRect.height / 2;
        
        const mouseX = e.clientX - itemCenterX;
        const mouseY = e.clientY - itemCenterY;
        
        const rotateY = (mouseX / itemRect.width) * 10;
        const rotateX = -(mouseY / itemRect.height) * 10;
        
        item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const linkRect = link.getBoundingClientRect();
        const linkCenterX = linkRect.left + linkRect.width / 2;
        const linkCenterY = linkRect.top + linkRect.height / 2;
        
        const mouseX = e.clientX - linkCenterX;
        const mouseY = e.clientY - linkCenterY;
        
        const rotateY = (mouseX / linkRect.width) * 30;
        const rotateX = -(mouseY / linkRect.height) * 30;
        
        link.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

backToTopButton.addEventListener('mousemove', (e) => {
    const btnRect = backToTopButton.getBoundingClientRect();
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    
    const mouseX = e.clientX - btnCenterX;
    const mouseY = e.clientY - btnCenterY;
    
    const rotateY = (mouseX / btnRect.width) * 20;
    const rotateX = -(mouseY / btnRect.height) * 20;
    
    backToTopButton.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
});

document.querySelectorAll('.program-icon, .service-icon, .facility-icon, .download-icon, .value-icon, .research-icon, .vision-icon, .mission-icon, .contact-icon').forEach(icon => {
    icon.addEventListener('mousemove', (e) => {
        const iconRect = icon.getBoundingClientRect();
        const iconCenterX = iconRect.left + iconRect.width / 2;
        const iconCenterY = iconRect.top + iconRect.height / 2;
        
        const mouseX = e.clientX - iconCenterX;
        const mouseY = e.clientY - iconCenterY;
        
        const rotateY = (mouseX / iconRect.width) * 30;
        const rotateX = -(mouseY / iconRect.height) * 30;
        
        icon.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`;
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mousemove', (e) => {
        const linkRect = link.getBoundingClientRect();
        const linkCenterX = linkRect.left + linkRect.width / 2;
        const linkCenterY = linkRect.top + linkRect.height / 2;
        
        const mouseX = e.clientX - linkCenterX;
        const mouseY = e.clientY - linkCenterY;
        
        const rotateY = (mouseX / linkRect.width) * 10;
        const rotateX = -(mouseY / linkRect.height) * 10;
        
        link.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        const canvas = document.createElement('canvas');
        canvas.id = 'particles-canvas';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '1';
        
        const heroSection = document.querySelector('.hero');
        heroSection.style.position = 'relative';
        heroSection.style.overflow = 'hidden';
        heroSection.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        const particles = [];
        const particleCount = 100;
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.1})`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function initParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            
            requestAnimationFrame(animateParticles);
        }
        
        window.addEventListener('resize', function() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        });
        
        initParticles();
        animateParticles();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('mousemove', (e) => {
            const rect = header.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            const rotateY = (mouseX / rect.width) * 10;
            const rotateX = -(mouseY / rect.height) * 10;
            
            header.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        header.addEventListener('mouseleave', () => {
            header.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});

// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
