document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicializar Swiper para la sección de Inicio (Carrusel)
    const swiper = new Swiper('.hero-swiper', {
        loop: true, // Carrusel infinito
        autoplay: {
            delay: 7000, // Cada 7 segundos cambia solo
            disableOnInteraction: false, // El carrusel se reanuda después de interactuar
        },
        speed: 350, // Transición ultra-rápida para respuesta inmediata al click
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

    // Resetear el contador al usar las flechas para evitar saltos bruscos
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');

    if (nextBtn && prevBtn) {
        [nextBtn, prevBtn].forEach(btn => {
            btn.addEventListener('click', () => {
                swiper.autoplay.stop();
                swiper.autoplay.start();
            });
        });
    }

    // 2. Efecto del Encabezado al hacer Scroll (Optimizadísimo)
    const header = document.querySelector('.header');
    let isHeaderScrolled = false;

    const checkHeader = () => {
        const shouldScroll = window.scrollY > 50;
        if (shouldScroll !== isHeaderScrolled) {
            isHeaderScrolled = shouldScroll;
            header.classList.toggle('scrolled', isHeaderScrolled);
        }
    };

    window.addEventListener('scroll', checkHeader, { passive: true });

    // Iniciar el estado del header por si se recarga ya con scroll
    checkHeader();

    // 3. Animaciones de Revelado (Persistentes y Optimizadas)
    // Agrupamos para minimizar el procesamiento de IntersectionObserver
    const revealItems = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Solo actuar si el estado cambia para evitar repintados innecesarios
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            } else if (entry.boundingClientRect.top > 0) {
                // Solo remover si está por debajo del scroll (al subir la página)
                entry.target.classList.remove('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });

    revealItems.forEach(item => revealObserver.observe(item));

    // 4. Eliminado Paralaje pesado para mayor fluidez. 
    // Los efectos CSS son más eficientes que JS en el scroll.

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

    // Función para mostrar notificaciones profesionales (Toast)
    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="fas ${icon}"></i>
            <p>${message}</p>
        `;

        container.appendChild(toast);

        // Pequeña pausa para permitir que el DOM se actualice antes de animar
        setTimeout(() => container.classList.add('show'), 100);

        // Eliminar después de 5 segundos
        setTimeout(() => {
            container.classList.remove('show');
            setTimeout(() => toast.remove(), 500); // Esperar que termine la animación
        }, 5000);
    }

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
                    showToast('¡Mensaje enviado correctamente! Nos contactaremos pronto.');
                    contactForm.reset(); // Limpia los campos
                })
                .catch((error) => {
                    console.error('Error al enviar:', error);
                    showToast('Hubo un error al enviar. Intente por WhatsApp.', 'error');
                })
                .finally(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
        });
    }

    // 7. Lógica de Modales (Privacidad y Términos)
    const modalPrivacy = document.getElementById('modal-privacy');
    const modalTerms = document.getElementById('modal-terms');
    const btnPrivacy = document.getElementById('open-privacy');
    const btnTerms = document.getElementById('open-terms');
    const closeBtns = document.querySelectorAll('.close-modal');

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Bloquear scroll del body
    }

    function closeModal() {
        modalPrivacy.classList.remove('active');
        modalTerms.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }

    if (btnPrivacy) btnPrivacy.addEventListener('click', () => openModal(modalPrivacy));
    if (btnTerms) btnTerms.addEventListener('click', () => openModal(modalTerms));

    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Cerrar al hacer clic fuera del contenedor blanco
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });

    // Cerrar con la tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

});
