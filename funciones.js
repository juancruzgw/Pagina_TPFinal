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


/*** MODO CLARO / MODO OSCURO */
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
// INTENTO DE USAR EL LOCAL STORAGE
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
//

// LINKS A PAGINAS
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
///

/** VALIDAR CAMPOS DEL FORMULARIO, DE LA CONSULTA */
function validarFormularioConsulta() {
    // Obtener los valores de los campos del formulario usando getElementById
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    var rol = document.getElementById("rol");
    var mensaje = document.getElementById("mensaje");
    var enviado = document.getElementById("enviado");
    var respuesta;
    respuesta  = true;
    mensaje.style.background = "";
    nombre.style.background = "";
    apellido.style.background = "";
    
    // Verificar que todos los campos estén llenos
    if (nombre.value === "" || apellido.value === "" || email.value === "" || rol.value === "-" || mensaje.value === "") {
       // alert("Por favor, complete todos los campos.");
        enviado.textContent = "Por favor, complete todos los campos.❌";
        enviado.style.color = "red"; 
        respuesta = false;
        /// pinto el fondo segun cual es el campo que quedo vacio
        if (nombre.value ===""){
            nombre.style.background = "lightcoral";
        }
        if (apellido.value ===""){
            apellido.style.background = "lightcoral";
        }
        if (email.value ===""){
            email.style.background = "lightcoral";
        }else {
            email.style.background = "";
        }
        if (rol.value ===""){
            rol.style.background = "lightcoral";
        }else {
            rol.style.background = "";
        }
        
        if (mensaje.value ===""){
            mensaje.style.background = "lightcoral";
        }
    }
    
    // Verificar el formato del correo electrónico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
       email.style.backgroundColor = "lightcoral";
        respuesta = false;
    } else{
        //limpio formulario
        email.style.background = "";
    }
    
    // Verificar que se haya seleccionado una opción de radio
    var radioSi = document.getElementById("radio-si");
    var radioNo = document.getElementById("radio-no");
    
    if (!radioSi.checked && !radioNo.checked) {
        
        respuesta = false;
    }
    // que nombre y apellido no haya numeros
    var numerosPattern = /\d/;
    if (numerosPattern.test(nombre.value)) {
        nombre.style.background = "lightcoral";
        respuesta = false;
    }
    if (numerosPattern.test(apellido.value)) {
        apellido.style.background = "lightcoral";
        respuesta = false;
    }

    // Si todas las validaciones pasan, permitir el envío del formulario
   // respuesta = true;
  
    if (respuesta){
        enviado.textContent = "Se envio todo correctamente.✅"
        enviado.style.color = "rgb(41, 210, 41)"
    }
}



/***** AGREGAR AL CARRITO ******/

// OCULTA / MUESTRA CARRITO
const botonCarrito = document.getElementById("boton-carro"); // EL BOTON AZUL (ICONO DEL CARRITO)
const carritoContenedor = document.getElementById("carrito-contendor") // EL CONTENEDOR DE TODO LO QUE ESTA ABAJO

botonCarrito.addEventListener("click", function(){
    carritoContenedor.classList.toggle("hidden");
});

///

const carrito = document.getElementById("cart");
const totalElement = document.getElementById("total");
let total = 0; // Inicializar total como número
let productosEnCarrito = {}; // Objeto para llevar un registro de los productos en el carrito

// Función para agregar un producto al carrito
function agregarProducto(nombreProducto, precioProducto, imagenURL) {
    // Verificar si el producto ya está en el carrito
    if (productosEnCarrito[nombreProducto]) {
        alert('Ya has agregado ' + nombreProducto + ' al carrito.');
        return; // Salir de la función si el producto ya está en el carrito
    }

    // Crear elemento para mostrar en el carrito
    const productoEnCarrito = document.createElement("div");
    productoEnCarrito.classList.add("producto-en-carrito");
    productoEnCarrito.innerHTML = 
        '<img src="' + imagenURL + '" style="width: 50px; height: auto;">' +
        '<p>' + nombreProducto + '</p>' +
        '<p>Precio: $' + precioProducto + '</p>' +
        '<button class="eliminar-producto" onclick="eliminarProducto(\'' + nombreProducto + '\', ' + precioProducto + ')">Eliminar del carrito</button>';

    // Mostrar producto en el carrito
    carrito.appendChild(productoEnCarrito);

    // Agregar el producto al registro
    productosEnCarrito[nombreProducto] = true;

    // Sumar al total
    total += precioProducto;

    // Actualizar el elemento totalElement con el valor calculado
    totalElement.textContent =+ total.toFixed(2); // Formatear el total a 2 decimales
}

// Función para eliminar un producto del carrito
function eliminarProducto(nombreProducto, precioProducto) {
    // Remover el producto del DOM
    const productosEnCarritoDOM = carrito.getElementsByClassName("producto-en-carrito");
    for (let i = 0; i < productosEnCarritoDOM.length; i++) {
        const producto = productosEnCarritoDOM[i];
        const nombre = producto.getElementsByTagName("p")[0].textContent;
        if (nombre === nombreProducto) {
            carrito.removeChild(producto);
            break;
        }
    }

    // Restar el producto del total
    total -= precioProducto;
    totalElement.textContent =+ total.toFixed(2); // Actualizar el total mostrado

    // Eliminar el producto del registro
    delete productosEnCarrito[nombreProducto];
}

//// contactos

function abrirModal() {
    document.getElementById('modalContacto').style.display = 'block';
    document.getElementById('modalBackdrop').style.display = 'block';
}

// Función para cerrar el modal de contacto
function cerrarModal() {
    document.getElementById('modalContacto').style.display = 'none';
    document.getElementById('modalBackdrop').style.display = 'none';
}