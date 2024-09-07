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
        let descricao = dado.descricao.toLowerCase();
        let exemplo = dado.exemplo;

        // Verifica se algum dos campos inclui o texto da pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) { 
            // Escapa o exemplo HTML para exibição segura
            let exemploEscapado = exemplo.replace(/</g, '&lt;').replace(/>/g, '&gt;');

            // Cria um novo item de resultado
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
