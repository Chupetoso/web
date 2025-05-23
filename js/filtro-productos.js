document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const productos = document.querySelectorAll('.producto');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filtro = btn.getAttribute('data-filter');

      productos.forEach(producto => {
        if (filtro === 'all') {
          producto.style.display = 'block';
        } else {
          producto.style.display = producto.classList.contains(filtro) ? 'block' : 'none';
        }
      });

      // Quitar clase activa de todos los botones
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});