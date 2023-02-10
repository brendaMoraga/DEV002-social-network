import { onNavigate } from '../main.js';
import { createUser } from '../lib/firebase.js';
import { auth } from '../init.js';


export const Register = () => {
  const divRegis = document.createElement('div');
  divRegis.classList.add('contenedorRegis');
  divRegis.innerHTML = /* html */`
    <div class="contendorRegistro">
    <form id="registrarUsuario" >
     <input type="email" id="correo" class="inputFormulario" placeholder="Ingresa tu correo electorico" autocomplete="off">
    <p id="parrafoErrorMail"></p>  
    <input type="password" id="contraseña" class="inputFormulario" placeholder="Crea tu contraseña">
    <p id="parrafoErrorPass"></p> 
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
       min="1940-01-01" max="2028-12-31">
       </div>
    <input type="submit" id="enviar" class="btn-Registrarse" value='REGISTRARSE'>
      </form>
      <a id='linkRegresar' class="regresar">Regresar</a>
    <hr />
    </div>`;
  return divRegis;
};

window.addEventListener('load', () => {
  const regresarHome = document.querySelector('#linkRegresar');
  if (regresarHome) {
    regresarHome.addEventListener('click', () => {
      onNavigate('/');
    });
  }
});

window.addEventListener('load', () => {
  const formReg = document.querySelector('#registrarUsuario');
  if (formReg) {
    formReg.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.querySelector('#correo').value;
      const password = document.querySelector('#contraseña').value;
      const RegisUs = await createUser(auth, email, password);
      if (RegisUs === 'Firebase: Error (auth/invalid-email).') {
        const parrafoError = document.getElementById('parrafoErrorMail');
        parrafoError.innerHTML = 'los campos estan vacio';
        parrafoError.style.color = '#ff0000';
      } else if (RegisUs === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        const parrafoError = document.getElementById('parrafoErrorPass');
        parrafoError.innerHTML = 'la contraseña debe tener minimo 6 caracteres';
        parrafoError.style.color = '#ff0000';
      } else if (RegisUs === 'Firebase: Error (auth/internal-error).') {
        const parrafoError = document.getElementById('parrafoErrorPass');
        parrafoError.innerHTML = 'el campo de contraseña esta vacio';
        parrafoError.style.color = '#ff0000';
      } else if (RegisUs === 'Firebase: Error (auth/missing-email).') {
        const parrafoError = document.getElementById('parrafoErrorMail');
        parrafoError.innerHTML = 'el campo de correo esta vacio';
        parrafoError.style.color = '#ff0000';
      } else if (RegisUs === 'Firebase: Error (auth/email-already-in-use).') {
        const parrafoError = document.getElementById('parrafoErrorMail');
        parrafoError.innerHTML = 'correo en uso';
        parrafoError.style.color = '#ff0000';
      } else {
        formReg.reset();
        onNavigate('/');

      }
    });
  }
});
