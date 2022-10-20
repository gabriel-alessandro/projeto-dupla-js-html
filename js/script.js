function validar(){
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;
  var erro = document.getElementById('erro');


  if(nome==''){
    erro.innerHTML = 'Preencha o nome.';
    document.getElementById('n').style.color = 'red';
    document.getElementById('nome').focus();
    return false;
  }else if(email==''){
    erro.innerHTML = 'Preencha o E-mail.';
    document.getElementById('e').style.color = 'red';
    document.getElementById('email').focus();
    return false;
  }else if(mensagem==''){
    erro.innerHTML = 'Digite a mensagem.';
    document.getElementById('m').style.color = 'red';
    document.getElementById('mensagem').focus();
    return false;
  }else{
    return true;
  }
}
