import { coleccionComentarios } from '../lib/firebase.js';

export const Wall = () => {
  const divWall = document.createElement('div');
  divWall.classList.add('contenedorMuro');
  divWall.innerHTML = /* html */`
    <div class = "contenedorFoto"><img class= "fotoPerfil" src="../img/perfil.png" id=fotoPerUs>
    <h1>Nombre de Usuario</h1> </div>
    <div class="contenedorPost">
    <textarea name="" id="" class="textPost"  placeholder="Escribe una descripcion para tu publicacion..."></textarea>
    <img class="fotoConcert" id="postUs" src="../img/flayer.png"> 
    </div>
    <button id="like" class="corazon"> </button>
    <button id="entrada" class="ticket"></button>
    <form id="formComentario" class= "formComen">
    <textarea name="" id="textoComent" class="textPost"  placeholder= "escribe un comentario..."></textarea>
    <button id="comentar" class="enviarComentario"> Comentar </button>
    </form>
    <div class= "bntsalir">
    <button id="cerrarSesion" class="salir">Cerrar sesion</button>
    </div>
`;
  return divWall;
};

window.addEventListener('load', () => {
  const formComent = document.querySelector('#formComentario');
  if (formComent) {
    formComent.addEventListener('submit', (e) => {
      e.preventDefault();
      const comentario = formComent['textoComent'];
      coleccionComentarios(comentario.value);
    })
  }
});
