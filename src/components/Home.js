// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

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
            <button type="btn" class="btn-InicioSesion" id='btn-Ingresar'>Iniciar Sesión</button>
            <a href="" class="recuperarContraseña">olvide mi contraseña</a>
          </form> 
          </div>
        <div class="contenedorInicioGoogle">
        <button type="submit" id="btn-inicioGoogle">Iniciar sesion con Google Chrome</button>
          <div class='contenedorLinkRegis'>
            <p>¿No tienes cuenta?</p> 
            <a id="registrarse " href="">REGISTRATE</a>
          </div>
    </div>
</div>`

// usar onnavigate para hacer funcionar el boton usar query para llamar 
    
return HomeDiv;   
};

// const linkRegistarse = document.getElementById('registrarse');

  // linkRegistarse.addEventListener('click', () => onNavigate('/register'));
  //   buttonLogin.addEventListener('click', () => onNavigate('/login'));


    // const formulario = document.createElement('button');
    // buttonRegister.textContent = 'Iniciar sesión con Google';
    // buttonLogin.textContent = 'Inicia sesión';

// const formulario = document.createElement('button');
    // buttonRegister.textContent = 'Iniciar sesión con Google';
    // buttonLogin.textContent = 'Inicia sesión';
