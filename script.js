// Función para redirigir al pago
function redirectToPayment() {
    window.location.href = 'https://pay.hotmart.com/J102548346X';
}

// Función para scroll suave al precio
function scrollToPrice() {
    document.getElementById('precio').scrollIntoView({ behavior: 'smooth' });
}


// Animación de elementos al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos los elementos con clase fade-in
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de scroll en header
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    }
    else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Rastreo de eventos (Analytics)
function trackEvent(eventName, eventData) {
    console.log('Event:', eventName, eventData);
    // Aquí puedes integrar Google Analytics u otro servicio
}

// Rastrear clicks en botones CTA
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('CTA_Click', {
            buttonText: this.textContent,
            timestamp: new Date()
        });
    });
});

// Rastrear scroll a secciones
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function() {
        const target = this.getAttribute('href');
        trackEvent('Navigation_Click', {
            target: target,
            timestamp: new Date()
        });
    });
});

