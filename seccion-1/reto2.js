let nameSouvenir = prompt("Ingresa el nombre del souvenir");
let costSouvenir = prompt("Ingresa el costo del souvenir");
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
let souvenires = [souvenir];
let addmore = confirm(`Deseas agregar mas souvenires`);
if (addmore) {
  nameSouvenir = prompt("Ingresa el nombre del souvenir");
  costSouvenir = prompt("Ingresa el costo del souvenir");
  avaliabilitySouvenir = prompt("¿Esta disponible?(si/no)");

  if (avaliabilitySouvenir === "si") {
    avaliabilitySouvenir = Boolean(1);
  }
  if (avaliabilitySouvenir === "no") {
    avaliabilitySouvenir = Boolean(0);
  } else {
    avaliabilitySouvenir = avaliabilitySouvenir;
  }
  let souvenir1 = {
    name: [nameSouvenir, typeof nameSouvenir],
    cost: [costSouvenir, typeof costSouvenir],
    avaliability: [avaliabilitySouvenir, typeof avaliabilitySouvenir],
  };
  souvenires = [souvenir, souvenir1];
  addmore = confirm(`Deseas agregar mas souvenires`);
  if (addmore) {
    nameSouvenir = prompt("Ingresa el nombre del souvenir");
    costSouvenir = prompt("Ingresa el costo del souvenir");
    avaliabilitySouvenir = prompt("¿Esta disponible?(si/no)");

    if (avaliabilitySouvenir === "si") {
      avaliabilitySouvenir = Boolean(1);
    }
    if (avaliabilitySouvenir === "no") {
      avaliabilitySouvenir = Boolean(0);
    } else {
      avaliabilitySouvenir = avaliabilitySouvenir;
    }
    let souvenir2 = {
      name: [nameSouvenir, typeof nameSouvenir],
      cost: [costSouvenir, typeof costSouvenir],
      avaliability: [avaliabilitySouvenir, typeof avaliabilitySouvenir],
    };
    souvenires = [souvenir, souvenir1, souvenir2];
  } else {
    console.log(souvenires);
  }
} else {
  console.log(souvenires);
}
