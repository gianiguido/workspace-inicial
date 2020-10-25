var cartArray = [];
var Porcentaje = 0.15;
var costoDeEnvio = 15;
var DOLLAR_SYMBOL = "USD ";
var PESO_SYMBOL = "UYU ";

function MostrarProductos(){

    let htmlContentToAppend = "";
    for (var i = 0; i < cartArray.length; i++){ 
        var article = cartArray[i];
        var subTotal = article.unitCost;
        document.getElementById("subTotalDos").innerHTML = subTotal + ` ` + article.currency;
        document.getElementById("CostDeEnvio").innerHTML = (subTotal * Porcentaje)+ ` ` + article.currency;
        document.getElementById("total").innerHTML = (subTotal+ costoDeEnvio) + ` ` + article.currency;

        htmlContentToAppend += `
            <div class="d-flex w-100 justify-content-between">
                <td><img width="130px" height="130px" src="` + article.src + `" alt=""></td>
                <td>` + article.name +`</td>
                <td>` + article.unitCost + ` ` + article.currency + `</td>
                <td><input type="number" style="width: 130px" min="1" value="1" id="cantArt" class="form-control"></td>  
                <td id="subTotal">` + subTotal + ` ` + article.currency +`</td>
            </div>
        `

        document.getElementById("ContArticulos").innerHTML=htmlContentToAppend;

        document.getElementById("cantArt").addEventListener("change", function(){
            let cantUser = document.getElementById("cantArt").value;
            subTotal = cantUser * article.unitCost;
            document.getElementById("subTotal").innerHTML = subTotal + ` ` + article.currency;
            document.getElementById("subTotalDos").innerHTML = subTotal + ` ` + article.currency;
            envio();
            costoTotal();
        });

        /*Calculo de envio*/
        function envio() {
            costoDeEnvio = subTotal * Porcentaje;
            document.getElementById("costDeEnvio").innerHTML = parseInt(costoDeEnvio) + ` ` + article.currency;
        }

        function costoTotal(){ 
            document.getElementById("total").innerHTML = subTotal + costoDeEnvio + ` ` + article.currency;
        }
    }
}

/*Cálculo de porcentajes de envíos*/
document.getElementById("premiumRadio").addEventListener("change", function(){
    Porcentaje = 0.15;
    envio();
    costoTotal();
});
    
document.getElementById("expressRadio").addEventListener("change", function(){
    Porcentaje = 0.07;
    envio();
    costoTotal();
});

document.getElementById("standardRadio").addEventListener("change", function(){
    Porcentaje = 0.05;
    envio();
    costoTotal();
});







//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status == "ok")
        {   
            cartObj = resultObj.data;
            cartArray = cartObj.articles;
            
            MostrarProductos();
        }
    })
})

   
    
   