import { createUser } from "./firebase.js";
const form = document.getElementById('registrarUsuario');

form.addEventListener ('submit',(e)=>{
 
  e.preventDefault();
  const email= document.getElementById('correo').value;
  const password= document.getElementById('contraseña').value;
  createUser(email,password);
  console.log(email,password);
  form.reset();
 
});



