 // Animaciones y funcionalidades
        document.addEventListener('DOMContentLoaded', function() {
            // Animación de entrada para las secciones
            const sections = document.querySelectorAll('.menu-section');
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

            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });

            // Funcionalidad de botones de pedido
            const orderButtons = document.querySelectorAll('.order-btn');
            orderButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productName = this.closest('.menu-item').querySelector('h3').textContent;
                    const price = this.closest('.menu-item').querySelector('.price').textContent;
                    
                    // Simular WhatsApp link
                    const message = `Hola, me interesa pedir: ${productName} - ${price}`;
                    const whatsappLink = `https://wa.me/528125102308?text=${encodeURIComponent(message)}`;
                    
                    window.open(whatsappLink, '_blank');
                });
            });
        });

        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
   
         // Mostrar el botón cuando se desplaza hacia abajo
         window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
               scrollToTopBtn.style.display = 'block';
            } else {
               scrollToTopBtn.style.display = 'none';
            }
         });
   
         // Volver al inicio al hacer clic en el botón
         scrollToTopBtn.addEventListener('click', () => {
               document.body.scrollTop = 0; // Para Safari
               document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
         });