// Crea un array composto da 10 oggetti che rappresentano un’automobile.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: inserisci nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

$(function () {
  // console.log("doc ready");
  const cars = [
    {
      marca: "Fiat",
      modello: "Punto",
      alimentazione: "Benzina",
    },
    {
      marca: "Ford ",
      modello: "Escort",
      alimentazione: "Diesel",
    },
    {
      marca: "Reanult",
      modello: "Mégane",
      alimentazione: "Elettrico",
    },
    {
      marca: "VW",
      modello: "Polo",
      alimentazione: "Gpl",
    },
    {
      marca: "Fiat",
      modello: "Panda",
      alimentazione: "Metano",
    },
    {
      marca: "Alfa Romeo",
      modello: "Giulia",
      alimentazione: "Benzina",
    },
    {
      marca: "Ferrari",
      modello: "La Ferrari",
      alimentazione: "Benzina",
    },
    {
      marca: "Tesla",
      modello: "X1",
      alimentazione: "Elettrico",
    },
    {
      marca: "Ford",
      modello: "Focus",
      alimentazione: "Diesel",
    },
    {
      marca: "Renault",
      modello: "Clio",
      alimentazione: "Diesel",
    },
  ];

  // console.log(cars)

  let benzina = $("#benzina");
  let diesel = $("#diesel");
  let altre = $("#altre");
  
  const carsBenzina = cars.filter((car)=>{
    // console.log(car);
    if(car.alimentazione === "Benzina") return true;
  }) 
  console.log(carsBenzina);
  printHtml(benzina, carsBenzina)
  

  const carsDiesel = cars.filter((car)=>{
    // console.log(car);
    if(car.alimentazione === "Diesel") return true;
  }) 
  console.log(carsDiesel);
  printHtml(diesel, carsDiesel)

  const carsOthers = cars.filter((car)=>{
    // console.log(car);
    if((car.alimentazione != "Diesel") && (car.alimentazione != "Benzina")) return true;
  }) 
  console.log(carsOthers);
  printHtml(altre, carsOthers)
});


const printHtml = (target, array) => {
  array.forEach((car) => {
    let {marca, modello, alimentazione} = car;
    let html =
    `
    <li>
    marca: ${marca}<br>
    modello: ${modello}<br>
    alimentazione: ${alimentazione}<br>
    </li>
    `;
    target.append(html)
  });
};