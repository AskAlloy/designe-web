function adicionarFilme(){
  
    var filmeFav = document.getElementById('Poster').value;
    var trailer = document.getElementById('trailer').value;
    var nomeFilmes = document.getElementById('Nome').value;
   
    //var elementoListaFilmes = document.getElementById('listaFilmes');
    var elementoListaFilmes = document.getElementById('galeriafilmes');
    
    //testando
    /*elementoListaFilmes.innerHTML += elementoListaFilmes.innerHTML + '<a href=' + trailer + '>' + '<img src=' + filmeFav + '>'+ '</a>'+ nomeFilmes;*/
  
    //Arrumado e colocando DIV
    elementoListaFilmes.innerHTML += '<div class="filme-container">' +  '<a href="' + trailer + '" target="_blank">' +'<img src="' + filmeFav + '" alt="' + nomeFilmes + '" />' + '</a> ' + '<div class="nome-filme">' + nomeFilmes + '</div>' + '</div>';
  
  limparCampos();
}


   function limparCampos(){
    //LIMPAR CAMPOS
   
       document.getElementById('filme').value = '';
       document.getElementById('trailer').value = '';
       document.getElementById('Nome').value = '';
   
 }