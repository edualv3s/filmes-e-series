// data/ahsoka.js
window.seriesData = {
    title: "Ahsoka",
    // Esta propriedade nova nos diz como montar a URL para esta série
    url_pattern: "https://embedder.net/e/",
    database: {
        1: { // Temporada 1
            episodes: [
                // Para cada episódio, colocamos o ID único dele
                { ep: 1, title: "Parte Um: Mestra e Aprendiz", id: 'tt13623126' },
                { ep: 2, title: "Parte Dois: Dedicação e Dificuldade", id: 'tt20834312' },
                { ep: 3, title: "Parte Três: Hora de Voar", id: 'tt21382458' },
                { ep: 4, title: "Parte Quatro: Jedi Caído", id: 'tt21382460' },
                { ep: 5, title: "Parte Cinco: Guerreira das Sombras", id: 'tt21382464' },
                { ep: 6, title: "Parte Seis: Muito, Muito Longe", id: 'tt21382466' },
                { ep: 7, title: "Parte Sete: Sonhos e Loucura", id: 'tt21382468' },
                { ep: 8, title: "Parte Oito: A Jedi, a Bruxa e o Senhor da Guerra", id: 'tt21382472' }
            ]
        }
    }
};

// Como a estrutura já tem os títulos, não precisamos do loop extra aqui.
// Apenas garantimos que o número do episódio (ep) está correto.
for (const season in window.seriesData.database) {
    window.seriesData.database[season].episodes.forEach((ep_data, index) => {
        ep_data.ep = index + 1;
    });
}
