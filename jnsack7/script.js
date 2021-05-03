// Esercizio (array, oggetti, map, interpolazione delle stringhe)
// Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
// Es:
// [
// 	{ nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
// 	{ nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
// 	{ nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
// ]
// [
// 	‘Mario Rossi può guidare’,
// 	‘Luigi Verdi non può guidare’,
// 	‘Silvia Neri può guidare’,
// ]

$(function (){
  // console.log("ready");

  const nomi = [
    {
      nome: "Maria",
      cognome: "Selena",
      età: 13
    },
    {
      nome: "Gianni",
      cognome: "Vecchio",
      età: 88
    },
    {
      nome: "Giada",
      cognome: "Tera",
      età: 29
    },
    {
      nome: "Peppe",
      cognome: "Delfino",
      età: 43
    },
    {
      nome: "Camilla",
      cognome: "Brilla",
      età: 29
    },
    {
      nome: "Gennaro",
      cognome: "Savastano",
      età: 83
    },
  ];

  // console.log(nomi);

  const guidatori = nomi.map((guidatore)=>{
    // destrutturo guidatore e vedo solo i nomi e i cognomi
    const {nome, cognome} = guidatore;
    // console.log(guidatore.nome, guidatore.cognome);

    // condizione in base all'età (possono guidare solo quelli che hanno un età compresa tra 18 e 80 anni)
    if((guidatore.età >= 18) && (guidatore.età <= 80) ){
      // console.log(" può guidare");
      return `${nome} ${cognome} può guidare`
    } else {
      // console.log(" non può guidare");
      return `${nome} ${cognome} non può guidare`
    }
  })
  console.log(guidatori);
});