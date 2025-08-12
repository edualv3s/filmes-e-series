// data/the100.js

// AQUI ESTÁ A CORREÇÃO: TROCANDO 'const' POR 'var'
var seriesData = {
    title: "The 100", 
    database: {
        1: { episodes: Array.from({length: 13}, () => ({ server: 'RCServer09' })) },
        2: { episodes: Array.from({length: 16}, () => ({ server: 'RCServer09' })) },
        3: { episodes: Array.from({length: 16}, () => ({ server: 'RCServer10' })) },
        4: { 
            episodes: [
                ...Array.from({length: 10}, () => ({ server: 'RCServer11' })),
                ...Array.from({length: 3}, () => ({ server: 'RCServer12' }))
            ] 
        },
        5: { episodes: Array.from({length: 13}, () => ({ server: 'RCServer13' })) },
        6: { episodes: Array.from({length: 13}, () => ({ server: 'RCServer06' })) },
        7: { 
            episodes: [
                ...Array.from({length: 8}, () => ({ server: 'RCServer14' })),
                ...Array.from({length: 6}, () => ({ server: 'RCServer12' })),
                ...Array.from({length: 2}, () => ({ server: 'RCServer04' }))
            ]
        }
    }
};

const titles = {
    1: ["Piloto", "Habilidades de Terra", "Mata de Terra", "A Lei de Murphy", "Último Brilho do Crepúsculo", "Guardião de Sua Irmã", "Conteúdo Sob Pressão", "Dia de Viagem", "Dia da Unidade", "Eu Me Tornei Morte", "A Calma", "Nós Somos Rasteiras (Parte 1)", "Nós Somos Rasteiras (Parte 2)"],
    2: ["O 48", "Tempo Inclemente", "Repercussão", "Festas Pelo Aniversário", "Testes em Humanos", "Névoa da Guerra", "Longo em um Abismo", "Spacewalker", "Lembra de Mim", "Sobrevivência do Mais Apto", "Golpe de Misericórdia", "Rubicão", "Ressurreição", "Guarda-costas de Mentiras", "Sangue Deve Ter Sangue (Parte 1)", "Sangue Deve Ter Sangue (Parte 2)"],
    3: ["Wanheda (Parte 1)", "Wanheda (Parte 2)", "Aquele Que Aqui Entraram", "Cuidem Bem Os Tronos", "Hakeldama", "Colheita Amarga", "Treze", "Termos e Condições", "Roubando o Fogo", "Caído", "Nunca Mais", "Demônios", "Junte-se A Nós ou Morra", "Céu Vermelho de Manhã", "Instanciação Perversa (Parte 1)", "Instanciação Perversa (Parte 2)"],
    4: ["Ecos", "Pesado Mente a Coroa", "O Quatro Cavaleiro", "Uma Mentira Guardada", "A Caixa de Material Inflamável", "Nós Ressurgremos", "Me Dê Abrigo", "O Complexo de Deus", "DNR", "Morram Todos, Morram Felizes", "O Outro Lado", "O Escolhido", "Praimfaya"],
    5: ["Éden", "A Rainha Vermelha", "Gigantes Adormecidos", "A Caixa de Pandora", "Areias Movediças", "Feridas de Saída", "Perdas Aceitáveis", "Como Chegamos à Paz", "Sic Semper Tyrannis", "A Vontade dos Guerreiros", "O Ano Sombrio", "Dâmocles (Parte 1)", "Dâmocles (Parte 2)"],
    6: ["Santuário", "Nascer do Sol Vermelho", "Os Filhos de Gabriel", "O Rosto Atrás do Vidro", "O Evangelho de Josefina", "Memento Mori", "Deixa Pra Lá", "O Velho e a Anomalia", "O Que Você Leva Com Você", "Matryoshka", "Cinzas às Cinzas", "Protocolo de Ajuste", "O Sangue do Santuário"],
    7: ["Vindo das Cinzas", "O Jardim", "Falsos Deuses", "Hesperides", "Bem-vindo Ao Bardo", "Nakara", "O Gambito da Rainha", "Anaconda", "O Rebanho", "Um Pequeno Sacrifício", "Etherea", "O Estranho", "Gigante de Sangue", "Uma Espécie De Regresso A Casa", "A Morte De Laiz", "A Última Guerra"]
};

for (const season in seriesData.database) {
    seriesData.database[season].episodes.forEach((ep_data, index) => {
        ep_data.ep = index + 1;
        ep_data.title = titles[season]?.[index] || `Episódio ${index + 1}`;
    });
}
