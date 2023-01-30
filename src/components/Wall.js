


export const Wall = () => {

    const divWall = document.createElement('div');
    divWall.classList.add('contenedorMuro');
    divWall.innerHTML = /*html*/`
<div class = "contenedorMuro">
<div class = "contenedorFoto"><img class= "fotoPerfil" src="../img/perfil.png" id=fotoPerUs> <h1>Nombre de Usuario</h1> </div>
<div class="contenedorPost"><img class="fotoConcert" id="postUs" src="../img/flayer.png"> 
</div>
</div>`




    return divWall;
};