// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { authGoogle } from '../lib/firebase.js';
import { authSesion } from '../lib/firebase.js';
import { authSing } from '../lib/firebase.js';



//ESTRUCTURA HTML PRIMERA VISUAL

export const Home = () => {
  const HomeDiv = document.createElement('main');        // no iniciar var con mayuscula (eso se hace en react)
  HomeDiv.classList.add('ContainerPadre');
  HomeDiv.innerHTML = /*html*/ `
    <header class="contenedorHeader">
    <h1>View my Music</h1>
    <p>TODOS TUS CONCIERTOS DE MÚSICA <br> EN UN SÓLO LUGAR</p>
  </header> 
 <div class="contendorInicio">
    <form id="form-InicioSesion" >
        <input type="email" placeholder="Ingresa correo" class="inputInicio" id='correoUsuario'>
        <p id='errorCorreo'> </p>
        <input type="password" placeholder="Ingresar Contraseña" class="inputInicio" id='contraseñaUsuario'>
        <p id='errorContraseña'> </p>
        <input type="submit" class="btn-InicioSesion" id='btnIngresar' value='Iniciar Sesión'>
        </form> 
      </div>
    <div class="contenedorInicioGoogle">
    <button id="btn-inicioGoogle">Iniciar sesion con Google Chrome</button>
      <div class='contenedorLinkRegis'>
        <p>¿No tienes cuenta?</p> 
        
        <a id="registrarse" href="">REGISTRATE</a>
      </div>
</div>
</div>
`

  return HomeDiv;
};

// ACCESO AL BOTON DE REGISTRO 
//el btn deberia estar impreso en el dom primero antes de llamarlo, por esto aparece un null al listener 
// para que carge primero la web antes de llamar al id en este caso usamos load

window.addEventListener('load', function () {
  const linkRegistarse = document.getElementById('registrarse');
  if (linkRegistarse) {
    linkRegistarse.addEventListener('click', () => onNavigate('/register'));
  }
});



//INICIO SESION
window.addEventListener('load', function () {
  const formSesion = document.querySelector('#form-InicioSesion');
  if (formSesion) {
    formSesion.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.querySelector('#correoUsuario').value;
      const password = document.querySelector('#contraseñaUsuario').value;
      console.log(email, password);
      const inicirSesi = await authSing(email, password);
      console.log(inicirSesi);
      if (inicirSesi === 'Firebase: Error (auth/user-not-found).') {
        const parrafoError = document.getElementById('errorCorreo');
        parrafoError.innerHTML = 'correo electrónico no registrado';
        parrafoError.style.color = '#ff0000';
      } else if (inicirSesi === 'Firebase: Error (auth/wrong-password).') {
        const parrafoError = document.getElementById('errorContraseña');
        parrafoError.innerHTML = 'Contraseña invalida';
        parrafoError.style.color = '#ff0000';
      } else if (inicirSesi === 'Firebase: Error (auth/invalid-email).') {
        const parrafoError = document.getElementById('errorCorreo');
        parrafoError.innerHTML = 'Los campos estan vacios';
        parrafoError.style.color = '#ff0000';
      } else if (inicirSesi === 'Firebase: Error (auth/internal-error).') {
        const parrafoError = document.getElementById('errorContraseña');
        parrafoError.innerHTML = 'Los campos estan vacios';
        parrafoError.style.color = '#ff0000';
      } else {
        formSesion.reset();
        onNavigate('/wall');
      }
    });
  };


});



// INICIO SESION CON GOOGLE

window.addEventListener('load', function () {

  const emailGoogle = document.querySelector('#btn-inicioGoogle');
  if (emailGoogle) {
    emailGoogle.addEventListener('click', () => {
      authGoogle();
      onNavigate('/wall');
    });
    // onNavigate('/wall');
  }
});



