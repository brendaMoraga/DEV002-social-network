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


// el método history.pushState () que toma tres parámetros,
// es decir, estado, título y la ruta para empujar y empujar
// la ruta actual en objeto de historial para que también
// podamos navegar a través del botón de avance y retroceso 
// window.onload = nombre_de_la_funcion; 

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




