// Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
// il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// la media punti fatti per partita deve essere compresa tra 0 e 50
// la percentuale di successo da 3 punti deve essere compresa tra 0 e 100

$(function (){
  const basketTeam = [
    {
      name: "James",
    },
    {
      name: "Stephen",
    },
    {
      name: "Dwayne",
    },
    {
      name: "Michael",
    },
    {
      name: "Shaquille",
    },
  ];
  
  for(let player of basketTeam){
    
    player.cod = strGenerator() + getNum(100,999);
    // console.log(basketTeam.cod);
    player.mediaP = getNum(0,50);
    // console.log(basketTeam.mediaP);
    player.percTiri3 = getNum(0,100);
    // console.log(basketTeam.percTiri3);
  }
  console.log(basketTeam)
})

//////////////////////
//F U N C T I O N S //
//////////////////////


// f genera numero random tra un minimo ed un massimo
const getNum = (min,max) => Math.floor(Math.random() * (max - min) ) + min;

const strGenerator = () => {
  // array vuoto di dafault
  let str = [];
  // lettere che comporranno la stringa (maiuscole)
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  // ciclo for che genera 3 lettere casuali (grazie a charAt(Math...) e le pusha nell'array
  for (let i = 0; i <= 2; i++) {
    str.push(letters.charAt(Math.floor(Math.random() * letters.length)));
  }
  // join("")mi restituisce il contenuto dell'rray sotto forma di stringa
  return str.join("");
}



