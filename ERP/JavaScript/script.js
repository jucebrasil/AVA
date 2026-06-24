// Selecionar elementos
const searchInput = document.getElementById("search-input");
const reportsContainer = document.getElementById("reports-container");
const reportCards = reportsContainer.getElementsByClassName("report-card");

// Função de filtro
function filterReports() {
    const searchText = searchInput.value.toLowerCase();

    for (let i = 0; i < reportCards.length; i++) {
        const reportText = reportCards[i].textContent.toLowerCase();
        
        if (reportText.includes(searchText)) {
            reportCards[i].style.display = "block"; // Mostrar o cartão se corresponder
        } else {
            reportCards[i].style.display = "none"; // Ocultar o cartão se não corresponder
        }
    }
}

// Adicionar evento de escuta ao campo de entrada
searchInput.addEventListener("input", filterReports);
