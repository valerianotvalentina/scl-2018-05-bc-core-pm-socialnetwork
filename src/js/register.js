//Registro
function registerWithFirebase() {
	const emailValue = email.value;
	const passwordValue = password.value;

	firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
		.then(() => {
			console.log("Usuario creado con éxito");
			window.location = "comentarios.html"

		})
		.catch((error) => {
			let msn= document.getElementById("msnUsuario");
			if(error.code === "auth/email-already-in-use"){
					msn.innerHTML= "Usuario registrado";
			}
			
			if(error.code==="auth/invalid-email"){
					msn.innerHTML="Debes ingresar tus datos"
			}
			console.log("Error de firebase > Código > " + error.code);
			console.log("Error de firebase > Mensaje > " + error.message);
		});
}

