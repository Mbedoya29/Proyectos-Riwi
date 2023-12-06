/*__________________CASO 1__________________*/

function almojabana(){
    let salario = parseInt("2500000")
    let almojabana = parseInt("15000")

    let saldo = (salario - almojabana)

    document.getElementById('salario').innerHTML = `Su saldo es de: <strong>${saldo}</strong> `
    alert("Te cayo mal porque lleva mucho tiempo en el stand :( ")
    console.log(saldo)
}

function subway(){
    let salario = parseInt("2500000")
    let subway = parseInt("23000")
    let saldo = (salario - subway)
    
    document.getElementById('salario').innerHTML = `Su saldo es de: <strong>${saldo}</strong> `
    alert("¡Estas llenito y feliz! :) ")
    console.log(saldo)

}

function nada(){

    document.getElementById('salario').innerHTML = `Su saldo es de: <strong>2500000</strong> `
    alert("Te tocara comprar algo en Medellín")
    console.log(saldo)

}

/*_________________/CASO 1__________________*/

/*__________________CASO 2__________________*/

function cambiarTamano(){

    let altoPermitido = parseInt("55") 
    let largoPermitido = parseInt("40") 
    let anchoPermitido = parseInt("20") 

    let altoOriginal = parseInt("60") 
    let largoOriginal = parseInt("40") 
    let anchoOriginal = parseInt("20") 


    let alto = (altoPermitido / altoOriginal)
    let largo = (largoPermitido / largoOriginal)
    let ancho = (anchoPermitido / anchoOriginal)

    let calculo = Math.min(alto, largo, ancho)

    let altoNuevo = parseInt(altoOriginal * calculo)
    let largoNuevo = parseInt(largoOriginal * calculo)
    let anchoNuevo = parseInt(anchoOriginal * calculo)

    document.getElementById('altoNuevo').innerHTML = `Alto: <strong>${altoNuevo}</strong> `;
    document.getElementById('largoNuevo').innerHTML = `Largo: <strong>${largoNuevo}</strong> `;
    document.getElementById('anchoNuevo').innerHTML = `Ancho: <strong>${anchoNuevo}</strong> `;

    document.getElementById('bag').style.transform = "scale(.9)";
}

/*_________________/CASO 2__________________*/

/*__________________CASO 3__________________*/

let num1 = 0b01110010;
let str1 = (num1.toString())

let num2 = 0b01101001;
let str2 = (num2.toString())

let num3 = 0b01110111;
let str3 = (num3.toString())

let num4 = 0b01101001;
let str4 = (num4.toString())

let wifi = 50000

let contrasena = String.fromCharCode(str1,str2,str3,str4)
console.log(contrasena)


function contrasenaWifi(){
    document.getElementById('contrasenaWifi').innerHTML = `La contraseña es: <strong>${contrasena}</strong> `
}

function salario(){
    let saldo = (saldo - wifi)
    document.getElementById('salario').innerHTML = `Su saldo es de: <strong>${saldo}</strong> `
}

/*_________________/CASO 3__________________*/

/*__________________CASO 4__________________*/

let vocals = ["a", "e", "o", "u"];
let taxi = "Taxi me puede llevar al hotel mariposas amarillas"

vocals.forEach(function(vocal){
    taxi = taxi.replaceAll(vocal, "i");
})


function idiomaI(){
    document.getElementById('idioma').innerHTML = `Su nueva frase es: <strong>${taxi}</strong>`
}

/*_________________/CASO 4__________________*/

/*__________________CASO 5__________________*/

let datorandom= Math.random() ;
let movimiento="";
let carrera = "300000"

if (datorandom >= 0 && datorandom < 1/3){
    movimiento = 'piedra';
}else if (datorandom >= 1/3 && datorandom < 2/3){
    movimiento = 'papel';
}else if (datorandom >= 2/3 && datorandom < 1){
    movimiento = 'tijera';
}

resultado = "";

function piedra(){
    if (movimiento === 'piedra'){
        resultado = "Empate :|"
        document.getElementById('piedra').innerText = `el saldo es igual`
    }else if (movimiento === 'papel'){
        resultado = "Perdiste :("
        document.getElementById('piedra').innerText = `Debes pagar 300000`
    }else if(movimiento == 'tijera'){
        resultado = "¡Ganaste! :)"
        document.getElementById('piedra').innerText = `el saldo es igual`
    }
    alert(`Escogite el piedra, el taxista a elegido ${movimiento}. ${resultado}`)
}

function papel(){
    if (movimiento === 'piedra'){
        resultado = "¡Ganaste! :)"
        document.getElementById('papel').innerText = `el saldo es igual`
    }else if (movimiento === 'papel'){
        resultado = "Empate :|"
        document.getElementById('papel').innerText = `el saldo es igual`
    }else if(movimiento == 'tijera'){
        resultado = "Perdiste :("
        document.getElementById('papel').innerText = `Debes pagar 300000`
        
    }
    alert(`Escogite el papel, el taxista a elegido ${movimiento}. ${resultado}`)
}

function tijera(){
    if (movimiento === 'piedra'){
        resultado = "Perdiste :("
        document.getElementById('tijera').innerText = `Debes pagar 300000`
    }else if (movimiento === 'papel'){
        resultado = "¡Ganaste! :)"
        document.getElementById('tijera').innerText = `el saldo es igual`
    }else if(movimiento == 'tijera'){
        resultado = "Empate :|"
        document.getElementById('tijera').innerText = `el saldo es igual`
    }
    alert(`Escogite el tijera, el taxista a elegido ${movimiento}. ${resultado}`)
}

/*_________________/CASO 5__________________*/

/*__________________CASO 6__________________*/

function amarillo(){
    if('amarillo' === 'meterse'){
        document.write("Empieza a sentirse ahogado, demasiado cloro, muere (terminan las vacaciones)")
    }else if('amarillo' === 'seQuedaPorFuera'){
        document.write("No pasa nada")
    }
}

function verde(){
    if('verde' === 'caminata'){
        document.write("Ira a una hermosa cascada y se tomara fotos")
    }else if('verde' === 'noIrALaCaminata'){
        document.write("llegará a cierto punto, y se devolverá solo, y den noche se pierde")
    }
}

function rojo(){
    if('rojo' === 'voleibol'){
        document.write("Juega y la pasa genial")
    }else if('rojo' === 'nadar'){
        document.write("nada y monta en moto")
    }else if('rojo' === 'cocteles'){
        document.write("De pronto siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolverde emergencia. (terminan las vacaciones)")
    }
}

function azul(){
    if ('azul' === 'bingo'){
        document.write("se lo gana y aumenta su dinero")
    }else if ('azul' === 'bailar'){
        document.write("La pasa muy bien")
    }else if('azul' === 'casino'){
        document.write("solo se queda con pasaje de regreso (terminan las vacaciones)")
    }
}

