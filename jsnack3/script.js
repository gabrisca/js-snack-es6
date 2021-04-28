// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

$(function () {
  console.log("doc ready");

  //creo due array con tot elementi diversi
  const arrUno = [1, 2, 3, 4, 5];
  // console.log(arrUno);
  const arrDue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log(arrDue);

  let msg = 
  `
  L'array contiene i numeri: 
  `

  getElements(arrUno, arrDue, numGenerator);
  console.log(msg  + arrUno);
  console.log(msg + arrDue);
});

// //f getElements aggiunge numeri casuali all'array più corto fino a quando i due arry hanno lo stesso numero di elementi
const getElements = (array1, array2, numGenerator) => {
  while (array1.length != array2.length) {
    if (array1.length < array2.length) {
      array1.push(numGenerator(1, 100));
    } else {
      array2.push(numGenerator(1, 100));
    }
  }
}

// f numGenerator random
// genera un numero casuale tra un minimo e un massimo
const numGenerator = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + 1) + min;
}