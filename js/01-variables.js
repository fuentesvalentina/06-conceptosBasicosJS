//esto es un comentario de una unica linea

/*esto es un comentario
de multiples lineas*/

//delcarar una variable (var - let - const) var no es usaba
let anioActual = 2023;
const universe = "https://universe.rollingcodeschool.com/";

//mostrar mensajes
console.log(anioActual);
console.log("anioActual");
console.log("Año actual: " + anioActual);
console.log(universe);

// modificar el contenido de una variable
anioActual = 2024;
console.log(anioActual);

document.write('<p class="parrafoDestacado">Esto es una prueba de document.write</p>')
//ventanas emergentes
alert('Hola Mundo')

//solicitar a un usuario un nombre y mostrar un saludo

const nombreUsuario = prompt('Ingrese su nombre');

console.log(nombreUsuario);

document.write('<p>Bienvenido '+ nombreUsuario +'</p>');

//solicitar al usuario el precio de un producto en dorales;
const precioSolicitado = parseFloat(prompt('Ingrese un valor en dolares'))
console.log(precioSolicitado)

//parseint(50)
//parseFloat(50.4)

alert ('El importe indicado corresponde a USD$'+(precioSolicitado + 2));
