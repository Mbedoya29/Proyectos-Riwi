var persons = [
    {
        nombre : "Manuela",
        correo : "manuela@gmail.com",
        genero : "femenino",
        password : "1234",
        images : [
             './images/img-1.jpg',
             './images/img-2.jpeg',
             './images/img-3.jpg',
             './images/img-4.jpg',
             './images/img-5.webp',
             './images/img-6.jpg',
             './images/img-7.jpg',
             './images/img-8.jpg',
             './images/img-9.webp',
            
        ]
    },
    {
        nombre : "Samuel",
        correo : "samuel@gmail.com",
        genero : "masculino",
        password : "12345",
        images : [
            './images/img-11.jpg',
            './images/img-12.jpg',
            './images/img-13.jpeg',
            './images/img-14.webp',
            './images/img-15.jpg',
            './images/img-16.jpg',
            './images/img-17.webp',
            './images/img-18.jpg',
            './images/img-19.jpg',
            
        ]
    }
];
function iniciarSesion(){

    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;

    persons.forEach(persons => {
        if(correo == persons.correo && password == persons.password){
            sessionStorage.setItem('nombre', persons.nombre)
            sessionStorage.setItem('genero', persons.genero)
            sessionStorage.setItem('auth',"si");
        
            location.href = "home.html";
        }else{
            document.getElementById('datoIncorrecto').innerText = ("Dato incorrecto")
    
        }
    
    });
}

