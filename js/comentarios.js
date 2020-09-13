var comments = {};

function showComments(currentCategoriesArray){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let comment = currentCategoriesArray[i];
            // Genero 5 estrellas 
            let stars = '';
            for (let i = 1; i < 6; i++) {
                if(comment.score < i) {
                    stars += '<span class="fa fa-star"></span>';
                } else {
                    stars += '<span class="fa checked fa-star"></span>';
                }
            }
            htmlContentToAppend += `
            <a  class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-2">
                    
                       `+ stars +  ` 
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ comment.user +`</h4>
                            <small class="text-muted">` + comment.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + comment.description + `</p>
                    </div>
                </div>
            </a>

            `
            document.getElementById("comentarios").innerHTML = htmlContentToAppend;
    }
}

function addComment() {
    let comment = {score: 4, 
        description: "Es un auto super cómodo! pero el baúl un poco pequeño.", 
        user: "Giani Guido", 
        dateTime: "2020-02-21 15:05:22"};
        comments.push(comment);
        showComments(comments);
}


    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                comments = resultObj.data;
                
                showComments(comments);
            }
        });
    });