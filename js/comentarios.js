let divDatos = document.getElementById('datos');
let commentTextArea = document.getElementById('comment');

let pComment = document.createElement('p');

function saveComment() { //funcion para guardar comentario
  //validación inputs, usamos if para que no se imprima un mensaje vacío
  if((commentTextArea.value ==='')) {
    alert('no puedes dejar campos vacíos')
  } else{
    
    let comment = commentTextArea.value;
    localStorage.setItem(comment,comment); //En este punto guardo nombre y comment en mi local storage
  }
}

function printComment() { //funcion para imprimir el mensaje en la pantalla
  divDatos.innerHTML = '';
  for(let i=0; i < localStorage.length; i++) { //recorro el local storage 
  // recorre el localStorage, y guardar cada una de las Key (llave), y luego vamos a llamar a lo que está en el localStorage con getItem
    let commentName = localStorage.key(i); //Guarda sólo la llave del localStorage en una variable (y guarda sus respectivos valores del localStorage)
    let comentarioTexto = localStorage.getItem(commentName);

//manipulación del dom para crear párrafo y mostrar mensaje
    let singleComment = document.createElement('div');
    singleComment.className = 'singleComment';

    let pComment = document.createElement('p');
    let nodeP = document.createTextNode(comentarioTexto);
    pComment.appendChild(nodeP);

    singleComment.appendChild(pComment);

    divDatos.appendChild(singleComment);

  }
}
function deleteComments(){

  const x = confirm("confirme para eliminar su comentario");
  if(x==true){
  // Limpiamos todo lo del localStorage con .clear(), recordar el objeto global window.                
  window.localStorage.clear();
  
  /*commentTextArea.value = '';
  divDatos.innerHTML = '';*/
  }else{
    return false;
  }
}

function makeComment(){
  if(typeof(Storage) !== 'undefined'){
    saveComment();
    printComment();
    
    commentTextArea.value = '';
  }else{
    alert('lo sentimos, el web Storage no tiene soporte :(');
  }
}
printComment();
