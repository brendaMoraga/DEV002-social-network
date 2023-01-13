//AQUI PARTE LO DE LA SPA 

/* eslint-disable import/no-cycle */
import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { Wall } from './components/Wall.js';



const root = document.getElementById('root');

const routes = {
    '/': Home,
    '/login': Login,
    '/register': Register,
    '/wall': Wall,
    };

    //  estas funciones  , sirve para limpiar el div root del html y alimentrlo con los routes 
// de las diferentes sesiones de la app (el pathnamme son los componotenes de la constante routes      ) 

export const onNavigate = (pathname) => { 
    console.log('hola');
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

console.log(component)


