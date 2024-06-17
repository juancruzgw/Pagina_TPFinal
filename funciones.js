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

    // Alternar entre las clases light-mode y dark-mode
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}