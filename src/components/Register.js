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
    <p id="parrafoErrorName"></p> 
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
    <a href="" class="recuperarContraseña">Regresar</a>
    <hr />
    </div>`

  //usar queryselector - primero cargar comillas y luego funciones de firebase 


  return divRegis;

};

// window.addEventListener('load', function () {
//   const linkRegistarse = document.getElementById('registrarse');
//   if (linkRegistarse) {
//     linkRegistarse.addEventListener('click', () => onNavigate('/register'));
//   }
// });

//

window.addEventListener('load', function () {
  const formReg = document.querySelector('#registrarUsuario');
  if (formReg) {
    formReg.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.querySelector('#correo').value;
      const password = document.querySelector('#contraseña').value;
      const name = document.querySelector('#nombreUs').value;
      const date = document.querySelector('#start').value;
      console.log(email, password, name, date);
      const RegisUs = await createUser(email, password, displayName, date);
      console.log(RegisUs);
      if (RegisUs === 'Firebase: Error (auth/invalid-email).') {
        const parrafoError = document.getElementById('parrafoErrorMail');
        parrafoError.innerHTML = 'el campo esta vacio';
        parrafoError.style.color = '#ff0000';
        console.log(" parrafo error1: " + parrafoError);
      } else if (RegisUs === 'Firebase: Error (auth/internal-error).') {
        const parrafoError = document.getElementById('parrafoErrorPass');// error casilla de pass sin llenar
        parrafoError.innerHTML = 'el campo esta vacio';
        parrafoError.style.color = '#ff0000';
      } else if (RegisUs === 'Firebase: Error (auth/missing-email).') {
        const parrafoError = document.getElementById('parrafoErrorMail'); // error casilla de correo sin llenar
        parrafoError.innerHTML = 'el campo esta vacio';
        parrafoError.style.color = '#ff0000';
      } else if (RegisUs === 'Firebase: Error (auth/email-already-in-use).') {
        const parrafoError = document.getElementById('parrafoErrorMail');
        parrafoError.innerHTML = 'correo en uso';
        parrafoError.style.color = '#ff0000';
      } else {
        formReg.reset();
        onNavigate('/wall');
      }
    });
  }
});


