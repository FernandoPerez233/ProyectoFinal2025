 
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

