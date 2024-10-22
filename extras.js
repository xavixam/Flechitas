// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
      name: "Ana",
      role: "becaria",
      hobbies: ["nadar", "bailar"],
    },
    {
      name: "Luis",
      role: "programador",
      hobbies: ["dormir", "comprar"],
    },
    {
      name: "Carlos",
      role: "secretario",
      hobbies: ["futbol", "queso"],
    },
];

const gente = staff.map(persona => `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`)
console.log(...gente);

// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

const comida = foodList.map((food, i) => {
    switch (i) {
        case 0:
            return `Como soy de Italia, amo comer ${food}`
        break;
        case 1:
            return `Como soy de Japón, amo comer ${food}`
        break;
        case 2:
            return `Como soy de Valencia, amo comer ${food}`
        break;
        case 3:
            return `Aunque no como carne, el ${food} es sabroso`
        break;
    }
})
console.log(comida);

// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
];
const masDe300 = inventory.filter(element => element.price > 300)
console.log(masDe300);

// Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    'Xavi',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];
const frase = sentenceElements.reduce((a,b) => `${a} ${b}`)
console.log(frase);