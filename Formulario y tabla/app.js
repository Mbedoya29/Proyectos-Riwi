var allPersons = [];
function guardarUsuario(){

    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;

    let persona = {
        nombres : nombres,
        apellidos : apellidos,
        correo : correo
    }
    


    allPersons.forEach(function(person){
        let nombres = document.getElementById('resNombre').innerText = person.nombres;
        let apellidos = document.getElementById('resApellido').innerText = person.apellidos;
        let correo = document.getElementById('resCorreo').innerText = person.correo;
    });

    let filas = tbody.insertRow(-1);
    let columna = filas.insertCell(0);
    let columna2 = filas.insertCell(1);
    let columna3 = filas.insertCell(2);
    var datos = document.createTextNode(nombres)
    var datos1 = document.createTextNode(apellidos)
    var datos2 = document.createTextNode(correo)
    columna.appendChild(datos)
    columna2.appendChild(datos1)
    columna3.appendChild(datos2)



    if(nombres == "" || apellidos == "" || correo ==""){
        
        if (nombres == ""){
            document.getElementById('nombres').focus();
            document.getElementById('nombres').classList.add("is-invalid")
        }

        if (apellidos == ""){
            document.getElementById('apellidos').focus();
            document.getElementById('apellidos').classList.add("is-invalid")
        }

        if (correo == ""){
            document.getElementById('correo').focus();
            document.getElementById('correo').classList.add("is-invalid")
        }
    }

    
    console.log(allPersons);
    formulario.reset();
}

