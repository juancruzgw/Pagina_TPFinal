
/*** MODO CLARO / MODO OSCURO 
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
});*/
//
/*** MODO CLARO / MODO OSCURO */
function toggleMode() {
    var body = document.body;
    var imagen = document.getElementById("noche");
    var carrito = document.querySelector('.product button');
    // Alternar entre las clases light-mode y dark-mode
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        imagen.src = "imagenes/day1.png";
        localStorage.setItem('tema', 'oscuro');
        carrito.style.backgroundImage = 'url(imagenes/carritomas.png)';
    
    } else {
        imagen.src = "imagenes/night1.png";
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('tema', 'claro');
        carrito.style.backgroundImage = 'url(imagenes/carritoblanco.png)';

    }
}

// Aplicar el tema guardado al cargar la página
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
document.addEventListener('DOMContentLoaded', function() {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");

    if (html && css && js) {
        css.addEventListener("click", irAcss);
        js.addEventListener("click", irAjs);
        html.addEventListener("click", irAhtml);
    } else {
        console.error('Uno o más elementos no fueron encontrados.');
    }
});

function irAjs() {
    window.location.href = "./infoJs.html";
}

function irAhtml() {
    window.location.href = "./infohtml.html";
}

function irAcss() {
    window.location.href = "./infoCss.html";
}

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

/*
const botonCarrito = document.getElementById("boton-carro");
const carritoContenedor = document.getElementById("carrito-contendor");

document.addEventListener('DOMContentLoaded', function() {
    const botonCarrito = document.getElementById("boton-carro");
    const carritoContenedor = document.getElementById("carrito-contendor");

    if (botonCarrito && carritoContenedor) {
        botonCarrito.addEventListener("click", function() {
            carritoContenedor.classList.toggle("hidden");
        });
    } else {
        console.error('Uno o más elementos no fueron encontrados.');
    }
});*/




