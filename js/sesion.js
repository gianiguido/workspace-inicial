function validate(){

var user = document.formulario.email.value;//creo una variable que almacena el valor ingresado en el campo usuario. f1=name del form
// Chequeo que soporte el browser
if (typeof(Storage) !== "undefined"){
  // Si hay algo definido lo almaceno
  localStorage.setItem("usuario", user);
	document.formulario.action="inicio.html";
	return true;
} else {
  alert("Sorry, your browser does not support Web Storage...");//si el browser no lo soporta envia esta alerta de error
  document.formulario.action="inicio.html";//inicio.html es la página a la que van a derivar después de loguear.
}
}

  function myFunction(){
	   document.getElementById("user").innerHTML = localStorage.getItem("usuario");
   }

   