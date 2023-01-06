// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
    const HomeDiv = document.createElement('main');        // no iniciar var con mayuscula (eso se hace en react)
    HomeDiv.classList.add('ContainerPadre');
    HomeDiv.innerHTML = `<div class="contendorInicio" >
    <form id="inicioSesion">
      <input type="email" id="correo" placeholder="Ingresa tu correo electrónico" class="inputInicio" autocomplete="off">
      <input type="password" placeholder="Contraseña" class="inputInicio">
      <input type="submit" id="enviar" value="Enviar"  class="btn-InicioSesion"> </form>
      <a href="" class="recuperarContraseña">olvide mi contraseña</a> 
      <hr />
     </div>
        <div class="contenedorInicioGoogle">
    </div>
</div>`

    
return HomeDiv;   
};

// const formulario = document.createElement('button');
    // buttonRegister.textContent = 'Iniciar sesión con Google';
    // buttonLogin.textContent = 'Inicia sesión';

  // buttonRegister.addEventListener('click', () => onNavigate('/register'));
    // buttonLogin.addEventListener('click', () => onNavigate('/login'));

//     <!-- <form id="inicioSesion" >
//     <input type="email" id="correo" placeholder="Ingresa tu correo electorico" autocomplete="off">
//     <input type="password" id="contraseña" placeholder="Ingresa tu contraseña">
//     <input type="submit" id="enviar" value="Enviar">
//   </form> --></input>

// //   <button type="submit" class="btn-InicioSesion">Iniciar Sesión</button>
// {/* <form id="inicioSesion"></form> */}