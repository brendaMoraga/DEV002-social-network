// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
    const HomeDiv = document.createElement('main');
    HomeDiv.classList.add ('containerPadre');
    HomeDiv.innerHTML= /*html*/ `

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
</div>
`

    
    return HomeDiv;
};