/***** AGREGAR AL CARRITO ******/
/*
const botonCarrito = document.getElementById("boton-carro");
const carritoContenedor = document.getElementById("carrito-contendor");
const cuponInput = document.getElementById("cupon-input");
const aplicarCuponBtn = document.getElementById("aplicar-cupon-btn");
const cuponMensaje = document.getElementById("cupon-mensaje");
const finalizarCompraBtn = document.getElementById("finalizar-compra-btn");
const mensajeFinalizarCompra = document.getElementById("mensaje-finalizar-compra");

document.addEventListener('DOMContentLoaded', function() {
    const botonCarrito = document.getElementById("boton-carro");
    const carritoContenedor = document.getElementById("carrito-contendor");

    if (botonCarrito && carritoContenedor) {
        botonCarrito.addEventListener("click", function() {
            carritoContenedor.classList.toggle("hidden");
        });
    } else {
        console.error('Uno o más elementos no fueron encontrados.');
    }
});



const carrito = document.getElementById("cart");
const totalElement = document.getElementById("total");
let total = 0;
let productosEnCarrito = [];
let descuentoAplicado = false;

function agregarProducto(nombreProducto, precioProducto, imagenURL) {
    if (productosEnCarrito.includes(nombreProducto)) {
        cuponInput.style.backgroundColor = "lightcoral";
        return;
    }

    const productoEnCarrito = document.createElement("div");
    productoEnCarrito.classList.add("producto-en-carrito");
    productoEnCarrito.innerHTML = 
        '<img src="' + imagenURL + '" style="width: 50px; height: auto;">' +
        '<p>' + nombreProducto + '</p>' +
        '<p>Precio: $' + precioProducto.toFixed(2) + '</p>' +
        '<button class="eliminar-producto" onclick="eliminarProducto(\'' + nombreProducto + '\', ' + precioProducto + ')">Eliminar del carrito</button>';

    carrito.appendChild(productoEnCarrito);

    productosEnCarrito.push(nombreProducto);

    if (descuentoAplicado) {
        total += precioProducto * 0.8;
    } else {
        total += precioProducto;
    }

    totalElement.textContent = total.toFixed(2);
}

function eliminarProducto(nombreProducto, precioProducto) {
    const productosEnCarritoDOM = carrito.getElementsByClassName("producto-en-carrito");
    for (let i = 0; i < productosEnCarritoDOM.length; i++) {
        const producto = productosEnCarritoDOM[i];
        const nombre = producto.getElementsByTagName("p")[0].textContent;
        if (nombre === nombreProducto) {
            carrito.removeChild(producto);
            break;
        }
    }

    if (descuentoAplicado) {
        total -= precioProducto * 0.8;
    } else {
        total -= precioProducto;
    }

    totalElement.textContent = total.toFixed(2);

    const index = productosEnCarrito.indexOf(nombreProducto);
    if (index !== -1) {
        productosEnCarrito.splice(index, 1);
    }
}

// Event listener para aplicar el cupón
document.addEventListener('DOMContentLoaded', function() {
    const aplicarCuponBtn = document.getElementById("aplicar-cupon-btn");

    if (aplicarCuponBtn) {
        aplicarCuponBtn.addEventListener("click", function() {
            const cupon = cuponInput.value.trim();

            if (cupon === "PRIMERCOMPRA") {
                if (!descuentoAplicado) {
                    total *= 0.8; // Aplicar descuento del 20%
                    descuentoAplicado = true;
                    totalElement.textContent = total.toFixed(2);
                    cuponInput.style.backgroundColor = "lightgreen";
                    cuponMensaje.textContent = "Descuento aplicado del 20% por cupón PRIMERCOMPRA.";
                    cuponMensaje.style.display = "block";
                } else {
                    cuponInput.style.backgroundColor = "lightcoral";
                    cuponMensaje.textContent = "El cupón PRIMERCOMPRA ya ha sido aplicado.";
                    cuponMensaje.style.display = "block";
                }
            } else {
                cuponInput.style.backgroundColor = "lightcoral";
                cuponMensaje.textContent = "Cupón inválido. Intente de nuevo.";
                cuponMensaje.style.display = "block";
            }

            // Limpiar campo de cupón después de aplicarlo
            cuponInput.value = "";
        });
    } else {
        console.error('Elemento "aplicar-cupon-btn" no encontrado.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Event listener para finalizar la compra
    finalizarCompraBtn.addEventListener("click", function() {
        // Verificar si hay productos en el carrito
        if (productosEnCarrito.length === 0) {
            mensajeFinalizarCompra.textContent = "No hay productos en el carrito. Agregue productos para realizar la compra.";
            mensajeFinalizarCompra.style.color = "red";
            mensajeFinalizarCompra.style.display = "block";
        } else {
            mensajeFinalizarCompra.textContent = "¡Compra finalizada! Gracias por tu compra.";
            mensajeFinalizarCompra.style.color = "green";
            mensajeFinalizarCompra.style.display = "block";
            setTimeout(function() {
                mensajeFinalizarCompra.style.display = "none";
                reiniciarCarrito(); // Esta función debería reiniciar el carrito después de la compra
            }, 3000); // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
        }
    });
});

// Función para reiniciar el carrito después de finalizar la compra
function reiniciarCarrito() {
    carrito.innerHTML = ""; // Vaciar el contenido del carrito
    total = 0; // Reiniciar el total a cero
    totalElement.textContent = total.toFixed(2); // Actualizar el elemento total mostrado
    productosEnCarrito = []; // Reiniciar el arreglo de productos en el carrito
    descuentoAplicado = false; // Reiniciar el estado del descuento aplicado
    cuponInput.style.backgroundColor = ""; // Limpiar el color de fondo del input de cupón
    cuponInput.value = ""; // Limpiar campo de cupón
    cuponMensaje.textContent = ""; // Limpiar mensaje de cupón
    cuponMensaje.style.display = "none"; // Ocultar mensaje de cupón
    mensajeFinalizarCompra.textContent = ""; // Limpiar mensaje de finalización de compra
    mensajeFinalizarCompra.style.display = "none"; // Ocultar mensaje de finalización de compra
}
*/




// Función para agregar productos al carrito
const botonCarrito = document.getElementById("boton-carro");
const carritoContenedor = document.getElementById("carrito-contendor");
const cuponInput = document.getElementById("cupon-input");
const aplicarCuponBtn = document.getElementById("aplicar-cupon-btn");
const cuponMensaje = document.getElementById("cupon-mensaje");
const finalizarCompraBtn = document.getElementById("finalizar-compra-btn");
const mensajeFinalizarCompra = document.getElementById("mensaje-finalizar-compra");
const carrito = document.getElementById("cart");
const totalElement = document.getElementById("total");
let total = 0;
let descuentoAplicado = false;

document.addEventListener('DOMContentLoaded', function() {
    if (botonCarrito && carritoContenedor) {
        botonCarrito.addEventListener("click", function() {
            carritoContenedor.classList.toggle("hidden");
        });
    } else {
        console.error('Uno o más elementos no fueron encontrados.');
    }

    actualizarCarrito();
    if (finalizarCompraBtn) {
        finalizarCompraBtn.addEventListener("click", finalizarCompra);
    } else {
        console.error('Elemento "finalizar-compra-btn" no encontrado.');
    }
});

function agregarProducto(nombreProducto, precioProducto, imagenURL) {
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (productosEnCarrito.some(producto => producto.nombre === nombreProducto)) {
        cuponInput.style.backgroundColor = "lightcoral";
        return;
    }

    productosEnCarrito.push({ nombre: nombreProducto, precio: precioProducto, imagen: imagenURL });
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.innerHTML = '';
    total = 0;

    productosEnCarrito.forEach(producto => {
        const productoEnCarrito = document.createElement("div");
        productoEnCarrito.classList.add("producto-en-carrito");
        productoEnCarrito.innerHTML = 
            `<img src="${producto.imagen}" style="width: 50px; height: auto;">
            <p>${producto.nombre}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button class="eliminar-producto" onclick="eliminarProducto('${producto.nombre}', ${producto.precio})">Eliminar del carrito</button>`;

        carrito.appendChild(productoEnCarrito);

        if (descuentoAplicado) {
            total += producto.precio * 0.8;
        } else {
            total += producto.precio;
        }
    });

    totalElement.textContent = total.toFixed(2);
}

