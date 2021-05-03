// Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

$(function() {
  // console.log("doc ready");

  const nomi = [
    "pippo",
    "PINO",
    "pLUto",
    "ciRo"
  ];

  const nomiMaiusc = nomi.map((nome)=>{
    // trasformo tutte le stringhe in caratteri minuscoli
    let nomeMin = nome.toLowerCase();
    // console.log(nomeMin)

    // richiamo la funzione che trasforma la prima lettera in maisucolo
    let nomeCap = firstLetterCap(nomeMin);
    // console.log(nomeCap)

    return nomeCap
  });
  console.log(nomiMaiusc);
  


  /////////////////////
  //F U N C T I O N S//
  /////////////////////
  function firstLetterCap(str) {
    // str.charAt(0) restituisce la prima lettera della stringa
    // .toUpperCase la trasforma in maiuscola
    // str.slice(1) restituisce il resto dell stringa escludendo il primo carattere
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});