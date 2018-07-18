var user = JSON.parse(localStorage.getItem("user"));
if (user === null) {
    window.location = "register.html"
}
// Variables
const listaTarea = document.getElementById("listaTareas");

// Ejecución eventos
eventListeners();

function eventListeners() {
    //Cuando se envia el formulario
    document.getElementById("enviarTarea").addEventListener("click", agregarTarea); //boton crear tarea
    // Borrar publicaciones
    // Contenido cargado
    document.addEventListener("DOMContentLoaded", localStorageListo);
}

// Funciones

//Generar elementos del DOM
function generarDom(post) {

    // Crear elementos
    const itemTarea = document.createElement("div");
    const parrafoAutor = document.createElement("h3");
    const autor = document.createTextNode(post.autor);
    const parrafo = document.createElement("p");
    const textTarea = document.createTextNode(post.mensaje);
    const botonBorrar = document.createElement("button");
    const textBoton = document.createTextNode("x");
    const like = document.createElement("i");

    // añadir clases a elementos
    parrafo.setAttribute("class", "d-inline-block");
    botonBorrar.setAttribute("class", "botonBorrarComment");
    botonBorrar.setAttribute("id", "borrar-tarea");
    botonBorrar.addEventListener("click", borrarTarea);
    like.classList.add("fas", "fa-heart", "heart");

    let counter = 0;
    like.addEventListener("click", function() {
        like.classList.toggle("red");
        counter++;
        let contad = document.getElementById("contador");
        contad.innerHTML = counter;
        console.log(counter);
    })

    function guardarLocalStorage() {
        localStorage.setItem("counter", JSON.stringify(counter));
    };
    guardarLocalStorage();

    function pedirLocalStorage() {
        let counter = JSON.parse(localStorage.getItem("counter"));
        console.log(counter);
    }
    pedirLocalStorage();





    itemTarea.appendChild(parrafoAutor);
    parrafoAutor.appendChild(autor);

    // like a la publicación
    itemTarea.appendChild(like);
    // añade la publicacion a la lista
    itemTarea.appendChild(parrafo);
    // añade la tarea al parrafo
    parrafo.appendChild(textTarea);
    // añade el botón de borrar a la publicacion
    itemTarea.appendChild(botonBorrar);
    //Añade texto al boton
    botonBorrar.appendChild(textBoton);
    // añade item con tarea y boton a contenedor padre
    listaTarea.appendChild(itemTarea);

}

// Añadir tareas al documento
function agregarTarea() {
    // leer el valor del textarea

    const tareas = document.getElementById("crearTarea").value;
    if (tareas === "") {
        $('#myModal').modal() //se llama al modal
            //alert("no puede publicar mensajes vacíos");
    } else {
        let post = {
            mensaje: tareas,
            autor: user.displayName
        }

        //Crear elementos en el DOM
        generarDom(post)
            // Añadir a Local Storage
        agregarTareasLocalStorage(post);
        //limpiar textArea
        document.getElementById("crearTarea").value = "";
    }
}
// Elimina tarea del DOM
function borrarTarea(e) {
    console.log(e);
    console.log(e.target.parentElement);
    console.log(e.target.parentElement.innerText);
    console.log(e.target.id);

    $('#myModal2').modal(); //se llama al modal
    document.getElementById("eliminar").addEventListener("click", eliminar); //evento boton eliminar
    document.getElementById("cancelar").addEventListener("click", cancelar); //evento boton cancelar

    function eliminar() {
        if (e.target.id === "borrar-tarea") {
            let parent = e.target.parentElement;
            let autor = parent.childNodes[0].innerText;
            let mensaje = parent.childNodes[1].innerText;
            e.target.parentElement.remove();
            borrarTareasLocalStorage({ autor, mensaje });
        }
    }

    function cancelar() { //función del evento del botón cancelar
        return false;
    }
}

// Mostrar datos de LocalStorage en la página
function localStorageListo() {
    let tareas;
    tareas = obtenerTareasLocalStorage();
    tareas.forEach(function(mensaje) {
        generarDom(mensaje);
    });
}

//Agrega publicacion a local storage
function agregarTareasLocalStorage(textoTarea) {
    let tareas;

    tareas = obtenerTareasLocalStorage();
    // Añadir nueva publicacion
    tareas.push(textoTarea);
    // Convertir de string a arreglo para local storage
    localStorage.setItem("tareas", JSON.stringify(tareas));

}

// Comprobar que haya elementos en localstorage, retorna un arreglo
function obtenerTareasLocalStorage() {
    let tareas;
    // Revisamos los valores de local storage
    if (localStorage.getItem("tareas") === null) {
        tareas = [];
    } else {
        tareas = JSON.parse(localStorage.getItem("tareas"));
        //console.log(tareas);
    }
    return tareas;
}

// Eliminar publicacion de Local Storage
function borrarTareasLocalStorage(post) {

    let tareas;
    //console.log(borrarTarea)
    tareas = obtenerTareasLocalStorage();
    //console.log(tareas);
    tareas.forEach(function(tarea, index) {
        //console.log(tarea)
        //console.log(index)
        if (tarea.autor === post.autor && tarea.mensaje === post.mensaje) {
            tareas.splice(index, 1);
        }
    })
    localStorage.setItem("tareas", JSON.stringify(tareas));
    //console.log(tareas)

}
