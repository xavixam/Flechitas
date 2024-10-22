// Convierte la siguiente función en una función flecha:
const saludar = () => "Hola"

// Convierte la siguiente función en una función flecha en línea:
const division = (a,b) => a / b;
  
// Convierte la siguiente función en una función flecha:
const miNombre = (nombre) => `Mi nombre es ${nombre}`
  
// Convierte las siguientes funciones en funciones flecha:
const test2 = () => console.log("Función test 2 ejecutada.")
const test1 = (callback) => callback()
  
// Utiliza la siguiente array para resolver los próximos ejercicios:    
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
];
    
// Crea un array con la gente mayor de 25 años y muéstralo por consola.
const array25 = []
gente.forEach(element => {
    if (element.edad > 25) {
        array25.push(element)
    }
});
console.log(array25);

// Crea un array con la gente que empieza por J. 
const arrayJ = []
gente.forEach(element => {
    if (element.nombre[0] == "J") {
        arrayJ.push(element)
    }
});
console.log(arrayJ);

// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const map25  = gente.map((value) => {
    if (value.edad > 25) {
        return value;
    }
})
console.log(map25);

// Crea un array con la gente que empieza por J. 
const mapJ = gente.map(value => {
    if(value.nombre[0] == "J") {
        return value
    }
})
console.log(mapJ);

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const cuadrado = numbers.map(value => value*value)
console.log(cuadrado);

// Crea un segundo array que devuelva los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosFiltrados = numbers2.filter(numero => numero%2 !== 0)
console.log(numerosFiltrados);

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
{ name: 'Tempeh', isVeggie: true },
{ name: 'Cheesbacon burguer', isVeggie: false },
{ name: 'Tofu burguer', isVeggie: true },
{ name: 'Entrecot', isVeggie: false }
];
const veggieFood = foodList.filter(food => food.isVeggie == true)
const imprimirVeggie = veggieFood.map(value => `Que rico ${value.name} me voy a comer!`)
console.log(...imprimirVeggie);

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62]
const mult = numbers.reduce((a,b)=> a * b)
console.log(mult);
