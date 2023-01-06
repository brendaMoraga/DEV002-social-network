// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Login = () => {
    const div = document.createElement('main');        // no iniciar var con mayuscula (eso se hace en react)
    div.classList.add('ContainerPadre');
    div.innerHTML = `<div class="contendorInicio" >
    <form id="inicioSesion">
      <input type="email" id="correo" placeholder="Ingresa tu correo electrónico" class="inputInicio" autocomplete="off">
      <input type="password" placeholder="Contraseña" class="inputInicio">
      <input type="submit" id="enviar" value="Enviar"  class="btn-InicioSesion"> </form>
      <a href="" class="recuperarContraseña">olvide mi contraseña</a> 
      <hr />
     </div>
        <div class="contenedorInicioGoogle">
    </div>
</div>

</main>`

    
return div;   
};
// export const Login = () => {
//     const div = document.createElement('div');
//     const title = document.createElement('h2');
//     const button = document.createElement('button');
//     const buttonBack = document.createElement('button');
//     const inputEmail = document.createElement('input');
//     const inputPass = document.createElement('input');

    

//     button.textContent = 'entrar';
//     buttonBack.textContent = 'Regresa';
//     title.textContent = 'Inicia Sesion';

//     button.addEventListener('click', () => {
//         console.log(inputEmail.value);
//         onNavigate('/wall');
//     });
//     buttonBack.addEventListener('click', () => {
//         onNavigate('/');
//     });

//     div.append(title, inputEmail, inputPass, button, buttonBack);

//     return div;
// };