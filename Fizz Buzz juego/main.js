//Crear el loop

// for (i = 0; i <= 100; i +=1) {
// console.log(i)
    

console.log("<< Fizzbuzz >> ")
console.log('    ')
for (let i = 1; i <= 100; i ++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i + " --> Fizzbuzz"); 
    } else if (i % 3 == 0) {
        console.log(i + " --> Fizz");
    } else if (i % 5 == 0) {
        console.log(i + " --> Buzz");
    } else {
    console.log(i)
    }
}



// var numero = prompt("Escoge un número del 1 al 100!")

// if (numero % 3 == 0 && numero % 5 == 0) {
//         console.log(numero + " --> Fizzbuzz"); 
//     } else if (numero % 3 == 0) {
//         console.log(numero + " --> Fizz");
//     } else if (numero % 5 == 0) {
//         console.log(numero + " --> Buzz");
// } else {
//     console.log(numero + " ---> No es divisible por 3 o 5")
// }
