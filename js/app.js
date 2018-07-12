function saveComment() { //funcion para guardar comentario
    //validación inputs, usamos if para que no se imprima un mensaje vacío
    if((document.getElementById('name').value === '') || (document.getElementById('comment').value ==='')) {
      alert('no puedes dejar campos vacíos')
    } else{
      let name = document.getElementById('name').value;
      let comment = document.getElementById('comment').value;
      localStorage.setItem(name,comment); //En este punto guardo nombre y comment en mi local storage
    }
  }
  
  function printComment() { //funcion para imprimir el mensaje en la pantalla
    document.getElementById('datos').innerHTML = '';
    for(let i=0; i < localStorage.length; i++) { //recorro el local storage 
    // recorre el localStorage, y guardar cada una de las Key (llave), y luego vamos a llamar a lo que está en el localStorage con getItem
      let commentName = localStorage.key(i); //Guarda sólo la llave del localStorage en una variable (y guarda sus respectivos valores del localStorage)
      let comentarioTexto = localStorage.getItem(commentName);
  
      let singleComment = document.createElement('div');
      singleComment.className = 'singleComment';
  
      let titleComment = document.createElement('h5');
      let nodeTitleComment = document.createTextNode(commentName);
      titleComment.appendChild(nodeTitleComment);
  
      let pComment = document.createElement('p');
      let nodeP = document.createTextNode(comentarioTexto);
      pComment.appendChild(nodeP);
  
      singleComment.appendChild(titleComment);
      singleComment.appendChild(pComment);
  
      document.getElementById('datos').appendChild(singleComment);
  
  
    }
  }
  function deleteComments(){
    // Limpiamos todo lo del localStorage con .clear(), recordar el objeto global window.                
    window.localStorage.clear();
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('datos').innerHTML = '';
  }
  
  function makeComment(){
    if(typeof(Storage) !== 'undefined'){
      saveComment();
      printComment();
      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
    }else{
      alert('lo sentimos, el web Storage no tiene soporte :(');
    }
  }
  printComment();
  