// Captura envio do formulário
document.getElementById("loginForm").addEventListener("submit", async function(e) {

    // Evita recarregar a página
    e.preventDefault();

    // Pega valores digitados
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    try {
        // Envia dados para o backend
        const response = await fetch("\\file://pmn-files/TEMP/Jucelbia/AVA/index.html", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ usuario, senha })
        });

        // Converte resposta para JSON
        const result = await response.json();

        // Se login OK
        if (result.success) {

            // Salva usuário no navegador
            localStorage.setItem("usuario", JSON.stringify(result.user));

            // Redireciona para home
            window.location.href = "index.html";

        } else {
            // Mostra erro
            document.getElementById("msgErro").innerText = "Usuário ou senha inválidos";
        }

    } catch (erro) {
        console.error(erro);
        document.getElementById("msgErro").innerText = "Erro ao conectar com servidor";
    }
});