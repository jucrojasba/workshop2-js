const budget = parseFloat(prompt("Ingresa tu presupuesto"));
const cost = parseFloat(
  prompt(
    "Ingresa el total de costos estimados de viaje incluyendo alojamiento, transporte y comida"
  )
);
const threshold = parseFloat(
  prompt(
    "Ingresa una cantidad fija considerada para gastos imprevistos o emergencias durante el viaje"
  )
);
console.log(
  `Your budget is ${budget}\n Yor expenses are ${cost}\n Your threshold is ${threshold}\n Your unused budget is ${
    budget - cost - threshold
  }`
);
let minValue = budget - cost - threshold;
if (minValue >= 50000) {
  //$50.000 es el precio minimo para agregar un articulo
  alert(`Felicidades tienes ${minValue} para agregar un artìculo adicional`);
  let addMore = confirm("Deseas conocer los articulos que puedes agregar?");
  if (addMore) {
    let articles = [
      { name: "zapatos", cost: 50000 },
      { name: "toallas", cost: 90000 },
      { name: "cobijas", cost: 135000 },
    ];
    let lowCost = [];
    for (let index = 0; index < articles.length; index++) {
      if (minValue > articles[index].cost) {
        lowCost.push(articles[index].name);
        minValue = minValue - articles[index].cost;
      } else {
        alert(
          `Puedes agregar los siguientes articulos ${lowCost} y te sobran ${minValue}`
        );
        console.log(
          `Puedes agregar los siguientes articulos ${lowCost} y te sobran ${minValue}`
        );
        break;
      }
    }
  } else {
    alert("Buen viaje!");
  }
} else {
  alert("Tus fondos son insuficientes para adquirir un articulo adicional");
}
