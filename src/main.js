import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Wall } from './components/Wall.js';



const root = document.getElementById('root');

const routes = {
    '/': Home,
    '/register': Register,
    '/wall': Wall,
    };

    //  estas funciones  , sirve para limpiar el div root del html y alimentrlo con los routes 
// de las diferentes sesiones de la app (el pathnamme son los componotenes de la constante routes      ) 


// el método history.pushState () que toma tres parámetros,
// es decir, estado, título y la ruta para empujar y empujar
// la ruta actual en objeto de historial para que también
// podamos navegar a través del botón de avance y retroceso 
// window.onload = nombre_de_la_funcion; para que cargue la página antes de darle una orden

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



// QUÉ ES UNA PROMESA
// Una promesa en JavaScript es un objeto
//  que representa un valor que puede no estar 
//  disponible en el momento en que se crea la promesa, 
//  pero que se espera que esté disponible en algún 
//  momento en el futuro. Las promesas se utilizan para 
//  manejar operaciones asíncronas y permiten ejecutar 
//  código en función de si una operación se ha completado
//   con éxito o si ha ocurrido algún error. Las promesas 
//   pueden tener diferentes estados, como "pendiente" 
//   (pending), "cumplida" (fulfilled) o "rechazada" 
//   (rejected), y se pueden encadenar para crear flujos
//    de control más complejos.

// QUÉ ES UN ROUTER 
// En JavaScript, un router es una herramienta 
// que permite controlar el enrutamiento o la navegación
// dentro de una aplicación web o sitio web. Esto implica 
// manejar la dirección URL que se muestra en el navegador
// y cargar la página correspondiente en función de la ruta 
// que se solicite. Los routers en JavaScript son comúnmente
// utilizados en aplicaciones de una sola página (SPA)
// y se implementan con bibliotecas o 
// frameworks como React, Angular, Vue, entre otros.