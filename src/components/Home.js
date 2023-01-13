// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { Wall } from './Wall.js';

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
        <button type="btn" class="btn-InicioSesion" id='btnIngresar'>Iniciar Sesión</button>
        <a href="" class="recuperarContraseña">olvide mi contraseña</a>
      </form> 
      </div>
    <div class="contenedorInicioGoogle">
    <button type="submit" id="btn-inicioGoogle">Iniciar sesion con Google Chrome</button>
      <div class='contenedorLinkRegis'>
        <p>¿No tienes cuenta?</p> 
        <button id="registrarse" class="btnLink" >REGISTRATE</a>
      </div>
</div>
</div>
`

  return HomeDiv;
};

//el btn deberia estar impreso en el dom primero antes de llamarlo, por esto aparece un null al listener 
//deberiamos probar set time out para que carge primero la web antes de llamar al id 

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
