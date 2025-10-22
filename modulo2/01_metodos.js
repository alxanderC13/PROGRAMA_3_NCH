// Este código muestra el uso de variables en JavaScript.
// Sirve para entender cómo declarar variables con var, let y const,
// y cómo imprimir sus valores en la consola.

console.log("VARIABLES");

var saludo1 = "hola";
var saludo2 = "hola desde una variable";

console.log(saludo1);

console.log(saludo1 + " " + saludo2);
console.log(`${saludo1} ${saludo2} ${4 + 5}`);

let numero = 24;
const angulo = 45;

console.log(numero, angulo);

console.log("tipo de datos");
var nombre = "darth vader"
console.log(`string`,typeof(nombre));
var TipoNumerico = 44444;
console.log(`Tipo numerico`,typeof(TipoNumerico));
var TipoBuleano = true;
console.log(`Tipo buleano`,typeof(TipoBuleano));
var TipoIndefinido =undefined;
console.log(`Tipo indefinido`,typeof(TipoIndefinido));
var TipoNula =null;
console.log(`Tipo nulo`,typeof(TipoNula));
var TipoSimbolo =Symbol ("clave");
console.log(`Tipo simbolo`,typeof(TipoSimbolo));
var TipoBigEntero = 424242;
console.log(`Tipo big entero`,typeof(TipoBigEntero));

const persona ={
    nombre: "alex",
    edad: 30
}
console.log(`Tipo objeto`,typeof(persona));
console.log(persona);
console.log(persona.edad);
console.log(persona.nombre);
