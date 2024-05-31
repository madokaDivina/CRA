function local(){
    let dados = [ { "id":1,"nome":"will","senha":123 }, 
                  { "id":2,"nome":"bob","senha":2222 }, 
                  { "id":3,"nome":"ringo","senha":3333 } 
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
  if (dados[i] == null) {
     alert("Verificando")
    //  alert("encontrou: " + dados[i].nome + ":" + i)
  } else {
    if (login == dados[i].nome && senha == dados[i].senha) {
      console.log("conectado")
      let n = JSON.stringify(dados[i]);
      sessionStorage.setItem("user", n)
      let url = "index.html"
      window.open(url)
      window.close(url)  
      break
    } 
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
}




function TlLogin() {
  let url = "login.html"
  window.open(url)
  window.close(url) 

}










