
export const Wall = () => {

    const divWall = document.createElement('div');
    divWall.classList.add('contenedorMuro');
    divWall.innerHTML = /*html*/`
    <div class = "contenedorFoto"><img class= "fotoPerfil" src="../img/perfil.png" id=fotoPerUs>
    <h1>Nombre de Usuario</h1> </div>
    <div class="contenedorPost">
    <textarea name="" id="" cols="30" rows="10" placeholder="Escribe una descripcion para tu publicacion..."></textarea>
    <img class="fotoConcert" id="postUs" src="../img/flayer.png"> 
    </div>
    <button id="like" class="corazon"> </button>
    <button id="entrada" class="ticket"></button>
    <textarea name="" id="" cols="30" rows="10">escribe un comentario...</textarea>
    <button id="cerrarSesion" class="salir">Cerrar sesion</button>
`

    return divWall;
};