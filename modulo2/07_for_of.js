console.log ("CICLOS O BUCLES");
console.log ("FOR OF");

///////////////////////////////////////////////
const nombres = ["jose","juan","pedro","simon"];
for(const nombre of nombres){
    console.log("hola",nombre);
}

/////////////////////////////////////////////
const nombre = "franciso";
for (const letra of nombre){
    console.log("letra",letra);
}
/////////////////////////////////////////////
const numeros = [4, 7, 1, 9, 3]; 
let mayor = numeros[0]; 

for (const num of numeros) {
    if (num > mayor) {
        mayor = num; 
    }
}
console.log("El número mayor es:", mayor);

//////////////////////////////////////////
const persona = {
    nombre: "anakin",
    apellido: "skywalker",
    profesion: "jedi"
}
for (const clave in persona){
    console.log ("clave", clave, ":", persona[clave]);
}


