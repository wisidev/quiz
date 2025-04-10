const perguntas = [
  {
    pergunta:
      "Um projeto de banco de dados é subdividido em etapas em que o objetivo é a criação de um banco de dados otimizado que atenda às expectativas do cliente. Nesse contexto, os modelos de dados são muito importantes para a transmissão de ideias entre o cliente e o projetista, assim como para facilitar a manutenção do banco de dados no futuro. A primeira etapa é chamada de Análise de Requisitos. Aponte qual das opções a seguir melhor define essa etapa.",
    opcoes: [
      "A primeira etapa do projeto de banco de dados é o esquema conceitual, que nada mais é do que uma visão macro do banco de dados, uma descrição de alto nível da estrutura. Os modelos de entidade-relacionamento (ER) são muito utilizados para descrever os esquemas conceituais.",
      "A primeira etapa do projeto de banco de dados é a identificação dos requisitos que este deve atender. Nessa fase, realizam-se entrevistas com as pessoas envolvidas no processo e cria-se uma descrição textual macro do processo. Este é o momento em que as regras de negócio devem ser identificadas.",
      "A primeira etapa do projeto de banco de dados é a modelagem de dados, onde são definidas questões técnicas, como o tipo de SGBD e a estrutura de hardware a ser utilizada no projeto.",
      "A primeira etapa é a que mapeia o conceito dos modelos de entidade-relacionamento em objetivos de bancos de dados. Nesta fase, criamos os modelos internos de bancos de dados, com detalhes sobre tabelas, relacionamentos, regras, metadados das colunas (tipo, tamanho, obrigatoriedade, entre outros), visões, etc.",
      "A primeira etapa é a que se definem detalhes técnicos da implementação do banco de dados como, por exemplo a forma como os dados serão armazenados, os scripts para a criação dos objetos no banco de dados (tabelas, visões, colunas, funções, entre outros), permissão de acesso de usuário, etc.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "O projeto de banco de dados é, basicamente, dividido em projeto conceitual, projeto lógico e projeto físico – além de uma etapa anterior, normalmente chamada de análise de requisitos. A partir dessa estrutura, aponte qual das opções a seguir melhor define a etapa Projeto Conceitual.",
    opcoes: [
      "O Projeto Conceitual trata das entrevistas com as pessoas envolvidas no processo. Cria-se uma descrição textual macro do processo e modelos externos (que devem ser entendidos por todos). Este é o momento em que as regras de negócio devem ser identificadas.",
      "O Projeto Conceitual é a etapa em que mapeamos o conceito dos modelos de entidade-relacionamento em objetivos de bancos de dados. Nesta fase, criamos os modelos internos de bancos de dados, com detalhes sobre tabelas, relacionamentos, regras, metadados das colunas (tipo, tamanho, obrigatoriedade, entre outros), visões, etc.",
      "O Projeto Conceitual baseia-se na especificação de requisitos criada na etapa anterior. A partir deste insumo de informações, é gerado um esquema conceitual do banco de dados. Esquema conceitual é uma visão macro do banco de dados, uma descrição de alto nível da estrutura.",
      "O Projeto Conceitual é a parte final do projeto de banco de dados. Nesta etapa, definem-se detalhes técnicos da implementação do banco de dados e são realizadas entrevistas com os usuários. Além disso, se define qual SGBD será utilizado.",
      "O Projeto Conceitual é a parte final do projeto de banco de dados. Nesta etapa, definem-se detalhes técnicos da implementação do banco de dados como, por exemplo, a forma como os dados serão armazenados, os scripts para a criação dos objetos no banco de dados, a permissão de acesso de usuário, etc.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "__________ é a etapa em que mapeamos o conceito dos modelos de entidade-relacionamento em objetivos de bancos de dados. Nesta fase, criamos os modelos internos de bancos de dados, com detalhes sobre tabelas, relacionamentos, regras, metadados das colunas (tipo, tamanho, obrigatoriedade, entre outros), visões, etc. Ao final, o resultado é um esquema do banco de dados próximo ao modelo conceitual. Qual das opções a seguir melhor define esta etapa?",
    opcoes: [
      "Projeto Lógico.",
      "Projeto Físico.",
      "Projeto Conceitual.",
      "Análise de Requisitos.",
      "Análise de necessidades dos usuários.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "No ano de 2013, surgiu o termo Big Data, que rapidamente se popularizou e trouxe novidades ao mundo da tecnologia da informação. O Big Data representa uma infinidade de informações não estruturadas que, quando usadas com inteligência, tornam-se uma arma poderosa para empresas analisarem cenários e tomarem decisões com probabilidade de sucesso cada vez maior. A partir dessas informações, aponte a seguir a opção que NÃO representa o conceito de Big Data.",
    opcoes: [
      "Facebook.",
      "Twitter.",
      "Instagram.",
      "YouTube.",
      "Sistema de Gerenciamento do Relacionamento com Clientes (CRM) de uma determinada empresa.",
    ],
    correta: 4,
  },
  {
    pergunta:
      "Uma determinada etapa de um projeto de banco de dados representa a parte final do projeto. Nesta etapa, definem-se detalhes técnicos da implementação do banco de dados como, por exemplo, a forma de os dados serem armazenados, os scripts para a criação dos objetos no banco de dados (tabelas, visões, colunas, funções, entre outros), a permissão de acesso de usuário, etc. Esta etapa é fortemente ligada ao Sistema Gerenciador de Banco de Dados (SGBD) que será utilizado. Qual das opções a seguir define corretamente o nome desta etapa?",
    opcoes: [
      "Análise de Requisitos.",
      "Projeto Conceitual",
      "Projeto Lógico.",
      "Projeto Físico.",
      "Análise de ER.",
    ],
    correta: 3,
  },
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
  {
    pergunta:
      "Com relação a bancos de dados NoSQL, marque a afirmativa correta.",
    opcoes: [
      "Veio para substituir os bancos de dados relacionais.",
      "Os banco de dados NoSQL têm como característica a organização dos dados em tabelas.",
      "O Modelo NoSQL é um tipo de gerenciador de banco de dados que conecta os registros em forma de árvore e cada tipo de registro tem apenas uma raiz.",
      "NoSQL (não somente SQL), refere-se à solução de banco de dados que possibilita o armazenamento de uma grande variedade de dados existentes, não se limitando apenas a modelos relacionais.",
      "As empresas que optam pelo uso de NoSQL devem eliminar o trabalho com outros modelos de bancos de dados.",
    ],
    correta: 3,
  },
  {
    pergunta: "Marque a alternativa correta referente a bancos de dados NoSQL.",
    opcoes: [
      "O modelo NoSQL normaliza dados em estruturas tabulares.",
      "Sistemas de gerenciamento de bancos de dados NoSQL são compatíveis com um conjunto de propriedades definido pela sigla ACID.",
      "Bancos de dados não relacionais (NoSQL) normalmente não aplicam um schema.",
      "Bancos de dados NoSQL são mais fáceis de aumentar a escala 'verticalmente' com hardware mais rápido.",
      "Em bancos de dados NoSQL as solicitações para armazenar e recuperar dados são comunicadas usando consultas compatíveis com structured query language (SQL).",
    ],
    correta: 2,
  },
  {
    pergunta:
      "De acordo com as características dos bancos de dados NoSQL, pode-se afirmar que:",
    opcoes: [
      "A característica ausência de esquema (Schema-free) ou esquema flexível é outra forma de prover a escalabilidade em bancos de dados NoSQL.",
      "Ausência de esquema garante a integridade dos dados.",
      "Na consistência eventual, o foco não está no armazenamento dos dados e sim como recuperar estes dados de forma eficiente.",
      "Map/reduce suporta mecanismos de armazenamento e recuperação, onde a quantidade de sites está em constante mudança.",
      "Vector clocks cria um vetor para o armazenamento de dados.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Referente aos tipos de bancos de dados NoSQL. Marque a afirmativa correta.",
    opcoes: [
      "Bancos de dados colunares são projetados para armazenar dados como documentos.",
      "Chave/Valor são projetados para armazenar dados como documentos.",
      "Banco de dados orientado a documentos armazenam vértices e links direcionados chamados de bordas.",
      "O banco de dados orientado a documentos armazena pedaços críticos de dados na memória para acesso de baixa latência.",
      "Bancos de dados orientado a grafos podem ser construídos em ambos os modelos de bancos de dados, relacionais e NoSQL.",
    ],
    correta: 4,
  },
  {
    pergunta:
      "Existem muitos bancos de dados para se trabalhar com NoSQL, cada banco está associado a um determinado tipo do NoSQL. Marque a alternativa em que todos os bancos de dados estão associados ao seu respectivo tipo.",
    opcoes: [
      "Baseado em chave-valor: MongoDB, CouchDB, BigCouch, RavenDB.",
      "Baseado em grafos: Cassandra e Hypertable.",
      "Baseado em chave-valor: Neo4J e Infinite Graph.",
      "Baseado em documentos: Dynamo, Azure Table Storage e Couchbase Server.",
      "Baseado em coluna: Amazon SimpleDB, Cloudata, Cloudera, SciDB, HPCC e Stratosphere.",
    ],
    correta: 4,
  },
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
      "A teoria de grafos, ramo da matemática que estuda as relações entre objetos de um conjunto e que serviu como alicerce para a construção de bancos de dados orientados a grafos, como o Neo4j.",
      "O Teorema de CAP, que define que é impossível que um sistema distribuído de armazenamento de dados tenha mais de duas das três garantias: consistência, disponibilidade e partição tolerante a falhas.",
    ],
    correta: 1,
  },
];

let perguntasEmbaralhadas = [];
let indiceAtual = 0;

function embaralharPerguntas() {
  // Faz uma cópia do array original antes de embaralhar
  perguntasEmbaralhadas = [...perguntas];
  for (let i = perguntasEmbaralhadas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [perguntasEmbaralhadas[i], perguntasEmbaralhadas[j]] = [
      perguntasEmbaralhadas[j],
      perguntasEmbaralhadas[i],
    ];
  }
}

function mostrarPergunta() {
  const atual = perguntasEmbaralhadas[indiceAtual];
  document.getElementById("pergunta").textContent = atual.pergunta;
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  atual.opcoes.forEach((opcao, index) => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(index, btn);
    opcoesDiv.appendChild(btn);
  });
}

function verificarResposta(indice, botaoClicado) {
  const correta = perguntasEmbaralhadas[indiceAtual].correta;
  const botoes = document.querySelectorAll("#opcoes button");

  botoes.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correta) btn.classList.add("correta");
    else if (btn === botaoClicado) btn.classList.add("errada");
  });
}

function proximaPergunta() {
  if (indiceAtual < perguntasEmbaralhadas.length - 1) {
    indiceAtual++;
    mostrarPergunta();
  } else {
    document.getElementById("quiz-container").innerHTML = `
      <h2>Fim do quiz!</h2>
      <button onclick="reiniciarQuiz()">Reiniciar Quiz</button>
    `;
  }
}

function reiniciarQuiz() {
  indiceAtual = 0;
  embaralharPerguntas();
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <div id="pergunta"></div>
    <div id="opcoes"></div>
    <button id="proxima" onclick="proximaPergunta()">Próxima</button>
  `;
  mostrarPergunta();
}

// Inicializa ao carregar a página
embaralharPerguntas();
mostrarPergunta();
