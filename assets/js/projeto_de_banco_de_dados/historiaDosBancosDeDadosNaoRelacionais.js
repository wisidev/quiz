const historiaDosBancosDeDadosNaoRelacionais = [
  {
    pergunta:
      "Bancos de dados NoSQL, apesar de sua recente popularidade, são bancos de dados de uso específico, não sendo adequados para qualquer tipo de caso de uso. Assinale a alternativa que melhor justifica a utilização de bancos de dados NoSQL:",
    opcoes: [
      "Quando existe a necessidade de fornecer confidencialidade, integridade e disponibilidade para os dados armazenados.",
      "Quando os dados armazenados são previsíveis, ou seja, seu formato é conhecido.",
      "Quando grandes quantidades de dados precisam ser armazenadas e consultadas de forma eficiente.",
      "Quando os dados armazenados não precisam ser recuperados de forma rápida.",
      "Quando as consultas de dados que serão realizadas não são conhecidas.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Dentro do mundo NoSQL, bancos de dados de chave/valor têm o esquema de dados mais simples de todos. Talvez por isso tenham sido os primeiros a surgir, muito antes do próprio termo NoSQL. Entretanto, nem todos os bancos de dados de chave/valor são distribuídos, ou seja, executam em um cluster de máquinas. Qual foi o primeiro banco de dados de chave/valor comercial a dar suporte a clusters (após os anos 2000)?",
    opcoes: [
      "MemcachedDB, uma versão modificada do Memcached com persistência.",
      "Riak, banco de dados de chave/valor distribuído criado pela Basho.",
      "Dynamo, banco de dados distribuído da Amazon.",
      "Redis, banco de dados de chave/valor em memória e disco.",
      "Hazelcast, grid distribuído em memória com armazenamento em chave/valor.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Bancos de dados NoSQL foram construídos para comportar grandes volumes de dados, além de serem mais simples de operar e escalar. Com relação à escalabilidade horizontal em bancos de dados NoSQL, é correto afirmar que:",
    opcoes: [
      "Irá reduzir a quantidade de trabalho executado pelo banco de dados em cada requisição.",
      "A única forma de um banco de dados escalar horizontalmente é pela replicação de dados por mais de um servidor.",
      "Adicionará mais recursos ao servidor do banco de dados, permitindo que ele comporte mais requisições.",
      "A escalabilidade horizontal pode ser alcançada pela replicação e sharding de dados.",
      "O banco de dados conseguirá atender mais requisições de leitura de forma paralela.",
    ],
    correta: 3,
  },
  {
    pergunta:
      "O Teorema de CAP traduz as limitações existentes em sistemas distribuídos, listando as três características principais desejadas em um sistema distribuído e afirmando que apenas duas dessas três características podem ser escolhidas para um sistema distribuído. Com relação às combinações possíveis no Teorema de CAP, é correto afirmar que:",
    opcoes: [
      "Sistemas AP estão sempre disponíveis, são tolerantes a falhas de partições e garantem consistência dos dados caso haja falha de rede.",
      "Sistemas CP são consistentes, tolerantes a falhas de partições e podem ficar indisponíveis em caso de falha de rede.",
      "Sistemas CA estão sempre disponíveis, mesmo em caso de falha de rede, mas não são consistentes.",
      "Sistemas CP são eventualmente consistentes e tolerantes a falha de partições, além de estarem sempre disponíveis.",
      "Sistemas CA estão sempre disponíveis e consistentes, mas não suportam falhas de rede.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Bancos de dados NoSQL são o resultado de anos de evolução tecnológica e de tentativas de vencer as limitações existentes nos bancos de dados relacionais, aliadas ao constante crescimento nos volumes de dados que precisavam ser armazenados e analisados. Sobre as tecnologias que serviram de base para bancos de dados NoSQL, qual delas é a mais significativa, por ter marcado o início não somente do que hoje conhecemos como NoSQL, mas também das tecnologias de big data?",
    opcoes: [
      "A definição do termo ACID, feita por Andreas Reuter e Theo Härder em 1983, que é o acrônimo para atomicidade, consistência, isolamento e durabilidade, que são as principais garantias em transações de bancos de dados.",
      "O Bigtable criado pelo Google, além de um novo paradigma de programação paralela chamado MapReduce e o sistema de armazenamento de dados distribuídos Dynamo criado pela Amazon, que hoje faz parte do Amazon S3.",
      "O Lotus Notes, um sistema de trabalho colaborativo e de e-mail cujo armazenamento interno de dados contava com um dos precursores dos bancos de dados de documentos.",
      "A teoria de grafos, ramo da matemática que estuda as relações entre objetos  de um conjunto e que serviu como alicerce para a construção de bancos de dados orientados a grafos, como o Neo4j.",
      "O Teorema de CAP, que define que é impossível que um sistema distribuído de armazenamento de dados tenha mais de duas das três garantias: consistência, disponibilidade e partição tolerante a falhas.",
    ],
    correta: 1,
  },
];
