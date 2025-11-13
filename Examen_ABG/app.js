//clase Usuario con atributos y método de presentación
class Usuario {
  constructor(nombre, edad, email, activo) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.activo = activo;
  }

  // metodo que retorna una presentación del usuario
  presentar() {
    return `Hola, soy ${this.nombre}, tengo ${this.edad} años y mi correo es: ${this.email}.`;
  }
}

// funcion que genera un numero determinado de usuarios aleatorios
function generarUsuarios(cantidad) {
  const nombres = ["Ana", "Luis", "María", "Carlos", "Lucía", "Pedro", "Sofía", "Andrés", "Alberto", "Mario", "Ángel"];
  const usuarios = [];

  for (let i = 0; i < cantidad; i++) {
    // Generar datos aleatorios
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const edad = Math.floor(Math.random() * 50) + 18; // Edad entre 18 y 67
    const email = `${nombre.toLowerCase()}${Math.floor(Math.random() * 100)}@correo.com`;
    const activo = Math.random() > 0.5; // Valor aleatorio

    // Crear nuevo usuario
    const usuario = new Usuario(nombre, edad, email, activo);
    usuarios.push(usuario);
  }

  return usuarios;
}

// funcion para mostrar las tarjetas de usuario en el DOM
function mostrarUsuarios(usuarios) {
  const contenedor = document.getElementById("contenedor-tarjetas");
  contenedor.innerHTML = ""; // Limpiar contenido previo

  usuarios.forEach(usuario => {
    // crear elementos HTML dinámicamente
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const nombre = document.createElement("h3");
    nombre.textContent = usuario.nombre;

    const edad = document.createElement("p");
    edad.textContent = `Edad: ${usuario.edad}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${usuario.email}`;

    const estado = document.createElement("p");
    estado.textContent = usuario.activo ? " Activo" : " Inactivo";
    estado.style.fontWeight = "bold";
    estado.style.color = usuario.activo ? "green" : "red";

    // Agregar los elementos a la tarjeta
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(edad);
    tarjeta.appendChild(email);
    tarjeta.appendChild(estado);

    // mostrar presentación condicional
    const presentacion = document.createElement("p");
    presentacion.textContent = usuario.presentar();
    tarjeta.appendChild(presentacion);

    contenedor.appendChild(tarjeta);
  });
}

// evento para generar usuarios al hacer clic en el boton
document.getElementById("generar-btn").addEventListener("click", () => {
  const cantidad = parseInt(prompt("¿Cuántos usuarios deseas generar?"), 10);

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  const usuarios = generarUsuarios(cantidad);
  mostrarUsuarios(usuarios);
});
