
    function validarEnviar(miform){
           var x = document.getElementById("usuario")
           var y=  document.getElementById("clave")
           if (x.value == ""||x.value.indexOf('@', 0) == -1) {
           alert("El campo usuario no debe estar vacío y debe cotener un @")
           return false
           }
            if(y.value=="") {
           alert("El campo clave no debe estar vacío")
           return false
           } 
           else {
            alert("Formulario Enviado");
            document.miform.submit()
            return true
           }
             
             
    }      
    
       

        
