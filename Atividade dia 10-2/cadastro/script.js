const form = document.getElementById("formCadastro");
const API_URL = "http://localhost:8080/usuarios";

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        perfil: document.getElementById("perfil").value,
        endereco: document.getElementById("endereco").value,
        bairro: document.getElementById("bairro").value,
        complemento: document.getElementById("complemento").value,
        cep: document.getElementById("cep").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao cadastrar usuário");
        }
        return response.json();
    })
    .then(data => {
        alert("Usuário cadastrado com sucesso!");
        form.reset();
        console.log(data);
    })
    .catch(error => {
        alert("Erro: " + error.message);
        console.error(error);
    });
});
