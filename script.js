// Credenciales predefinidas requeridas por el enunciado
const usuariosPermitidos = [
  { nickname: "admin", password: "123", rol: "admin" },
  { nickname: "vendedor1", password: "123", rol: "vendedor" },
  { nickname: "comprador1", password: "123", rol: "comprador" }
];

const formularioLogin = document.getElementById("formulario-login");
const mensajeError = document.getElementById("mensaje-error");
const seccionLogin = document.getElementById("seccion-login");
const seccionPrincipal = document.getElementById("seccion-principal");
const contenidoRol = document.getElementById("contenido-rol");

formularioLogin.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que la página se recargue

    const nicknameInput = document.getElementById("nickname").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const rolInput = document.getElementById("rol").value;

    // Buscar si el usuario existe y coincide el rol
    const usuarioValido = usuariosPermitidos.find(u => 
        u.nickname === nicknameInput && 
        u.password === passwordInput && 
        u.rol === rolInput
    );

    if (usuarioValido) {
        mensajeError.textContent = "";
        seccionLogin.style.display = "none";
        seccionPrincipal.style.display = "block";
        
        cargarVistaPorRol(usuarioValido);
    } else {
        mensajeError.textContent = "Credenciales o rol incorrectos. Intenta de nuevo.";
    }
});

function cargarVistaPorRol(usuario) {
    if (usuario.rol === "comprador") {
        contenidoRol.innerHTML = `<h2>Bienvenido Comprador (${usuario.nickname})</h2><p>Aquí irá el catálogo y carrito.</p>`;
    } else if (usuario.rol === "vendedor") {
        contenidoRol.innerHTML = `<h2>Panel de Vendedor (${usuario.nickname})</h2><p>Aquí irá la publicación de productos.</p>`;
    } else if (usuario.rol === "admin") {
        contenidoRol.innerHTML = `<h2>Panel de Administrador (${usuario.nickname})</h2><p>Aquí irán la gestión y eliminación de cuentas.</p>`;
    }
}