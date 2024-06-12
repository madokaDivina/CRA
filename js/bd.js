function local(){
    let dados = [ { "id":1,"nome":"will","senha":123 }, 
                  { "id":2,"nome":"bob","senha":2222 }, 
                  { "id":3,"nome":"ringo","senha":3333 },
                  { "id":4,"nome":"rafael","senha":4213}
                ]       
    let n = JSON.stringify(dados);
    localStorage.setItem("tds", n);   
    return dados    
}






//SessionStore getItem
function logado(){
 let dados = JSON.parse(sessionStorage.getItem("user"))
 let nome = dados.nome  
 document.getElementById("nome").innerHTML = "Bem vindo " + nome
 return nome
}
//SessionStore remove Item
function logaout(){
  sessionStorage.removeItem("user")
  let url = "index.html"
  window.open(url)
  window.close()    
}



document.getElementById("termos").addEventListener("change", function() {
  if (this.checked) {
      document.getElementById("termosModal").style.display = "block";
  }
});

function closeModal() {
  document.getElementById("termosModal").style.display = "none";
}

function adicionar() {
  if (!document.getElementById("termos").checked) {
      alert("Você deve aceitar os termos de responsabilidade para criar um cadastro.");
      return;
  }

  var ClienteArray = JSON.parse(localStorage.getItem("tds")) || [];
  let login = document.querySelector("#login").value;
  let senha = document.querySelector("#senha").value;
  let user = { id: Date.now(), nome: login, senha: senha };
  ClienteArray.push(user);
  localStorage.setItem("tds", JSON.stringify(ClienteArray));
  alert("Registro adicionado.");
  let url = "login.html";
  window.open(url);
  window.close("cadastro.html");
}


function postagem() {
  alert("Sua postagem foi enviada para nosso analista!")
  let url = "index.html"
  window.open(url)
  window.close() 

}


function aprovar(){
  alert("Postagem aprovada com sucesso!")
  let url = "analista.html"
  window.open(url)
  window.close("aprovar.html")
}

function reprovar(){
  document.getElementById("reprovar").addEventListener("click", function(){
    document.getElementById("motivo").innerHTML = '<input type="text" placeholder="Motivo:"> <button id="reprovar" type="submit" onclick="inicio()" >Confirmar</button>';
    document.getElementById("motivo").style.display = "block";
  });
}


function inicio(){
  alert("Postagem reprovada com sucesso, enviaremos o motivo para o usuário!")
  let url = "analista.html"
  window.open(url)
  window.close("aprovar.html")
}






