function operaciones(){

    let operacion = document.getElementById('operacion').value;
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    if(operacion != "" && numero1!= "" && numero2!=""){
        //aqui todo tu codigo compañera
        if(operacion == 'suma'){
            var resultado = parseInt(numero1) + parseInt(numero2);
        }
        if (operacion == 'resta'){
            var resultado = parseInt(numero1) - parseInt(numero2);
        }
        if (operacion == 'multi'){
            var resultado = parseInt(numero1) * parseInt(numero2);
        }
        if (operacion == 'divi'){
            var resultado = parseInt(numero1) / parseInt(numero2);
        }
        if (operacion == 'potenciacion'){
            var resultado = parseInt(numero1) ** parseInt(numero2);
        }
        document.getElementById('total').innerText= `Tu resultado es:${resultado}`
        document.getElementById('operacion').value= "seleccionar"
    
    }else if (numero1 == ""){
        document.getElementById('numero1').focus();
        document.getElementById('numero1').classList.add("is-invalid")
        document.getElementById('numero1').classList.remove("is-valid")
        
    }else if (numero2 == ""){
        document.getElementById('numero2').focus();
        document.getElementById('numero2').classList.add("is-invalid")
        document.getElementById('numero2').classList.remove("is-valid")
    }else if (operacion =! ""){
        document.getElementById('operacion').focus();
        document.getElementById('operacion').classList.add("is-invalid")
        document.getElementById('operacion').classList.remove("is-valid")
    }
}

//&& and
//|| or 

// is-invalid
// valid-feedback