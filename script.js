document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicializar Swiper para la sección de Inicio (Carrusel)
    const swiper = new Swiper('.hero-swiper', {
        loop: true, // Carrusel infinito
        autoplay: {
            delay: 7000, // Aumentado a 7 segundos para que el usuario pueda leer mejor
            disableOnInteraction: false,
        },
        speed: 1500, // Velocidad de la transición (1.5 segundos) para que sea más suave
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade', // Efecto de desvanecimiento suave
        fadeEffect: {
            crossFade: true
        }
    });

    // 2. Efecto del Encabezado al hacer Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Añade fondo cuando el usuario baja más de 50px
            header.classList.add('scrolled');
        } else {
            // Quita el fondo cuando vuelve arriba
            header.classList.remove('scrolled');
        }
    });

    // 3. Animaciones de Revelado al hacer Scroll (Constantes)
    const revealItems = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Activa la animación cuando el elemento entra en pantalla
                entry.target.classList.add('revealed');
            } else {
                // Quita la clase para permitir que se vuelva a animar al subir/bajar
                entry.target.classList.remove('revealed');
            }
        });
    }, {
        threshold: 0.1, // El 10% del elemento debe estar visible
        rootMargin: '0px 0px -50px 0px'
    });

    revealItems.forEach(item => {
        revealObserver.observe(item);
    });

    // 4. Transiciones de Scroll Constante (Efecto de Paralaje)
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Paralaje para los círculos flotantes del fondo
        const circle1 = document.querySelector('.circle-1');
        const circle2 = document.querySelector('.circle-2');

        if (circle1) circle1.style.transform = `translateY(${scrolled * 0.2}px)`;
        if (circle2) circle2.style.transform = `translateY(${scrolled * -0.1}px)`;

        // Paralaje suave para las imágenes de las secciones
        const images = document.querySelectorAll('.about-image img, .brands-image img');
        images.forEach(img => {
            const speed = 0.05;
            img.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // 5. Menú Móvil (Toggle)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        const icon = menuToggle.querySelector('i');
        
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    // Cerrar el menú automáticamente al hacer clic en un enlace (móvil)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });

    // 6. Envío del Formulario de Contacto (Integración Real con EmailJS)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Inicializar EmailJS con tu Public Key
        emailjs.init("wQDv6jyhKo7bdnwaG");

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Enviando...';
            btn.disabled = true;

            // Preparar los parámetros para la plantilla de EmailJS
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Enviar el correo usando tus IDs de Servicio y Plantilla
            emailjs.send('service_onzmfxx', 'template_nwf26qo', templateParams)
                .then(() => {
                    alert('¡Gracias! Su mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.');
                    contactForm.reset(); // Limpia los campos
                })
                .catch((error) => {
                    console.error('Error al enviar:', error);
                    alert('Lo sentimos, hubo un error al enviar el mensaje. Por favor, intente de nuevo o contáctenos por WhatsApp.');
                })
                .finally(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
        });
    }

});
