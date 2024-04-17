const weather = confirm(
  "¿Como esta el clima? \nAceptar para buen clima || Cancelar para mal clima"
);
let weight = parseFloat(prompt("Ingresa el peso actual en kg de tu maleta"));
const maxWeight = 23;
const days = parseFloat(prompt("¿Cuantos dìas estaras en tu viaje?"));
let currentWeight = maxWeight - weight;
if (currentWeight < 0) {
  alert(
    "Tu equipaje supera el peso màximo comprado de 23kg, considera comprar mas capacidad de equipaje"
  );
} else {
  let userArticles = [];
  const articles = [
    { name: "paraguas", articleWeight: 0.8 },
    { name: "ropa", articleWeight: 0.9 },
    { name: "zapatos", articleWeight: 1 },
    { name: "botas", articleWeight: 1.2 },
  ];
  for (let index = 0; index < articles.length; index++) {
    if (articles[index].articleWeight < currentWeight) {
      userArticles.push(articles[index].name);
      currentWeight = currentWeight - articles[index].articleWeight;
    }
  }
  if (userArticles.length != 0) {
    if (weather) {
      userArticles.filter((element) => element != "paraguas");
      if (userArticles.length != 0) {
        alert(
          `Te recomendamos llevar: ${userArticles} debido a que el clima es bueno y te quedaras ${days} dìa(s)`
        );
      } else {
        alert(
          "No te recomendamos llevar articulos adicionales debido al buen clima"
        );
      }
    }
  } else {
    alert(
      "No puedes llevar articulos predefinidos, considera comprar mas capacidad de equipaje"
    );
  }
}
