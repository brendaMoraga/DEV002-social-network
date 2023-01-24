// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
//import { Wall } from './Wall.js';
import { authGoogle } from '../lib/firebase.js';
//import {authSesion} from '../lib/firebase.js';
import{authSing} from '../lib/firebase.js';



export const Home = () => {
  const HomeDiv = document.createElement('main');        // no iniciar var con mayuscula (eso se hace en react)
  HomeDiv.classList.add('ContainerPadre');
  HomeDiv.innerHTML = /*html*/ `
    <header class="contenedorHeader">
    <h1>View my Music</h1>
    <p>TODOS TUS CONCIERTOS Y MÚSICA <br> EN UN SÓLO LUGAR</p>
  </header> 
 <div class="contendorInicio">
    <form id="form-InicioSesion" >
        <input type="email" placeholder="Ingresa correo" class="inputInicio" id='correoUsuario'>
        <input type="password" placeholder="Ingresar Contraseña" class="inputInicio" id='contraseñaUsuario'>
        <input type="submit" class="btn-InicioSesion" id='btnIngresar' value='Iniciar Sesión'>
        <a href="" class="recuperarContraseña">olvide mi contraseña</a>
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

//el btn deberia estar impreso en el dom primero antes de llamarlo, por esto aparece un null al listener 
//deberiamos probar set time out para que carge primero la web antes de llamar al id en este caso usamos load

window.addEventListener('load', function () {
  const linkRegistarse = document.getElementById('registrarse');
  if (linkRegistarse) {
    linkRegistarse.addEventListener('click', () => onNavigate('/register'));
  }
});



//INICIO SESION
window.addEventListener('load', function () {

  const formSesion = document.querySelector('#form-InicioSesion');
  const btnInicioSes = document.getElementById('btnIngresar');
  // const userValid= (valid);
  if(btnInicioSes){
    formSesion.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.querySelector('#correoUsuario').value;
      const password = document.querySelector('#contraseñaUsuario').value;
      console.log(email, password);
      authSing(email, password);
      formSesion.reset(); 
           
     onNavigate('/wall');         

    });
  }
 
});

// INICIO SESION CON GOOGLE

window.addEventListener('load', function () {

  const emailGoogle = document.querySelector('#btn-inicioGoogle');
  if(emailGoogle){
  emailGoogle.addEventListener('click', () => {
    authGoogle();
  });
}
});

window.addEventListener('load', function () {
  const linkRegistarse = document.getElementById('registrarse');
  if (linkRegistarse) {
    linkRegistarse.addEventListener('click', () => onNavigate('/register'));
  }
});






// const formReg = document.querySelector('#btn-inicioGoogle');







// const linkRegistarse = document.getElementById('registrarse');

// const btnInicioSes = document.getElementById('btnIngresar');
// btnInicioSes.addEventListener('click', () => onNavigate('/Wall'));

// const btnRegis = document.getElementById('registrarse');
// btnRegis.addEventListener('click', () => onNavigate('/Register'));

// const btnGoogle = document.getElementById('btn-inicioGoogle ')
// btnGoogle.addEventListener('click', () => onNavigate('/Login'));


    // const formulario = document.createElement('button');
    // buttonRegister.textContent = 'Iniciar sesión con Google';
    // buttonLogin.textContent = 'Inicia sesión';

// const formulario = document.createElement('button');
    // buttonRegister.textContent = 'Iniciar sesión con Google';
    // buttonLogin.textContent = 'Inicia sesión';





