/*
function claroOscuro() {
    // Obtener el botón y el contenedor
    var boton = document.getElementById('modo');
    var contenedor = document.getElementById('contenedor');
    
    // Definir los colores claro y oscuro
    var colorClaro = "#ffffff";  // Blanco
    var colorOscuro = "#111111"; // Negro
    
    // Agregar el event listener al botón
    boton.addEventListener("click", function() {
        // Obtener el color actual del contenedor
        var colorActual = window.getComputedStyle(contenedor).backgroundColor;
        
        // Cambiar el color al alternar entre claro y oscuro
        if (colorActual === "rgb(17, 17, 17)") { // Equivalente RGB de #111111
            contenedor.style.backgroundColor = colorClaro;
            contenedor.style.color = "#000000"; // Cambiar el color del texto a negro cuando el fondo es claro
        } else {
            contenedor.style.backgroundColor = colorOscuro;
            contenedor.style.color = "#ffffff"; // Cambiar el color del texto a blanco cuando el fondo es oscuro
        }
    });
}*/

// Llamar a la función para asegurar que el event listener se configure

function toggleMode() {
    var body = document.body;
    var imagen = document.getElementById("noche");

    // Alternar entre las clases light-mode y dark-mode
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        imagen.src = "imagenes/day1.png";

        localStorage.setItem('tema', 'oscuro');
    
    } else {
        imagen.src = "imagenes/night1.png"
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('tema', 'claro');
    }
}



document.addEventListener('DOMContentLoaded', function() {
    var temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'oscuro') {
        document.body.classList.add('dark-mode');
        document.getElementById("noche").src = "imagenes/day1.png";
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById("noche").src = "imagenes/night1.png";
    }
});
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
function irAjs(){
    window.location.href = "./infoJs.html"
}
function irAhtml (){
    window.location.href = "./infohtml.html"
}
function irAcss(){
    window.location.href = "./infoCss.html"
}
css.addEventListener("click",irAcss);
js.addEventListener("click",irAjs);
html.addEventListener("click",irAhtml);

const botonCarrito = document.getElementById("boton-carro");
const carritoContenedor = document.getElementById("carrito-contendor")
botonCarrito.addEventListener("click", function(){
    carritoContenedor.classList.toggle("hidden");
});

const botonHTML = document.getElementById("botonHTML");
const carrito = document.getElementById("cart");


botonHTML.addEventListener("click",agregarProducto);

function agregarProducto (){
    let producto;
    producto = "Curso de HTML."
    carrito.textContent =  producto;
}