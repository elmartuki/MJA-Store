let productos = [];

async function cargarProductos() {
  const resultado = await fetch("http://127.0.0.1:3000/productos");
  productos = await resultado.json();
  mostrarProductos();
}

function agregarProductos() {
  const formulario_agregar = document.getElementById("formulario_agregar");
  let nombreIngresado = document.getElementById("nombre");
  let imagenIngresado = document.getElementById("imagen");
  let precioIngresado = document.getElementById("precio");

  formulario_agregar.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    let nombre = nombreIngresado.value;
    let precio = Number(precioIngresado.value);
    let imagen = imagenIngresado.value;

    productos.push({ nombre: nombre, precio: precio, imagen: imagen });

    await fetch("http://127.0.0.1:3000/guardar-productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productos),
    });

    mostrarProductos();

    console.log(productos);
  });
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

window.addEventListener("DOMContentLoaded", () => {
  agregarProductos();
  cargarProductos();
});
