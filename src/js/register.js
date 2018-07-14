//Registro
function registerWithFirebase(){
  const emailValue = email.value;
  const passwordValue = password.value;

  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
      .then(()=>{
          console.log("Usuario creado con éxito");
      })
      .catch((error)=>{
          console.log("Error de firebase > Código > "+error.code); 
          console.log("Error de firebase > Mensaje > "+error.message);
      });
}


function printMail(){
    document.getElementById("userMail").innerHTML= email.Value;
  }

  function comment(){
    window.location= "comentarios.html"
  }