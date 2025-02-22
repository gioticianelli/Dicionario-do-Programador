function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    
    // Verifica se há algum texto no campo de pesquisa
    if (!campoPesquisa) {
        section.innerHTML = "<p>Sinto muito, não foram encontrados resultados correspondentes.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();

        // Verifica se o título corresponde exatamente ao texto da pesquisa
        if (titulo === campoPesquisa) { 
            // Escapa o exemplo HTML para exibição segura
            let exemploEscapado = dado.exemplo.replace(/</g, '&lt;').replace(/>/g, '&gt;');

            // Cria um novo item de resultado com o título, a descrição e o exemplo
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <pre class="exemplo-meta">${exemploEscapado}</pre>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Sinto muito, não foram encontrados resultados correspondentes.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

// Adiciona um ouvinte de eventos ao campo de entrada de texto
document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada é a tecla Enter (código 13)
    if (event.key === "Enter") {
        // Cancela o evento padrão para evitar que o formulário seja enviado
        event.preventDefault();
        // Chama a função de pesquisa
        pesquisar();
    }
});
