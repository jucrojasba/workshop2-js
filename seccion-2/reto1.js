//Workshop 2 - Section 2 - Reto 1
let energy = confirm(
  "¿Tienes energia animica muñe? \nAceptar para si y Cancelar para no"
);
let weather = confirm("¿Hay buen clima? \nAceptar para si y Cancelar para no");
let job = confirm(
  "¿Mor, tienes trabajito por hacer? \nAceptar para si y Cancelar para no"
);
if (energy && weather && !job) {
  alert(
    "Ay hermosa! super bueno, vamos pa la piscina y pidamos unas margaritas"
  );
} else if (energy && !weather && !job) {
  alert(
    "Ay mor! pues que te dijera? Se queda una sin saber que decir. Ponte a lavar los platos"
  );
} else if (!energy && !weather && !job) {
  alert("A mimir");
} else if (energy && !weather && job) {
  alert(
    "Ay mor! pues que te dijera? Se queda una sin saber que decir. En ese caso mi reina còmprale un barquillo a Juan Pablo"
  );
} else {
  alert("Pues cada quien, pasen rico muak. Con la niña no!");
}
