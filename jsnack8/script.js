// Esercizio (oggetti, array, forEach con splice oppure filter)
// Un oggetto rappresenta una finestra di un browser e contiene due campi: 
// un array di tab aperte
// un numero che indica l’indice della tab aperta nell’array:
// {
//     “tab”: [“Facebook”, “GitHub”, “Gmail”],
//     “activeTab”: 0
// }
// Il software deve guardare se c’è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.


$(function(){
  // console.log("ready");

  const window = 
  {
    tab: [
      "Facebook",
      "Gmail",
      "GitHub",
      "Twitter",
    ],
    activeTab: 0
  }
  // console.log(window);

  // creo un array di riferimento coi i nomi dei social networks
  const socialNetworks = ["Facebook", "Instagram", "Messenger", "Twitter", "TikTok"]
  // console.log(socialNetworks);

  // filtro in un altro array (nTab) solo...
  const nTab = window.tab.filter((el)=>{
    // console.log(el);
    // ...gli elementi che non sono presenti nell'array di riferimento socialNetworks (!)
    if(!socialNetworks.includes(el)) return true
  });
  // console.log(nTab);

  // modifico l'array tab dentro l'oggetto window
  window.tab = nTab;
  // leggo l'oggetto window aggiornato
  console.log(window);
})