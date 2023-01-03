// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
    const HomeDiv = document.createElement('div');
    const title = document.createElement('h2');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    buttonRegister.textContent = 'Registrate';
    buttonLogin.textContent = 'Inicia sesión';
    title.textContent = 'VIEW MY MUSIC';
    

    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    HomeDiv.appendChild(buttonRegister);
    HomeDiv.appendChild(buttonLogin);
    HomeDiv.appendChild(title);

    return HomeDiv;
};