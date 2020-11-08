function guardarDatos() { 

    var name = document.getElementById("nombre").value;
    var surname = document.getElementById("apellido").value;
    var age = document.getElementById("edad").value;
    var phone = document.getElementById("tel").value;
    
    localStorage.setItem("user",
        JSON.stringify(
        {
        nombre: name,
        apellido: surname,
        edad: age,
        correo: localStorage.getItem("usuario"),
        tel: phone,
        }
        ));
    
    resultado();
    }
    
    
    document.addEventListener("DOMContentLoaded", function(e){
        
        var correoUsuario = localStorage.getItem("usuario");
        document.getElementById("user").value = correoUsuario;
    
    
        resultado();
    
    });
    
    function resultado() {
    
        let htmlContentToAppend = "";
    
        var infoUser = JSON.parse(localStorage.getItem("userProfile"));
    
            htmlContentToAppend += `
            <div class="container">
              <div class="row">
    
                <div class="col">
                  <label for="nombre">
                 <input style="width: 400px;" type="text" class="form-control" id="nombre" placeholder="Nombre"/>
                
                 
                  </label>
              </div>  
                  <div class="col" >
                      <label for="apellido">
                      <input style="width: 400px;" class="form-control" type="text" id="apellido" placeholder="Apellido"/>
                      </label>              
                  </div>       
                  <div class="col">
                      <label for="edad">
                     <input style="width: 400px;" class="form-control" type="number" id="edad" placeholder="Edad"/>
                      </label>
                  </div>
              
                  <div class="col">
                      <label for="correo">
                      <input style="width: 400px;" class="form-control" type="text" id="user" placeholder="Correo electrónico"/>
                      </label>
                  
                  </div> 
      
                  <div class="col">
                      <label for="tel">
                     <input style="width: 400px;" class="form-control" type="number" id="tel" placeholder="Teléfono de contacto" />
                      </label>
      
                  </div>
      <br>
                  
          
                  <br>
          
                  <div class="col">
                      <label for="guardarbtn">
                      <input style="width: 400px; margin-top: 20px" class="btn btn-primary btn-lg" type="submit" onclick="guardarDatos()" value="Guardar" id="guardarbtn">
                      </label>
                  </div>
                </div>
            </div>
            
        `
    
        document.getElementById("mostrarInfo").innerHTML = htmlContentToAppend;
    
    }