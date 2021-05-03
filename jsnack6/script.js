// Esercizio (array, oggetti, filter)
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
// [
// 	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
// 	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
// 	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
// ]
// Crea un nuovo array con la lista dei mammiferi.

$(function(){
// console.log("ready");

const animals = [
  {
    nome: "leone",
    famiglia: "felidi",
    classe: "mammiferi"
  },
  {
    nome: "canguro",
    famiglia: "macropodidi",
    classe: "mammiferi"
  },
  {
    nome: "alligatore",
    famiglia: "alligatoridi",
    classe: "rettili"
  },
  {
    nome: "gallina",
    famiglia: "fasianidi",
    classe: "uccelli"
  },
  {
    nome: "cane",
    famiglia: "canidi",
    classe: "mammiferi"
  },
];

// console.log(animals)


// option 1
// se è vero che animal è mammifero pushalo dentro un nuovo array (mammals)
const mammals = animals.filter((animal) => animal.classe === "mammiferi"); // senza return perchè su una riga
console.log(mammals);

// option 2
// const mammals = animals.filter((animal)=>{
//   if(animal.classe === "mammiferi") return true
// })
// console.log(mammals);

});