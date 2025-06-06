const bancosDeDadosDeChaveValor = [
  {
    pergunta:
      "Com o crescimento das informações trafegadas pela Internet, os usuários estão ficando cada vez mais ansiosos em buscá-las. Você é contratado para desenvolver um site de comércio eletrônico e, para isso, pensou em utilizar um banco de dados não relacionais de chave-valor. Qual a principal vantagem desse tipo de banco de dados?",
    opcoes: [
      "Rapidez de acesso.",
      "Integridade dos dados.",
      "As informações devem ter uma estrutura predefinida.",
      "Pode-se acessar informações de diferentes tabelas.",
      "Fazer o uso de constraints.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Existem diferentes formas de armazenar os dados em bancos NoSQL, como os bancos de chave-valor, documentos, famílias de colunas, dentre outros. A empresa na qual você trabalha, que desenvolve sistemas Web para alguns clientes, solicitou um estudo sobre bancos de dados não relacionais de chave-valor. Em relação ao armazenamento do tipo chave-valor, é correto afirmar que:",
    opcoes: [
      "deve-se ter uma chave não única e podem ser armazenados valores de diferentes tipos.",
      "deve-se ter uma chave única e podem ser armazenados valores de diferentes tipos.",
      "deve-se ter uma chave única e são armazenados valores de um único tipo.",
      "deve-se ter uma chave não única e são armazenados valores de um único tipo.",
      "não há necessidade de uma chave e são armazenados valores de diferentes tipos.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Existem algumas características para se fazer uma determinada busca em um banco de dados NoSQL de chave-valor. Para o desenvolvimento do e-commerce de uma rede varejista, você precisa realizar uma consulta na base de dados a fim de apresentar as informações de um produto no site, como descrição do produto, imagens e dados técnicos, por exemplo. Essa consulta pode ser feita:",
    opcoes: [
      "utilizando operações de conjunto como union e union all.",
      "utilizando os dados armazenados como restrição para consulta.",
      "a partir da utilização de restrição por meio da chave única.",
      "utilizando várias tabelas para acessar as informações.",
      "utilizando APIs para consultar, restringindo pelos dados armazenados.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Uma das características de bancos de dados NoSQL de chave-valor é a garantia na entrega das informações. Existem vários bancos de dados com esse tipo de armazenamento, como o DynamoDb, Redis, Riak, dentre outros. O DynamoDb e o Redis têm a propriedade de tolerância à partição, que faz parte do teorema CAP, em que, além dessa propriedade, há a consistência e a disponibilidade. Esse teorema indica que somente duas das três propriedades podem ser garantidas simultaneamente. Em relação à propriedade de tolerância à partição, está correto afirmar:",
    opcoes: [
      "Os dados estão disponíveis em mais de uma instância.",
      "O sistema executa o processo de grande consumo pelo nó mais disponível.",
      "O sistema opera executando múltiplas tarefas em um tempo predefinido.",
      "O sistema continuará operando mesmo se parte do sistema falhar.",
      "Todos os nós veem ao mesmo tempo os mesmos dados.",
    ],
    correta: 3,
  },
  {
    pergunta:
      "O escalonamento é utilizado para garantir uma melhora na performance da utilização do banco de dados. A sua empresa fez o desenvolvimento de um jogo on-line, porém, com o passar do tempo, o número de usuários começou a aumentar e o armazenamento de dados também. Com sua experiência, você pensou em alterar o banco de dados para o modelo chave-valor, visando à utilização do escalonamento para aumentar a eficiência do processamento de informações. No caso de um banco de dados não relacionais de chave-valor, o tipo de escalonamento utilizado é:",
    opcoes: [
      "escalonamento de curto prazo.",
      "escalonamento de médio prazo.",
      "escalonamento de longo prazo.",
      "escalonamento vertical.",
      "escalonamento horizontal.",
    ],
    correta: 4,
  },
];
