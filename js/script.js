 
 // MENU RESPONSIVE
   var btnMenuOpen = document.getElementById("btnMenuOpen");
var btnMenuClose = document.getElementById("btnMenuClose");
var menubar =document.getElementById("menubar");

btnMenuOpen.addEventListener('click',function()
    {menubar.classList.add('active');

 });

 btnMenuClose.addEventListener('click',function()
    {menubar.classList.remove('active');
         });

var enlaces = document.getElementById("enlaces");
enlaces.addEventListener('click',function()
 {
    menubar.style.transitionDelay = '0.5s';
    menubar.classList.remove('active');
 });

  //*Formulario de Testimonios
 document.getElementById('testimonialForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('clientName').value;
            const role = document.getElementById('clientRole').value;
            const testimonialText = document.getElementById('testimonial').value;
            const rating = document.getElementById('rating').value;
            
            if (name && role && testimonialText && rating) {
               alert('¡Gracias por tu testimonio! Lo revisaremos y publicaremos pronto.');
                // Aquí podrías agregar código para enviar el testimonio a un servidor o guardarlo localmente
                console.log({
                    name: name,
                    role: role,
                    testimonialText: testimonialText,
                    rating: rating
                }); 
                   this.reset();
                   this.focus.testimonialText.focus();
            }
        });

     
  //boton inicio 
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

        
//JS para slider menu
       let currentSlide = 0;
        const totalSlides = 4;
        const slider = document.getElementById('slider');
        const navDots = document.querySelectorAll('.slider-nav a');

        function updateSlider() {
            // Mover el slider
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Actualizar puntos de navegación
            navDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function changeSlide(direction) {
            currentSlide += direction;
            
            if (currentSlide >= totalSlides) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            }
            
            updateSlider();
        }

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateSlider();
        }

        // Event listeners para los puntos de navegación
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                goToSlide(index);
            });
        });

        // Auto-slide (opcional)
        let autoSlideInterval = setInterval(() => {
            changeSlide(1);
        }, 5000);

        // Pausar auto-slide al hacer hover
        const menuSection = document.querySelector('.menu-section');
        menuSection.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        menuSection.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                changeSlide(1);
            }, 5000);
        });

        // Soporte para teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                changeSlide(-1);
            } else if (e.key === 'ArrowRight') {
                changeSlide(1);
            }
        });

        // Funcionalidad de botones de compra
        document.querySelectorAll('.btn-comprar').forEach(btn => {
            btn.addEventListener('click', function() {
                const productTitle = this.parentElement.querySelector('.product-title').textContent;
                alert(`¡${productTitle} agregado al carrito!`);
                
                // Aquí puedes agregar la lógica real para agregar al carrito
                // Por ejemplo, enviar datos a un servidor o guardar en localStorage
            });
        });