// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { createUser } from '../lib/firebase.js';

export const Register = () => {
  const divRegis = document.createElement('div');
  divRegis.classList.add('contenedorRegis');
  divRegis.innerHTML = /*html*/`
    <div class="contendorRegistro">
    <form id="registrarUsuario" >
    <input type="text" id="nombreUs"  class="inputFormulario" placeholder="Crea tu nombre de usuario" autocomplete="off">
     <input type="email" id="correo" class="inputFormulario" placeholder="Ingresa tu correo electorico" autocomplete="off">
     <input type="password" id="contraseña" class="inputFormulario" placeholder="Crea tu contraseña">
    <select name="SelecRegis" id="btnSoy" class="btnList">
      <option> Músico Profesional</option>
      <option> Banda</option>
      <option> Autor/Compositor</option>
      <option> Fans/Espectador</option>
    </select>
    <div class="contenedorFecha">
    <label for="start">Fecha de nacimiento</label>
   <input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31">
       </div>
    <input type="submit" id="enviar" class="btn-Registrarse" value='REGISTRARSE'>
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

//

window.addEventListener('load', function () {

  const formReg = document.querySelector('#registrarUsuario');
  if(formReg){
  formReg.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#correo').value;
    const password = document.querySelector('#contraseña').value;
    console.log(email, password);
    createUser(email, password);
    formReg.reset();

  });
}
});