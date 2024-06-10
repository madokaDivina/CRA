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

function logon(){  
  const dados = JSON.parse(localStorage.getItem("tds"))
  let login = document.querySelector("#login").value
  let senha = document.querySelector("#senha").value

for (let i = 0; dados.length > i; i++) {

    if (login == dados[i].nome && senha == dados[i].senha) {
      console.log("conectado")
      let n = JSON.stringify(dados[i]);
      sessionStorage.setItem("user", n)
      let url = "index.html"
      window.open(url)
      window.close("login.html")  
      break
    } else{
      if (login == "AnalistaCRA" && senha == "1234")
      console.log("conectado")
      let url = "analista.html"
      window.open(url)
      window.close("login.html")  
    }
  }
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



function adicionar() {
  var ClienteArray = JSON.parse(localStorage.getItem("tds"))
  let login = document.querySelector("#login").value
  let senha = document.querySelector("#senha").value
  let user = { id: Date.now(), nome: login, senha: senha }
  ClienteArray.push(user)
  localStorage.setItem("tds", JSON.stringify(ClienteArray))
  alert("Registro adicionado.")
  let url = "login.html"
  window.open(url)
  window.close("cadastro.html")
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






