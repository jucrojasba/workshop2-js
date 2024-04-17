const budget = prompt("Ingresa tu presupuesto")
const cost = prompt("Ingresa el total de costos estimados de viaje incluyendo alojamiento, transporte y comida")
const threshold = prompt("Ingresa una cantidad fija considerada para gastos imprevistos o emergencias durante el viaje")
if (budget - cost >= threshold){
    alert(`Felicidades tienes ${budget-cost} para adquirir un artìculo adicional`)
    let addMore = confirm("Deseas conocer los productos que peudes adquirir")
    if(addMore){
        let articles = [];
        while (true){
            try {
                let nameArticle = prompt("Ingresa el nombre del artìculo");
                let costArticle = parseFloat(prompt("Ingresa el costo del artìculo"));          
                let article = {
                name: nameArticle,
                cost: costArticle
                };
                articles.push(article)
                let addMoreArticle = confirm(`Deseas agregar mas artìculos`);
                if (!addMoreArticle){
                    console.log(articles)
                    break
                }
            } catch (error) {
                alert("El valor ingresado no es válido")
            }
        }

    }else{
        alert("Buen viaje!")
    }

}else{
    alert("Tus fondos son insuficientes para adquirir un articulo adicional")
}
