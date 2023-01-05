// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
    const HomeDiv = document.createElement('main');        // no iniciar var con mayuscula (eso se hace en react)
    HomeDiv.classList.add('ContainerPadre');
    // const formulario = document.createElement('button');
    // buttonRegister.textContent = 'Iniciar sesión con Google';
    // buttonLogin.textContent = 'Inicia sesión';
    HomeDiv.innerHTML = `<div class="contendorInicio">
      <input type="text" placeholder="Ingresa nombre de usuario" class="inputInicio">
      <input type="text" placeholder="Contraseña" class="inputInicio">
      <button type="btn" class="btn-InicioSesion">Iniciar Sesión</button>
      <a href="" class="recuperarContraseña">olvide mi contraseña</a>
      <hr />
     </div>
        <div class="contenedorInicioGoogle">
    </div>
</div>
</main>`

    
return HomeDiv;   
};

  // buttonRegister.addEventListener('click', () => onNavigate('/register'));
    // buttonLogin.addEventListener('click', () => onNavigate('/login'));