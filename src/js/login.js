function loginWithFirebase() {
	const emailValue = email.value;
	const passwordValue = password.value;

	firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
		.then(() => {
			let user= firebase.auth().currentUser;
			localStorage.setItem("user", JSON.stringify(user));
			console.log("Usuario inició sesión con éxito");
			window.location = "comentarios.html"
			
		})
		.catch((error) => {
			let msn= document.getElementById("msnUsuario");
			if(error.code === "auth/user-not-found"){
					msn.innerHTML= "Usuario no registrado";
			}
			if(error.code === "auth/invalid-email"){
				msn.innerHTML= "Email no válido";
		}
			
			if(error.code==="auth/wrong-password"){
					msn.innerHTML="Contraseña incorrecta"
			}
			console.log("Error de firebase > Código > " + error.code);
			console.log("Error de firebase > Mensaje > " + error.message);
		});
}

//juana, juana@gmail.com, 1111111