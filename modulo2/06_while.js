console.log("CICLOS O BUCLES");
console.log("WHILE");

// Ejemplo 1: contador con while
let i = 1; 
while(i <= 3){
    console.log("contador:", i);
    i++;
}

// Ejemplo 2: recorrer array mientras los valores sean positivos
let valores = [3, 4, -2, 4, 5];
let indice = 0;
while (valores[indice] > 0){
    console.log("valor valido:", valores[indice]); 
    indice++;
}

// Ejemplo 3: imprimir números impares menores a 10
let n = 1;
while (n < 10){
    if(n % 2 !== 0){
        console.log(n, "es impar");
    }
    n++;
}

// Ejemplo 4: do...while
let x = 5;
do {
    console.log("iteracion", x);
    x++;
} while(x < 5);  

// Ejemplo 5: suma con do...while
let contador = 5;
let suma = 0;
do {
    suma += contador;  
    contador++;
} while(contador <= 5);
console.log("Suma:", suma);

// Ejemplo 6: reducción con do...while
let reduccion = 1;
do {
    console.log("reduccion", reduccion);
    reduccion--;
} while(reduccion >= 0);  

// Ejemplo 7: tabla del 6
console.log("Tabla del 6");
let a = 1;
while (a <= 10) {
    console.log("6 x", a, "=", 6 * a);
    a++;
}


