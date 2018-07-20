var user= JSON.parse(localStorage.getItem("user"));
if(user===null){
 window.location= "register.html"
}
let parrafoNombre= document.getElementById("datosNombre");
let parrafoMail= document.getElementById("datosMail");
parrafoNombre.innerHTML= user.displayName;
parrafoMail.innerHTML= user.email;

module.exports = user;