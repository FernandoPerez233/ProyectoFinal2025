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