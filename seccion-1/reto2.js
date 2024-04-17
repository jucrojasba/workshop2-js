//Workshop 2 - Sección 1 - Reto 2
let souvenires = [];
while (true){
  try {
    let nameSouvenir = prompt("Ingresa el nombre del souvenir");
    let costSouvenir = parseFloat(prompt("Ingresa el costo del souvenir"));
    let avaliabilitySouvenir = prompt("¿Esta disponible?(si/no)");
  
    if (avaliabilitySouvenir === "si") {
      avaliabilitySouvenir = Boolean(1);
    }
    if (avaliabilitySouvenir === "no") {
      avaliabilitySouvenir = Boolean(0);
    } else {
      avaliabilitySouvenir = avaliabilitySouvenir;
    }
    
    let souvenir = {
      name: [nameSouvenir, typeof nameSouvenir],
      cost: [costSouvenir, typeof costSouvenir],
      avaliability: [avaliabilitySouvenir, typeof avaliabilitySouvenir],
    };
    souvenires.push(souvenir)
    let addmore = confirm(`Deseas agregar mas souvenires`);
    if (!addmore){
      console.log(souvenires)
      break
    }
  } catch (error) {
    alert("El valor ingresado no es válido")
  }
}