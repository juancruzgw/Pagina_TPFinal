
//
/*** MODO CLARO / MODO OSCURO */ // 
document.addEventListener('DOMContentLoaded', function() {
    var temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'oscuro') {
        document.body.classList.add('dark-mode');
        document.getElementById("noche").src = "../imagenes/day1.png";
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById("noche").src = "../imagenes/night1.png";
    }
});
function cambioModo () {
    var body = document.body;
    var imagen = document.getElementById("noche");
    var carrito = document.querySelector('.product button');
    // Alternar entre las clases light-mode y dark-mode
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        imagen.src = "../imagenes/day1.png";
        localStorage.setItem('tema', 'oscuro');
        carrito.style.backgroundImage = 'url(../imagenes/carritomas.png)';
    
    } else {
        imagen.src = "../imagenes/night1.png";
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
       localStorage.setItem('tema', 'claro');
        carrito.style.backgroundImage = 'url(../imagenes/carritoblanco.png)';

    }
}

/////

// LINKS A PAGINAS
document.addEventListener('DOMContentLoaded', function() {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");

    if (html && css && js) {
        css.addEventListener("click", irAcss);
        js.addEventListener("click", irAjs);
        html.addEventListener("click", irAhtml);
    } /*else {
        console.error('Uno o más elementos no fueron encontrados.');
    }*/
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
        
        email.style.background = "";
    }
    
    
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


/** AGREGAR AL CARRITO */

// Función para agregar productos al carrito

// USO GET ELEMENT BY ID DE TODOS LOS ELEMENTOS QUE VOY A NECESITAR //

const botonCarrito = document.getElementById("boton-carro"); // el boton azul para abril el carrito 
const carritoContenedor = document.getElementById("carrito-contendor"); // todo el carrito oculto

const cuponInput = document.getElementById("cupon-input"); // input del cupon, (en pagina finalizaCompra.html)
const aplicarCuponBtn = document.getElementById("aplicar-cupon-btn"); // boton de aplicar cupon
const cuponMensaje = document.getElementById("cupon-mensaje"); //mensaje si se aplico el cupon
const finalizarCompraBtn = document.getElementById("finalizar-compra-btn"); // finaliza compra boton 
const mensajeFinalizarCompra = document.getElementById("mensaje-finalizar-compra");

const carrito = document.getElementById("cart"); //donde se van acumulando los productos
const totalElement = document.getElementById("total"); // suma de todos los cursos
let total = 0;
let descuentoAplicado = false;


// 2 CARGO LOS ELEMENTOS DEL DOM (sin esto se me rompia) DOMContentLoaded

document.addEventListener('DOMContentLoaded', function() {
    if (botonCarrito && carritoContenedor) {
        botonCarrito.addEventListener("click", function() {
            carritoContenedor.classList.toggle("hidden");
        });
    } 
    actualizarCarrito(); //para empezar en 0 
    if (finalizarCompraBtn) {
        finalizarCompraBtn.addEventListener("click", finalizarCompra);
    } 
});



// FUNCION DE AGREGAR EL PRODUCTO
function agregarProducto(nombreProducto, precioProducto, imagenURL) {
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let productoYaEnCarrito = false;

    // Recorrer el carrito para verificar si el producto ya está presente
    for (let i = 0; i < productosEnCarrito.length; i++) {
        if (productosEnCarrito[i].nombre === nombreProducto) {
            productoYaEnCarrito = true;
        }
    }

    // Verificar si el producto ya está en el carrito
    if (productoYaEnCarrito) {
        alert("Este curso ya está agregado al carrito");
    } else {
        // Agregar el nuevo producto al carrito
        productosEnCarrito.push({
            nombre: nombreProducto,
            precio: precioProducto,
            imagen: imagenURL
        });
        // Actualizar el local storage para que quede guardado
        localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    //Obtiene los productos del carrito almacenados en localStorage o inicializar un arreglo vacio si no hay datos
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.innerHTML = '';
    total = 0;
   // (forEach) recorre todos los productos en productosEnCarrito
    productosEnCarrito.forEach(producto => {
        //creo un div para poner cada producto en el carrito y con el classList.add se asigno la clase
        const productoEnCarrito = document.createElement("div");
        productoEnCarrito.classList.add("producto-en-carrito");
        //aca pongo en el HTML todos los atributos del obj producto, que seria la foto, el nombre y el precio //
        productoEnCarrito.innerHTML = 
            `<img src="${producto.imagen}" style="width: 50px; height: auto;">
            <p>${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <button class="eliminar-producto" onclick="eliminarProducto('${producto.nombre}', ${producto.precio})">Eliminar</button>`;

        // agrego el nuevo elemento <div> al elemento 'carrito' en el DOM.
        carrito.appendChild(productoEnCarrito);

        if (descuentoAplicado) {
            total += producto.precio * 0.8;
        } else {
            total += producto.precio;
        }
    });

    totalElement.textContent = total;
}

function eliminarProducto(nombreProducto) {
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let nuevoCarrito = [];

    for (let i = 0; i < productosEnCarrito.length; i++) {
        if (productosEnCarrito[i].nombre !== nombreProducto) {
            nuevoCarrito.push(productosEnCarrito[i]);
        }
    }
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    actualizarCarrito();
}


/// CUPON DE DESCUENTO
if (aplicarCuponBtn) {
    aplicarCuponBtn.addEventListener("click", function() {
        const cupon = cuponInput.value.trim();

        if (cupon === "PRIMERCOMPRA") {
            if (!descuentoAplicado) {
                total *= 0.8; // Aplica descuento del 20%
                descuentoAplicado = true;
                totalElement.textContent = total;
                cuponMensaje.style.backgroundColor = "lightgreen";
                cuponMensaje.textContent = "Descuento aplicado del 20% por cupón PRIMERCOMPRA.";
                cuponMensaje.style.display = "block";
            } else {
                cuponMensaje.style.backgroundColor = "lightcoral";
                cuponMensaje.textContent = "El cupón PRIMERCOMPRA ya ha sido aplicado.";
                cuponMensaje.style.display = "block";
            }
        } else {
            cuponMensaje.style.backgroundColor = "lightcoral";
            cuponMensaje.textContent = "Cupón inválido. Intente de nuevo.";
            cuponMensaje.style.display = "block";
        }

        // Limpiar campo de cupón después de aplicarlo
        cuponInput.value = "";
    });
} 
// ESTO ES PARA EL INDEX.HTML
function finalizarCompra() {
    // esto se encarga de no confirmar compra con el carrito vacio, si hay aunque sea 1 te manda a la pag de 'finalizaCompra.html'
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
            <span class="producto-precio">$${producto.precio}</span>
        </div>
    `;
        productosContainer.appendChild(productoElement); // 
    });

    totalElement.textContent = total;

    /*document.getElementById('confirmar-compra-btn').addEventListener('click', () => {
        alert('Compra confirmada. ¡Gracias por tu compra!');
        localStorage.removeItem('carrito');
        window.location.href = 'index.html';
    });*/
});






//// contactos abrir y cerrar modal/solapa

function abrirModal() {
    document.getElementById('modalContacto').style.display = 'block'; // lo muestra
    document.getElementById('modalBackdrop').style.display = 'block'; // lo muestra
}
function cerrarModal() {
    document.getElementById('modalContacto').style.display = 'none'; // lo oculta
    document.getElementById('modalBackdrop').style.display = 'none';// lo oculta
}

/// juego en js de adivinar el numero

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

function adivinarNumero() {
    const entradaNumero = document.getElementById('guessInput');
    const mensaje = document.getElementById('message');
    const intento = parseInt(entradaNumero.value);

  if (isNaN(intento) || intento < 1 || intento > 100) {
    mensaje.textContent = 'Ingresa un número válido entre 1 y 100';
  } else {
    intentos++;

    if (intento === numeroAleatorio) {
      mensaje.textContent = `Ganaste! Adivinaste el número en ${intentos} intentos.`;
      
      reiniciarJuego();
    } else if (intento < numeroAleatorio) {
      mensaje.textContent = 'es mayor!';
    } else {
      mensaje.textContent = 'es menor!';
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
                const nuevoTamanio = deslizador.value + 'px';
                divRedimensionable.style.width = nuevoTamanio;
                divRedimensionable.style.height = nuevoTamanio;
            });
        } 
    });


    // validacion del confirmar compra

    const nombreTitularInput = document.getElementById('nombre-titular');
    const numeroTarjetaInput = document.getElementById('numero-tarjeta');
    //const fechaVencimientoInput = document.getElementById('fecha-vencimiento');
    const metodoPagoInput = document.getElementById('metodoPago');
    const confirmarCompraBtn = document.getElementById('confirmar-compra-btn');
    const mensajeCompraRealizada = document.getElementById('mensaje-compra-realizada');
    
    confirmarCompraBtn.addEventListener('click', function(event) {
        let esValido = true;
    
       
        if (nombreTitularInput.value.trim() === '') {
            nombreTitularInput.style.backgroundColor = "lightcoral";
            esValido = false;
        } else {
            nombreTitularInput.style.backgroundColor = "";
        }
    
    
        const numeroTarjeta = numeroTarjetaInput.value.trim();
        if (numeroTarjeta.length !== 16 || isNaN(numeroTarjeta)) {
            numeroTarjetaInput.style.backgroundColor = "lightcoral";
            esValido = false;
        } else {
            numeroTarjetaInput.style.backgroundColor = "";
        }
    
        
        const opcionesPago = document.getElementById('opcionesPago').getElementsByTagName('option');
        let metodoPagoValido = false;
        for (let i = 0; i < opcionesPago.length; i++) {
            if (opcionesPago[i].value === metodoPagoInput.value) {
                metodoPagoValido = true;
                break;
            }
        }
        if (!metodoPagoValido) {
            metodoPagoInput.style.backgroundColor = "lightcoral";
            esValido = false;
        } else {
            metodoPagoInput.style.backgroundColor = "";
        }
    
       
        if (!esValido) {
            event.preventDefault();
        } else {
            alert("Compra realizada");
            localStorage.removeItem('carrito');
            setTimeout(function() {
                window.location.assign("index.html");
            }, 100); 
        }
    });