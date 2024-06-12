function logon() {
    const dados = JSON.parse(localStorage.getItem("tds"));
    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;

    for (let i = 0; i < dados.length; i++) {
        if (login === dados[i].nome && senha === dados[i].senha) {
            console.log("conectado");
            let n = JSON.stringify(dados[i]);
            sessionStorage.setItem("user", n);
            window.location.href = "index.html";
            return; // Encerrar a função após logar o usuário
        }
    }

    // Se o login e senha não forem encontrados no array, verifica se é o caso especial
    if (login === "AnalistaCRA" && senha === "1234") {
        console.log("conectado");
        window.location.href = "analista.html";
        window.close("login.html");
        
    } else {
        console.log("Login ou senha incorretos");
    }
}
