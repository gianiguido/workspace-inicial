//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

function almacenar() {
    var email = document.getElementById("email");
    localStorage.setItem ("email", email.value);
    var password = document.getElementById("password");
    localStorage.setItem ("password", password.value);
}
almacenar();
});