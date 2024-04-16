//Workshop 2 - Sección 1 - Reto 1
const destination = prompt("Ingresa tu destino"); //Solicita al usuario un destino
let days = prompt(
  `El precio por noche para viajar a ${destination} es $320.000 (COP) ¿Cuantos dìas te vas a quedar?`
);
let budget = prompt("Haber esa cartera ¿Cual es tu presupuesto lindis?");
let priceTravel = 320000 * days; //$320.000 es el precio por noche para viajar a tu destino
if (priceTravel <= budget) {
  alert(
    `Mor te alcanza para viajar a ${destination} y te sobran $${
      budget - priceTravel
    } (COP)`
  );
} else {
  alert(`No mor ya si perdiste lindis, con ${budget} solo llegas a Manrrique` );
}
