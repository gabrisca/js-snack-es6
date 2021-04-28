// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

$(function () {
  console.log("doc ready");

  // creo un array di numeri
  const mioArray = ["pane", "latte", "biscotti", "frutta", "verdure", "surgelati"];
  console.log(mioArray);

  // creo un nuovo array con funzione che restituisce i valori del vecchio array compresi tra un min e un max
  const newArray = getArray(mioArray,1,3)
  console.log(newArray)
});

/////////////////////////
// F U N C T I O N S  //
////////////////////////

// funzione che genera un nuovo array con valori tra a e b
const getArray = (array, a, b) => {
  // slice restituisce i valori dell'array compresi tra due parametri
  let newArray = array.slice(a, b+1);
  return newArray;
}
