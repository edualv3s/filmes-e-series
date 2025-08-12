// data/fantasticfour.js
window.seriesData = {
    title: "Quarteto Fantástico",
    // Esta é a nossa nova "fórmula mágica" para a URL
    url_template: "https://embedder.net/e/movie?tmdb=##ID##",
    database: {
        1: { // O filme será a "Temporada 1"
            episodes: [
                // E terá apenas o "Episódio 1" com o ID correto do filme
                { ep: 1, title: "Filme Completo (2005)", id: '9738' }
            ]
        }
    }
};

// Apenas para garantir que a estrutura esteja completa
for (const season in window.seriesData.database) {
    window.seriesData.database[season].episodes.forEach((ep_data, index) => {
        ep_data.ep = index + 1;
    });
}
