function logoutWithFirebase() {
	firebase.auth().signOut()
		.then(() => {
			console.log("Usuario finalizó su sesión");
		})
		.catch((error) => {
			console.log("Error de firebase > Código > " + error.code);
			console.log("Error de firebase > Mensaje > " + error.message);
		});
}