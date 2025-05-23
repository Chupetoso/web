const form = document.getElementById('formulario-contacto');
const mensajeExito = document.getElementById('mensaje-exito');
const mensajeError = document.getElementById('mensaje-error');

function mostrarMensaje(elemento) {
  elemento.classList.remove('d-none');
  elemento.classList.add('visible');
  setTimeout(() => {
    elemento.classList.remove('visible');
    setTimeout(() => elemento.classList.add('d-none'), 500);
  }, 5000);
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const data = new FormData(form);

  try {
    const respuesta = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (respuesta.ok) {
      form.reset();
      mostrarMensaje(mensajeExito);
    } else {
      mostrarMensaje(mensajeError);
    }
  } catch (error) {
    mostrarMensaje(mensajeError);
  }
});