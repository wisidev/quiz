const classificacaoDosBancosDeDadosNaoRelacionais = [
  {
    pergunta:
      "Existem aplicações cujos dados estão extremamente interligados, com diversos tipos diferentes de entidades se relacionando. As consultas que precisam ser realizadas sobre esses dados envolvem a verificação de ligações em vários níveis entre as entidades. Nesses casos, qual é o tipo de banco de dados mais adequado?",
    opcoes: [
      "Relacional.",
      "De documentos.",
      "De grafos.",
      "Colunar.",
      "De chave/valor.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Bancos de dados colunares armazenam os registros em disco de forma sequencial para cada coluna, ao contrário do que bancos de dados relacionais fazem. Qual é a principal vantagem de se armazenar os dados dessa forma?",
    opcoes: [
      "Reduzir o consumo de espaço em disco.",
      "Permitir carregar em memória apenas colunas específicas.",
      "Deixar mais rápidas consultas de agregação por colunas específicas.",
      "Permitir uma maior compactação dos dados.",
      "Deixar mais rápidas consultas que escaneiam todas as colunas.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Bancos de dados relacionais implementam o protocolo Two phase commit (Commit de duas fases) para garantir a consistência das transações. Por qual motivo bancos de dados NoSQL, geralmente, evitam utilizar esse protocolo?",
    opcoes: [
      "Porque o protocolo é bloqueante e não escala.",
      "Porque o protocolo só consegue garantir consistência eventual.",
      "Porque ele não consegue garantir a durabilidade das transações.",
      "Porque o protocolo não suporta réplicas de leitura.",
      "Porque o protocolo não suporta sharding de dados.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "As propriedades BASE são uma alternativa ao ACID utilizadas por bancos de dados NoSQL que buscam flexibilizar a consistência em favor da disponibilidade. Com relação às propriedades BASE, qual é a afirmativa correta?",
    opcoes: [
      "O BASE garante consistência forte.",
      "O BASE dá foco na disponibilidade das aplicações.",
      "O BASE corresponde aos sistemas CA pelo Teorema de CAP.",
      "Com o BASE, réplicas precisam estar consistentes o tempo todo.",
      "O BASE tem consistência mais forte do que sistemas CA do Teorema de CAP.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Bancos de dados colunares são muito usados atualmente, com vários cases de grandes empresas que os utilizam para grandes volumes de dados. Dos casos a seguir, qual pode ser resolvido melhor com o uso de um banco de dados colunar?",
    opcoes: [
      "Cache de dados de uma aplicação Web.",
      "Armazenamento de dados de pessoas e amizades de uma rede social.",
      "Armazenamento de dados de conteúdos de um blog.",
      "Aplicação com grande volume de logs de dispositivos gerados em tempo real.",
      "Armazenamento de cesta de compras em um e-commerce.",
    ],
    correta: 3,
  },
];
