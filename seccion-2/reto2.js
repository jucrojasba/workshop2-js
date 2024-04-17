const dailyBudget = parseFloat(prompt("Porfavor ingresa tu prespuesto diario"));
const dailySaving = parseFloat(
  prompt("Porfavor ingresa tu meta mìnma de ahorro diairo")
);
let expenses = dailyBudget - dailySaving;
activities = [
  { name: "ir a jugar padel", cost: 200000 },
  { name: "Salir a comer", cost: 120000 },
  { name: "Comprar un libro", cost: 75000 },
  { name: "ir a cine", cost: 30000 },
  { name: "ir al museo", cost: 20000 },
];
let userActivities = [];
activities.forEach((element) => {
  if (element.cost < expenses) {
    expenses = expenses - element.cost;
    userActivities.push(element.name);
  }
});
if (userActivities.length != 0) {
  alert(
    `Tienes presupuesto para estas actividades: ${userActivities} y te sobran: $${expenses}`
  );
} else {
  alert("Mejor no salgas y ahorra para otra dìa");
}
