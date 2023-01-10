// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
    const divRegis = document.createElement('div');
    divRegis.classList.add('contenedorRegis');
    divRegis.innerHTML = `<div class="contendorRegis">
    <input type="text" placeholder="Ingresa nombre de usuario" class="inputRegis">
    <input type="text" placeholder="Crear contraseña" class="inputRegis">
    <input type="text" placeholder="Correo electrónico" class="inputRegis">
    <select name="SelecRegis" id="btnSoy" class="btnList">
      <option> Músico Profesional</option>
      <option> Banda</option>
      <option> Autor/Compositor</option>
      <option> Fans/Espectador</option>
    </select>
    <button onclick="" class="btn-InicioSesion">Registrarse</button>
    <a href="" class="recuperarContraseña">Regresar</a>
    <hr />`


    return divRegis;
};

// button.textContent = 'Crear cuenta';
// buttonBack.textContent = 'Regresa';
// title.textContent = 'Registro de nueva cuenta';

// button.addEventListener('click', () => {
//     onNavigate('/login');
// });
// buttonBack.addEventListener('click', () => {
//     onNavigate('/');
// });

// div.append(title, inputEmail, inputPass, button, buttonBack);