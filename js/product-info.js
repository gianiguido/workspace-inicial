
var products = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            products = resultObj.data;

            let productsNameHTML  = document.getElementById("productsName");
            let productsDescriptionHTML = document.getElementById("productsDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");

            let price = products.currency + products.cost;
            productsNameHTML.innerHTML = products.name + ' - ' + price;
            productsDescriptionHTML.innerHTML = products.description;
            productCountHTML.innerHTML = products.relatedProducts.length;
            productCriteriaHTML.innerHTML = products.category;
            //Muestro las imagenes en forma de galería
            showImagesGallery(products.images);
        }
    });
});