function eliminarProducto(nombreProducto) {
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    productosEnCarrito = productosEnCarrito.filter(producto => producto.nombre !== nombreProducto);
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
    actualizarCarrito();
}
// CHEQUEA SI PUSO EL CUPON //
if (aplicarCuponBtn) {
    aplicarCuponBtn.addEventListener("click", function() {
        const cupon = cuponInput.value.trim();

        if (cupon === "PRIMERCOMPRA") {
            if (!descuentoAplicado) {
                total *= 0.8; // Aplica descuento del 20%
                descuentoAplicado = true;
                totalElement.textContent = total.toFixed(2);
                cuponInput.style.backgroundColor = "lightgreen";
                cuponMensaje.textContent = "Descuento aplicado del 20% por cupón PRIMERCOMPRA.";
                cuponMensaje.style.display = "block";
            } else {
                cuponInput.style.backgroundColor = "lightcoral";
                cuponMensaje.textContent = "El cupón PRIMERCOMPRA ya ha sido aplicado.";
                cuponMensaje.style.display = "block";
            }
        } else {
            cuponInput.style.backgroundColor = "lightcoral";
            cuponMensaje.textContent = "Cupón inválido. Intente de nuevo.";
            cuponMensaje.style.display = "block";
        }

        // Limpiar campo de cupón después de aplicarlo
        cuponInput.value = "";
    });
} else {
    console.error('Elemento "aplicar-cupon-btn" no encontrado.');
}
// ESTO ES PARA EL INDEX.HTML
function finalizarCompra() {
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (productosEnCarrito.length === 0) {
        mensajeFinalizarCompra.textContent = "No hay productos en el carrito. Agregue productos para realizar la compra.";
        mensajeFinalizarCompra.style.color = "red";
        mensajeFinalizarCompra.style.display = "block";
    } else {
        window.location.href = 'finalizaCompra.html';
    }
}

function reiniciarCarrito() {
    localStorage.removeItem('carrito');
    actualizarCarrito();
    descuentoAplicado = false;
    cuponInput.style.backgroundColor = "";
    cuponInput.value = "";
    cuponMensaje.textContent = "";
    cuponMensaje.style.display = "none";
    mensajeFinalizarCompra.textContent = "";
    mensajeFinalizarCompra.style.display = "none";
}

// ESTE FINALIZAR ES PARA EL ULTIMO, EL DE "CONFIRMAR"

//// FINALIZAR COMPRA ******** 

document.addEventListener('DOMContentLoaded', function() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productosContainer = document.getElementById('productos');
    const totalElement = document.getElementById('total');
   // let total = 0;

    carrito.forEach(producto => {
        total += producto.precio;
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="producto-info">
            <span class="producto-nombre">${producto.nombre}</span>
            <span class="producto-precio">$${producto.precio.toFixed(2)}</span>
        </div>
    `;
        productosContainer.appendChild(productoElement);
    });

    totalElement.textContent = total.toFixed(2);

    document.getElementById('confirmar-compra-btn').addEventListener('click', () => {
        alert('Compra confirmada. ¡Gracias por tu compra!');
        localStorage.removeItem('carrito');
        window.location.href = 'index.html';
    });
});






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

/// juego en js de adivinar el numero

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    function adivinarNumero() {
      const guessInput = document.getElementById('guessInput');
      const message = document.getElementById('message');
      const guess = parseInt(guessInput.value);

      if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Ingresa un numero valido entre 1 y 100';
      } else {
        intentos++;

        if (guess === numeroAleatorio) {
          message.textContent = `Ganaste! Adivinaste el número en ${intentos} intentos.`;
          
          reiniciarJuego();
        } else if (guess < numeroAleatorio) {
          message.textContent = 'Es mayor!';
        } else {
          message.textContent = 'Es menor!';
        }
      }
    }

    function reiniciarJuego() {
      numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      intentos = 0;
    }

// slider que cambia el tamaño del cubo
    document.addEventListener('DOMContentLoaded', function() {
        // Agregar aquí tu lógica que necesita el DOM completamente cargado
        const deslizador = document.getElementById('deslizador');
        const divRedimensionable = document.getElementById('redimensionable');
    
        if (deslizador && divRedimensionable) {
            deslizador.addEventListener('input', function() {
                const nuevoTamano = deslizador.value + 'px';
                divRedimensionable.style.width = nuevoTamano;
                divRedimensionable.style.height = nuevoTamano;
            });
        } else {
            console.error('Elementos no encontrados.');
        }
    });