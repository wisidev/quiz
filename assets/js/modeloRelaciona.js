const modeloRelaciona = [
  {
    pergunta:
      "Quando utilizamos a linguagem SQL (padrão da indústria para banco de dados), existem vários tipos de dados que podemos utilizar na maioria dos SGBDs relacionais. Como os exemplos abaixo:\n\n- CHAR: para entradas de texto com comprimento fixo, como por exemplo, siglas de estados, CEP e números de CPF.\n- DATE/TIME: para entradas contendo valor de data e hora.\n\nSeguindo esta relação de tipos de dados, escolha a opção a seguir que melhor descreve o tipo de dado FLOAT.",
    opcoes: [
      "Float - para entradas que irão receber dados com dois valores, como sim e não ou verdadeiro e falso.",
      "Float - para entradas que irão receber dados numéricos com precisão flutuante, como cálculo de taxas de juros e cálculos científicos.",
      "Float - para entradas que irão receber dados numéricos com precisão fixa, por exemplo valores monetários.",
      "Float - para entradas que irão receber dados de texto com comprimento fixo, como por exemplo, Fone e CPF.",
      "Float - para entradas que irão receber dados de texto com comprimento variável, por exemplo nomes e endereços.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Quando estamos analisando e projetando um banco de dados, temos de definir que tipo de dado será utilizado para cada campo de uma determinada tabela. No exemplo abaixo, temos os campos da Tabela ALUNO. Aponte qual das opções a seguir melhor descreve os tipos corretos de dados para os referidos campos da tabela:\n\n1- Nome do aluno\n2- CPF do aluno\n3- Endereço do aluno\n4- Estado (UF)\n5- Data Nascimento",
    opcoes: [
      "Tipos:\n1-VARCHAR\n2-CHAR\n3-VARCHAR\n4-CHAR\n5-DATE",
      "Tipos:\n1-VARCHAR\n2-FLOAT\n3-VARCHAR\n4-CHAR\n5-DATE",
      "Tipos:\n1-VARCHAR\n2-CHAR\n3-VARCHAR\n4-CHAR\n5-BOOLEAN",
      "Tipos:\n1-VARCHAR\n2-DECIMAL\n3-VARCHAR\n4-CHAR\n5-DATE",
      "Tipos:\n1-VARCHAR\n2-CHAR\n3-INTEGER\n4-CHAR\n5-DATE",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Em uma tarefa de análise, você tem de analisar uma determinada tabela de um banco de dados. Neste caso, a tabela Alunos é composta por cinco campos, sendo:\n1- id_aluno\n2- nome\n3- login\n4- idade\n5- média.\n\nAgora você precisa apontar qual das opções abaixo melhor descreve os tipos de dados corretos para cada um dos campos da tabela Alunos.",
    imagem: "img/mr3.png",
    opcoes: [
      "1-STRING\n2-VARCHAR\n3-VARCHAR\n4-INTEGER\n5-BOOLEAN",
      "1-FLOAT\n2-VARCHAR\n3-VARCHAR\n4-INTEGER\n5-REAL",
      "1-VARCHAR\n2-VARCHAR\n3-VARCHAR\n4-INTEGER\n5-REAL",
      "1-INTEGER\n2-VARCHAR\n3-VARCHAR\n4-INTEGER\n5-FLOAT",
      "1-STRING\n2-VARCHAR\n3-VARCHAR\n4-INTEGER\n5-VARCHAR",
    ],
    correta: 3,
  },
  {
    pergunta:
      "Modelo Relacional retrata os dados como sendo armazenados em tabelas, similares ao formato no qual a informação é demonstrada por programas em planilhas, e seu elemento principal são as relações entre essas tabelas. Neste contexto, existem mecanismos que permitem ao modelo relacional reconhecer relações semânticas ou de utilização, como:",
    opcoes: [
      "A restrição de chave primária (primary key), também designada de entidade referencial, utiliza-se para, mediante o mecanismo de chaves primárias, ligar relações de bases de dados.",
      "A chave estrangeira é usada para declarar um atributo ou um conjunto de atributos como chave primária de uma relação, identificando cada tupla da relação",
      "A restrição de unicidade (unique) permite definir chaves alternativas fazendo com que valores de vários atributos possam se repetir em diferentes tuplos de uma relação.",
      "A integridade referencial indica que os valores de uma chave estrangeira de uma relação filha não necessita responder aos valores da chave primária da relação pai, mas necessita ter o mesmo nome que os atributos de uma chave primária a qual estes se relacionam.",
      "A restrição de obrigatoriedade (não nulo ou not null) permite declarar se um ou vários atributos de uma relação devem tomar um valor, isto é, não podem tomar valores nulos.",
    ],
    correta: 4,
  },
  {
    pergunta:
      "Quando utilizamos a linguagem SQL (padrão da indústria para banco de dados) existem vários tipos de dado que podemos utilizar na maioria dos SGBDs relacionais. Como os exemplos abaixo:\n- CHAR: para entradas de texto com comprimento fixo, como por exemplo, siglas de estados, CEP e números de CPF.\n- DATE/TIME: para entradas contendo valor de data e hora.\n\nSeguindo esta relação de tipos de dados, escolha a opção a seguir que melhor descreve o tipo de dado INTEGER.",
    opcoes: [
      "Integer - para entradas que irão receber dados numéricos com precisão flutuante, como cálculo de taxas de juros e cálculos científicos.",
      "Integer - para entradas que irão receber dados com dois valores, como sim e não ou verdadeiro e falso.",
      "Integer - para entradas que irão receber dados com números inteiros, ou seja, sem vírgula.",
      "Integer - para entradas que irão receber dados de texto com comprimento fixo, como por exemplo, Fone e CPF.",
      "Integer - para entradas que irão receber dados numéricos com precisão fixa, por exemplo valores monetários.",
    ],
    correta: 2,
  },
];
