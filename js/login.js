//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
/*function almacenar() {
    var email = document.getElementById("email").value;
    localStorage.setItem ("email", email);
    var password = document.getElementById("password").value;
    localStorage.setItem ("password", password);
    console.log("Holaaaaaa");
}
*/

document.addEventListener("DOMContentLoaded", function(e){


});


/*function sesion(){
    document.getElementById("btn-sesion").innerHTML = document.getElementById("inputEmail");
    
}
















/*function validate()//en donde dice email es porque ese es el id de mi variable en el html ustedes capas lo tienen por otro nombre (nota: inserte el mail ya que no hice un registro de logueo)
{
var user = document.formulario.email.value;//creo una variable que almacena el valor ingresado en el campo usuario. f1=name del form
// Chequeo que soporte el browser

if (typeof(Storage) !== "undefined") {
    // Si hay algo definido lo almaceno
    localStorage.setItem("usuario", user);
      document.formulario.action="inicio.html";
      return true;
  } else {
    alert("Sorry, your browser does not support Web Storage...");//si el browser no lo soporta envia esta alerta de error
    document.formulario.action="inicio.html";//aca ponen la pagina a la que van a derivar despues de loguear creo que ustedes lo tienen por homePage o algo asi
      return true;
  }
}
function myFunction()
{
    document.getElementById("user").innerHTML = localStorage.getItem ("usuario");
}

/*var datosEmail= document.getElementById('inputEmail');
var datosPassword = document.getElementById('inputPassword');
var error = document.getElementById('error');
document.getElementById("datosEmail").innerHTML = localStorage.getItem ("usuario");*/