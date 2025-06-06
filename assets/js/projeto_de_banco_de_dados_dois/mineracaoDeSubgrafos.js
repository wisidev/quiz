const mineracaoDeSubgrafos = [
  {
    pergunta:
      "Um grafo pode ser dividido em diversos subgrafos, que podem servir a diferentes propósitos de mineração. Dado o grafo G ilustrado na figura a seguir, bem como seus três candidatos a subgrafos:\n\n",
    imagem: "./assets/img/bd2-1-1.png",
    complemento:
      "​​​​​​\nQual ou quais representa(m) subgrafos possíveis para G?",
    opcoes: [
      "Somente 1.",
      "Somente 2.",
      "Somente 2 e 3.",
      "Somente 1 e 2.",
      "1, 2, 3.",
    ],
    correta: 3,
  },
  {
    pergunta:
      "Existem diferentes classificações para os subgrafos, que variam de acordo com sua composição. Dado o grafo H0, e seus candidatos a subgrafos H1 e H2, qual a alternativa correta?\n\n",
    imagem: "./assets/img/bd2-1-2.png",
    opcoes: [
      "H1 e H2 são vértice-disjuntos.",
      "H1 não é subgrafo de H0.",
      "H1 e H2 são aresta-disjuntos.",
      "H1 e H2 são vértice-disjuntos e aresta-disjuntos.",
      "H2 não é subgrafo de G.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Para a mineração de dados em subgrafos, pode-se reaproveitar algumas técnicas utilizadas para minerar dados em grafos, embora existam também algumas técnicas mais específicas.\n\nDas técnicas listadas a seguir, qual representa um tipo específico de mineração de subgrafos?",
    opcoes: [
      "Descoberta dos subgrafos menos frequentes.",
      "Sumarização.",
      "Clusterização.",
      "Classificação.",
      "Descoberta de densidade.",
    ],
    correta: 4,
  },
  {
    pergunta:
      "Algumas otimizações podem ser feitas para melhorar o desempenho de mineração de subgrafos com base na localização de correspondência de subgrafos.\n\nQual das opções a seguir se refere à manutenção dos dados intermediários de modo a reduzir a alocação de disco?​​​​​​​",
    opcoes: [
      "Compressão.",
      "Aproximação limitada.",
      "Processamento em lotes.",
      "Indexação triangular.",
      "Enumeração.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Uma empresa que trabalha com dados armazenados em formato de grafos quer fazer uma análise para entender quais são os tipos de subgrafos que poderiam ser extraídos da sua base de dados.\n\nQual técnica poderia ser utilizada para esse tipo de mineração?​​​​​​​",
    opcoes: [
      "Correspondência.",
      "Listagem.",
      "Enumeração.",
      "Descoberta de densidade.",
      "Compressão.",
    ],
    correta: 1,
  },
];
