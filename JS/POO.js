
const Registro = document.getElementById('validacionRegistro');
const Login = document.getElementById('ValidacionFormulario');
//Array para almacenar los usuarios que se registren
const Usuarios =[];

//Clase para poder guardar y validar los usuarios registrados
class Usuario {
    constructor(nombre, email, contraseña){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
    //Logica para guardar los usuarios registrados
    static registrarUsuario(nombre, email, contraseña){
        const usuarioRegistrado = Usuarios.some(user => user.email === email);
        if (usuarioRegistrado) {
            setTimeout(() => {
                document.getElementById("validacionRegistro").textContent = '';
            },2000);
                document.getElementById("validacionRegistro").textContent = "El Usuario ya existe";
                Registro.style.color = "blue";
                limpiarCampos();
        } else {
            // Almacenar el nuevo usuario como un objeto en el array
            Usuarios.push({
                nombre: nombre,
                email: email,
                contraseña: contraseña
            });
            //Crear tiempo de espera
            setTimeout(function () {
                document.getElementById("validacionRegistro").textContent ='';
            }, 2000);
            //Primero se imprime el mensaje y despues se elimina
            document.getElementById("validacionRegistro").textContent = "¡¡El usuario ha sido registrado exitosamente!!";
            Registro.style.color = "green";
            console.log(Usuarios);
            limpiarCampos();
        }
    }
    //Logica para validar si un usuario existe en el sistema
    static validarLogin(email, contraseña) {
        const usuario = Usuarios.find(user => user.email === email && user.contraseña === contraseña);
        if (usuario) {
            setTimeout (function () {
                document.getElementById('ValidacionFormulario').textContent = '';
                window.location.href = '/Juego/Juego.html';
            },4000);
            document.getElementById('ValidacionFormulario').textContent = '¡¡Has iniciado Sesión Correctamente!!';
            Login.style.color = "green";
            limpiarCampos();
                
        } else{
            setTimeout (function () {
                document.getElementById('ValidacionFormulario').textContent = '';
            },4000);
                document.getElementById("ValidacionFormulario").textContent = "¡¡El correo o la contraseña ingresados no son correctos!!";
                Login.style.color = "red";
        }
    }
}

// Función para limpiar los campos después del registro o login
function limpiarCampos() {
    document.getElementById('Nombre').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Contraseña').value = '';
    document.getElementById('EmailRegistro').value = '';
    document.getElementById('ContraseñaRegistro').value = '';
}