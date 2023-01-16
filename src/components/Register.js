// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { createUser } from '../lib/firebase.js';

export const Register = () => {
  const divRegis = document.createElement('div');
  divRegis.classList.add('contenedorRegis');
  divRegis.innerHTML = /*html*/`
    <div class="contendorRegistro">
    <form id="registrarUsuario" >
    <input type="text" id="nombreUs" placeholder="Crea tu nombre de usuario" autocomplete="off">
     <input type="email" id="correo" placeholder="Ingresa tu correo electorico" autocomplete="off">
     <input type="password" id="contraseña" placeholder="Crea tu contraseña">
    <select name="SelecRegis" id="btnSoy" class="btnList">
      <option> Músico Profesional</option>
      <option> Banda</option>
      <option> Autor/Compositor</option>
      <option> Fans/Espectador</option>
    </select>
    <input type="submit" id="enviar" class="btn-InicioSesion" value='REGISTRARSE'>
    </form>
    <a href="" class="recuperarContraseña">Regresar</a>
    <hr />
    </div>`

  //usar queryselector - primero cargar comillas y luego funciones de firebase 


  return divRegis;

};

window.addEventListener('load', function () {
  const linkRegistarse = document.getElementById('registrarse');
  if (linkRegistarse) {
    linkRegistarse.addEventListener('click', () => onNavigate('/register'));
  }
});




// button.addEventListener('click', () => {
//   onNavigate('/login');
// });
// buttonBack.addEventListener('click', () => {
//   onNavigate('/');
// });

// divRegis.querySelector

// div.append(title, inputEmail, inputPass, button, buttonBack);



window.addEventListener('load', function () {
  
  const formReg = document.querySelector('#registrarUsuario');

  formReg.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#correo').value;
    const password = document.querySelector('#contraseña').value;
    console.log(email, password);
    createUser(email, password);
    formReg.reset();

  });
});