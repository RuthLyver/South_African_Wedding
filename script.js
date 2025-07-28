<script>
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Typewriter effect for hero text (optional enhancement)
const typewriter = (text, elementId, speed = 60) => {
    let i = 0;
    const target = document.getElementById(elementId);
    const interval = setInterval(() => {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
};

window.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById("hero_title");
    if (heroTitle) {
        heroTitle.innerHTML = '';
        typewriter("A Magical South African Wedding Journey", "hero_title");
    }
});

// Hover ripple effect on CTA button
const cta = document.querySelector('.cta');
if (cta) {
    cta.addEventListener('click', function(e) {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
    });
}
</script>
