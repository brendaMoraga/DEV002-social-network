//AQUI PARTE LO DE LA SPA 

/* eslint-disable import/no-cycle */
import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';


const rootDiv = document.getElementById('root');

const routes = {
    '/': Home,
    '/login': Login,
    '/register': Register,
};

export const onNavigate = (pathname) => { 
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname,
    );

    root.removeChild(root.firstChild);
    root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
//con esto puedo hacer back a la web
window.onpopstate = () => {
    root.removeChild(root.firstChild);
    root.append(component());
};

root.appendChild(component());
