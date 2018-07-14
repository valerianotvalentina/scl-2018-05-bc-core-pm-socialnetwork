function loginWithFirebase() {
	const emailValue = email.value;
	const passwordValue = password.value;

	firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
		.then(() => {
			console.log("Usuario inició sesión con éxito");
		})
		.catch((error) => {
			console.log("Error de firebase > Código > " + error.code);
			console.log("Error de firebase > Mensaje > " + error.message);
		});
}

function comment() {
	window.location = "comentarios.html"
}



//juana, juana@gmail.com, 1111111