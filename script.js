// Animate gallery items
gsap.utils.toArray('.gallery-item').forEach(item => {
    gsap.from(item, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true
        }
    });
});

// Hero image slideshow
const heroImages = document.querySelectorAll('.hero-image');
let currentImage = 0;

function showNextImage() {
    heroImages[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % heroImages.length;
    heroImages[currentImage].classList.add('active');
}

setInterval(showNextImage, 5000);
heroImages[0].classList.add('active');

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial-item');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 5000);
showTestimonial(currentTestimonial);

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    updateThemeIcon();
});

function updateThemeIcon() {
    themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
}

updateThemeIcon();

// Custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

// Hover effect for buttons and links
const hoverElements = document.querySelectorAll('a, button');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        scroll.scrollTo(target);
    });
});

