const formulario = document.querySelector("#formLogin");
const mensagemErro = document.querySelector("#mensagemErro");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const campoEmail = formulario.querySelector("input[type='email']").value.trim();
    const campoSenha = formulario.querySelector("input[type='password']").value.trim();

    if (campoEmail === "" || campoSenha === "") {
        mensagemErro.innerText = "Todos os campos precisam ser preenchidos.";
        return;
    }

    if (campoSenha.length <= 3) {
        mensagemErro.innerText = "A senha deve ter no mínimo 4 caracteres.";
        return;
    }

    mensagemErro.innerText = "";

    alert("Acesso realizado com sucesso!");
});
