document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user) {
        document.querySelector("#cadastro").classList.add('hidden');
        document.querySelector("#login").classList.add('hidden');
        const userInfoDiv = document.getElementById("user-info");
        userInfoDiv.innerHTML = `<span>Bem-vindo, ${user.nome}</span>`;
        document.getElementById("logout").classList.remove('hidden');
        document.getElementById("postagem").classList.remove('hidden'); // Mostra o botão de postagem
    } else {
        document.getElementById("postagem").classList.add('hidden'); // Esconde o botão de postagem
    }

    document.getElementById("logout").addEventListener("click", function() {
        sessionStorage.removeItem("user");
        location.reload();
    });
});
