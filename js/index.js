document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user) {
        document.querySelector("#cadastro").classList.add('hidden');
        document.querySelector("#login").classList.add('hidden');
        const userInfoDiv = document.getElementById("user-info");
        userInfoDiv.innerHTML = `<span>Bem-vindo, ${user.nome}</span>`;
    }
});