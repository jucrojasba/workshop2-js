const weather = confirm(
  "¿Cómo está el clima?\nAceptar para buen clima || Cancelar para mal clima"
);
let weight = parseFloat(prompt("Ingresa el peso actual en kg de tu maleta"));
const maxWeight = 23;

let currentWeight = maxWeight - weight;

if (currentWeight < 0) {
  alert("Tu equipaje supera el peso máximo permitido de 23 kg.");
} else {
  let userArticles = [];
  const articles = [
    { name: "paraguas", articleWeight: 0.8 },
    { name: "ropa", articleWeight: 1 },
    { name: "zapatos", articleWeight: 1.1 },
    { name: "botas", articleWeight: 1.2 },
  ];

  for (let index = 0; index < articles.length; index++) {
    if (articles[index].articleWeight < currentWeight) {
      userArticles.push(articles[index].name);
      currentWeight -= articles[index].articleWeight;
    }
  }

  if (userArticles.length != 0) {
    if (weather) {
      userArticles = userArticles.filter((element) => element != "paraguas");
      currentWeight += 0.8; //quitamos el peso del paraguas
    }

    if (userArticles.length != 0) {
      alert(
        `Te recomendamos llevar: ${userArticles.join(
          ", "
        )} debido al clima. Peso restante en la maleta: ${currentWeight.toFixed(
          2
        )} kg.`
      );
    } else {
      alert(
        `No te recomendamos llevar artículos adicionales debido al buen clima. Peso restante en la maleta: ${currentWeight.toFixed(
          2
        )} kg.`
      );
    }
  } else {
    alert(
      `No puedes llevar artículos predefinidos. Peso restante en la maleta: ${currentWeight.toFixed(
        2
      )} kg.`
    );
  }
}
