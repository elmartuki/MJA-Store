async function cargarProductos() {
  const resultado = await fetch("http://127.0.0.1:3000/productos");
  productos = await resultado.json();
}

function mostrarProductos() {
  let contenedor = document.getElementById("productos");

  productos.forEach((producto) => {
    const { nombre, precio, imagen } = producto;
    contenedor.innerHTML += `<article class="producto">
        <div class="producto-imagen">
          <img
            src="${imagen}"
            alt=""
          />
        </div>
        <div class="producto-nombre">
          <p>${nombre}</p>
        </div>
        <div class="producto-precio">
          <p>$${precio}</p>
        </div>
      </article>`;
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  await cargarProductos();
  mostrarProductos();
});
