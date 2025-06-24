// Mostrar alerta al enviar formulario
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  this.reset();
});

// Alerta de carrito
document.querySelectorAll('.btn-carrito').forEach(boton => {
  boton.addEventListener('click', () => {
    alert('Producto agregado al carrito 🛒');
  });
});

// Mostrar secciones dinámicamente desde el menú
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.add('oculto'));
  document.getElementById(id).classList.remove('oculto');
  window.scrollTo(0, 0);
}

function mostrarTallas(elementoProducto) {
  // Ocultar todos los select
 function mostrarTallas(elementoProducto) {
  // Ocultar todos los select
  document.querySelectorAll('.tallas, .colores').forEach(sel => sel.classList.add('oculto'));

  // Mostrar solo los del producto actual
  const tallaSelect = elementoProducto.querySelector('.tallas');
  const colorSelect = elementoProducto.querySelector('.colores');

  if (tallaSelect) tallaSelect.classList.toggle('oculto');
  if (colorSelect) colorSelect.classList.toggle('oculto');
}
}


// Zoom en imagen producto al hacer clic
document.querySelectorAll('.producto img').forEach(img => {
  img.addEventListener('click', (e) => {
    // Primero quitar zoom de todas
    document.querySelectorAll('.producto').forEach(prod => prod.classList.remove('zoom'));
    // Añadir zoom solo al padre del img clickeado
    e.target.closest('.producto').classList.toggle('zoom');
  });
});

// Animaciones scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(fade => observer.observe(fade));
