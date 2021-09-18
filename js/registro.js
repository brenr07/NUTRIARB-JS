// TOGGLE DE BOTON CREAR CUENTA
$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    },"slow");
});

// OBTENER DATOS DE USUARIOS CON AJAX

const URLUSERS = 'https://jsonplaceholder.typicode.com/post'
$('#btnIniciarSesion').click(() => {
    $.get(URLUSERS, function(respuesta, estado){
            // console.log(response);
            // console.log(status);
        if(estado === "success"){
            for (const user of respuesta.users) {
                $('body').append(`<ol><li>Hola ${user.name}, ${user.surname}</li></ol>`)
              }
        }
    })
}
)

// REGISTRO DE USUARIO EN LOCAL STORAGE
$("#btnRegistrar").click(e => {
    e.preventDefault();
    let name = $('#name') [0].value
    let surname = $('#surname') [0].value
    let email = $('#email') [0].value
    let user = $('#user') [0].value
    let password = $('#password') [0].value

    if (name === "" || surname === "" || email === "" || user === "" || password=== ""){
        alert("Ingresa todos los campos para registrarte")
    }

    const userJSON=JSON.stringify(user);
    localStorage.setItem('Usuario',userJSON);
    const passwordJSON=JSON.stringify(password);
    localStorage.setItem('Contraseña',passwordJSON);
})
