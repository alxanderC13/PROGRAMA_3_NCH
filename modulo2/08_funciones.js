console.log("FUNCIONES");
console.log("FUNCION SIMPLE");
function saludar (){
    console.log ("HOLA CARAMBOLA");
}
saludar();

///////////////////////////////////////
console.log ("funcion con parametros");
function suma(a,b,c){
    return a+b-c;
}
console.log("resultado de la suma:", suma(5,8,3));

//////////////////////////////////////////
console.log ("Funcion Flecha");
const funcionFlecha=()=>{
    console.log("saludos funcion flecha");
}
funcionFlecha();

/////////////////////////////////////////////
funcionFlecha();
const multiplicacion=(n,m)=>{
    return n*m;
}
console.log(multiplicacion (7,5));

//////////////////////////////////////////////////
console.log ("funcion retorno directo");
const cuadrado = x=>x*x;
console.log(cuadrado(5));
console.log ("funcion con parametros por defecto");
function division(z,k=3){
    return z/k;
}
console.log("resultado de la division es:", division(40,8));
console.log("resultado de la division es:", division(40));