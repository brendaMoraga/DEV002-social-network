import {
  onGetTasks,
  coleccionComentarios,
  deleteTask,
  getTask,
  updateTask,
  user,
  upLoadImg,
  like,
  disLike,
  logOut,
} from '../lib/firebase.js';

import { onNavigate } from '../main.js'

// 1.- IMPRIMIR EN DOM/HTML
export const Wall = () => {
  const divWall = document.createElement('div');
  divWall.classList.add('contenedorMuro');
  divWall.innerHTML = /* html */`
  <div class="contenedorFoto"><img class="fotoPerfil" src="../img/perfil.png" id=fotoPerUs>
  <h1>Nombre de Usuario</h1>
</div>
<div class="contenedorPost">
  <input type='file' id='selecImg' class='inputImagen'> 
  <img class="fotoConcert" id="imagen"/>
  <button id='publicar' class="btn-Publicar"> Publicar </button>
</div>
<div class="btns">
<button id="like" class="corazon"></button>
<button id="entrada" class="ticket"></button>
</div>
<form id="formComentario" class="formComen">
  <textarea name="" id="textoComent" class="textPost" placeholder="escribe un comentario..."></textarea>
  <button id="comentar" class="enviarComentario"> Comentar </button>
</form>
<div id="contenedorComentario" class='divComentarios'></div>
<div class="bntsalir">
  <button id="cerrarSesion" class="salir">Cerrar sesion</button>
</div>
`;
  return divWall;
};

// Subir un Post:

window.addEventListener("DOMContentLoaded", async () => {

  const btnPublicar = document.querySelector('#publicar');
  console.log(btnPublicar)
  btnPublicar.addEventListener('click', async () => {
    const file = document.querySelector('#selecImg').files[0];
    if (file == null){
      alert('No has seleccionado un archivo');
    }else{
    
    // const name = new Date + '-' + file.name
   const imagenUser = await upLoadImg(file);
   const imagenPost = document.querySelector('#imagen')
    imagenPost.setAttribute('src', imagenUser);
  }
       
  });
});

// // Agregar, eliminar y editar comentario:

window.addEventListener("DOMContentLoaded", async () => {
  const divComentario = document.querySelector('#contenedorComentario');
  const formComent = document.querySelector('#formComentario');
  let editStatus = false;
  let id = "";

  onGetTasks((querySnapshot) => {
    divComentario.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      divComentario.innerHTML += `
      <div class="card card-body  border-primary">
    <p>${task.comentario}</p>
    <div class='divBotonesWall'>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 
      </button>
      <p class="btnLike" id="btnLike" data-id="${doc.id}">♡ ${task.totalLikes}</p>
    </div>
  </div>`;
    });


    //likes

    const botonLike = divComentario.querySelectorAll('#btnLike');
    botonLike.forEach((btnLike) => {
      btnLike.addEventListener('click', (e) => {
        console.log('Ingreso al boton')

        const currentUserLike = user().uid;
        const idLikeButton = e.target.dataset.id;


        getTask(idLikeButton)
          .then((document) => {
            const post = document.data();

            if (!post.likeUsuario.includes(currentUserLike)) {
              console.log('entro al if')
              const likes = (post.totalLikes) + 1;
              like(idLikeButton, likes, currentUserLike);
            } else {
              const likes = (post.totalLikes) - 1;
              disLike(idLikeButton, likes, currentUserLike);
            }
          })
          .catch(() => { });
      });
    });

    const btnsDelete = divComentario.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        // eslint-disable-next-line no-restricted-globals
        const deleteConfirm = confirm('Estas seguro de borrar este comentario?');
        if (deleteConfirm) {
          deleteTask(dataset.id);
        }
        try {
          await deleteTask(dataset.id);
        } catch (error) {
          console.log(error);
        }

      })
    );
    const btnsEdit = divComentario.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          formComent['textoComent'].value = task.comentario;

          editStatus = true;
          id = doc.id;
          formComent['comentar'].innerText = "Update";
        } catch (error) {
          console.log(error);
        }
      });
    });
  });


  formComent.addEventListener("submit", async (e) => {
    e.preventDefault();
    const description = formComent['textoComent'];

    try {
      if (!editStatus) {
        await coleccionComentarios(description.value, 0, []);
      } else {
        await updateTask(id, {
          comentario: description.value,

        });

        editStatus = false;
        id = "";
        formComent['comentar'].innerText = "Save";
      }

      formComent.reset();
      // description.focus();
    } catch (error) {
      console.log(error);
    }
  });
});

window.addEventListener('load', () => {
  const btnLogOut = document.querySelector('#cerrarSesion');
  if (btnLogOut) {
    btnLogOut.addEventListener('click', () => {
      logOut();
      onNavigate('/');
    });
  }
})

