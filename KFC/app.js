function cambiarTema(){
    let tema = document.getElementById('tema').value;
    if(tema == "dark"){
        document.getElementById('body').classList.remove('light');
        document.getElementById('body').classList.add('dark');
    }else{
        document.getElementById('body').classList.remove('dark')
        document.getElementById('body').classList.add('light')
    }
}


/*--------------------Idioma------------------------------*/


function cambiarIdioma(){

    let idioma = document.getElementById('idioma').value;
    let boton = document.querySelectorAll(".btn")
    for (let i = 0; i < boton.length; i++) {
        boton[i].innerHTML = "Buy"  
    }

    if(idioma == "en"){
        document.getElementById('hamb-1').innerText = '1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet)'
        document.getElementById('hamb-2').innerText = '1 Kentucky hamburger / Sandwich (1 Breaded chicken breast fillet, pickles,...)'
        document.getElementById('hamb-3').innerText = '1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Fries + 1 PET Soda...'
        document.getElementById('hamb-4').innerText = '1 Kentucky Colonel Hamburger / Sandwich (1 Breast fillet...)'
        document.getElementById('hamb-5').innerText = '1 Kentucky hamburger /Sandwich (1 Breaded chicken breast fillet, pickles,...)'
        document.getElementById('hamb-6').innerText = '1 Kentucky Colonel Hamburger / Sandwich (1 Breast fillet...)'
        document.getElementById('hamb-7').innerText = '1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, onion...)'
        document.getElementById('hamb-8').innerText = '1 Crispy BBQ Sandwich (1 extra large breast fillet, triple,...)'
    }else{
        let boton = document.querySelectorAll(".btn")
        for (let i = 0; i < boton.length; i++) {
        boton[i].innerHTML = "Comprar"}
    }

    if(idioma == 'es'){
        document.getElementById('hamb-1').innerText = '1 Sándwich BBQ Crunch (1 Filete de pollo apanado)'
        document.getElementById('hamb-2').innerText = '1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos,...)'
        document.getElementById('hamb-3').innerText = '1 Sándwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET...'
        document.getElementById('hamb-4').innerText = '1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga...)'
        document.getElementById('hamb-5').innerText = '1 Kentucky hamburguesa /Sandwich (1 Filete de pechuga de pollo apanado, pepinillos,...)'
        document.getElementById('hamb-6').innerText = '1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga...)'
        document.getElementById('hamb-7').innerText = '1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla...)'
        document.getElementById('hamb-8').innerText = '1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple,...)'
    }

}

/* var cartas = document.querySelectorAll('.card-light')
for (let i = 0; i < cartas.length; i++) {
    cartas[i].classList.replace('card-light','carta-dark')

} */