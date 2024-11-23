const contenedor = document.querySelector('.contenedorPincipal')
const BotonLogin = document.getElementById("BotonLogin");
const BotonRegistro = document.getElementById("BotonRegistro");

//Agregar Evento a los botones para rotar el contenedor

BotonLogin.addEventListener('click', () => {
    contenedor.classList.remove('toggle');
    limpiarErrores();
    limpiarCampos();
    LimpiarCamposValidacion();
});
BotonRegistro.addEventListener('click', () => {
    contenedor.classList.add('toggle');
    limpiarErrores();
    LimpiarCamposValidacion();
});

//Crear un evento para iniciar la validación a los botones
const BotonLoginValidar = document.querySelector('.login .btn');
const BotonRegistroValidar = document.querySelector('.Registro .btn');

BotonLoginValidar.addEventListener('click', ValidarLogin);
BotonRegistroValidar.addEventListener('click', ValidarRegistro);

//Función para validar los datos del login

function ValidarLogin(evento) {
    evento.preventDefault();

    const email = document.getElementById('Email').value;
    const contraseña = document.getElementById('Contraseña').value;
    let valido = true;

    //Validaciones del Login:
        //Validar el email
        if (!email) {
            mostrarError('emailError', 'No digito el Email');
            valido = false;
        }else if (!validarEmail(email)) {
            mostrarError('emailError', 'El email digitado no es válido');
            valido = false;
        } else{
            document.getElementById('emailError').textContent = '';
        }
        if (!contraseña) {
            //Validar la contraseña
            mostrarError('contraseñaError', 'No digito la contraseña');
            valido = false;
        } else {
            document.getElementById('contraseñaError').textContent = '';
        }

        if (valido){
            // Validar usuario ya registrado
            Usuario.validarLogin(email,contraseña);
        }
}

//Función para validar el registro
function ValidarRegistro(evento) {
    evento.preventDefault();
    const nombre = document.getElementById('Nombre').value;
    const email = document.getElementById('EmailRegistro').value;
    const contraseña = document.getElementById('ContraseñaRegistro').value;
    let validar = true;

    //Validaciones del Registro:

    //Validar el email
        if (!email) {
            mostrarError('emailRegistroError', 'No digito el Email');
            validar = false;
        } else if (!validarEmail(email)) {
            mostrarError('emailRegistroError', 'El email no es válido');
            validar = false;
        } else{
            document.getElementById('emailRegistroError').textContent = '';
        }
    //Validar la contraseña
        if (!contraseña) {
            mostrarError('contraseñaRegistroError', 'No digito la contraseña');
            validar = false;
        } else if (contraseña.length < 8) {
            mostrarError('contraseñaRegistroError', 'La contraseña debe tener al menos 8 caracteres');
            validar = false;
        } else{
            document.getElementById('contraseñaRegistroError').textContent = '';
        }
        if (validar){
            Usuario.registrarUsuario(nombre,email,contraseña);
            limpiarCampos();
        }
}

//Función para limpiar los errores de los campos
function limpiarErrores() { 
    document.getElementById('emailError').textContent = '';
    document.getElementById('contraseñaError').textContent = '';
    document.getElementById('emailRegistroError').textContent = '';
    document.getElementById('contraseñaRegistroError').textContent = '';
}

//Función para mostrar el error en el campo correspondiente
function mostrarError(idError, mensaje) {
    document.getElementById(idError).textContent = mensaje;
}

//Función regular para validar el email
function validarEmail(email) {
    const valido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return valido.test(email);
}

function LimpiarCamposValidacion(){
    document.getElementById('validacionRegistro').textContent = '';
    document.getElementById('ValidacionFormulario').textContent = '';
}