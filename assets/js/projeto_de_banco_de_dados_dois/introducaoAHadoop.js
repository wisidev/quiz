const introducaoAHadoop = [
  {
    pergunta:
      "O paradigma de programação MapReduce demonstrou ser adequado para trabalhar com problemas que podem ser particionados ou fragmentados em subproblemas. Isso porque se pode aplicar separadamente as funções map e reduce a um conjunto de dados.\n\nSobre essas funções, analise as afirmativas a seguir e assinale a correta:",
    opcoes: [
      "A entrada da função Map é sempre um dado único, ao qual se aplica um conjunto de funções, mapeando-o para uma lista.",
      "A função map é executada no nó mestre, gerenciada pelo JobTracker, que envia a lista resultante do mapeamento para os nós escravos.",
      "A função reduce recebe uma lista como entrada e realiza um processo de ajuste de dados, gerando uma lista modificada na saída.",
      "A função reduce é executada no nó mestre para reduzir o volume dos dados que serão tratados pelos nós escravos.",
      "As funções map e reduce são normalmente utilizadas juntas, especificando que a saída da função map será a entrada da função reduce.",
    ],
    correta: 4,
  },
  {
    pergunta:
      "O Apache Hadoop é um framework que simplifica o trabalho com sistemas distribuídos, tornando transparentes diversas funções. Assinale a alternativa que apresenta uma característica do Hadoop:",
    opcoes: [
      "O Hadoop possui licenciamento proprietário, o que torna modificações e a redistribuição do programa-fonte mais difíceis.",
      "O Hadoop possui regras rígidas que restringem a escalabilidade da aplicação e limita o aumento da quantidade de máquinas a serem utilizadas no processamento.",
      "O Hadoop oferece estratégias automáticas para garantir o processamento em caso de falhas em computadores alocados para o processamento, garantindo continuidade.",
      "No Hadoop, as operações são complexas e ele exige especialistas focados na paralelização e na distribuição dos algoritmos e dados, respectivamente.",
      "O Hadoop possui código proprietário, que facilita a realização de adaptações.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Para realizar sua função, o Hadoop possui um conjunto de componentes e cada um possui responsabilidades bem definidas. Analise as afirmativas a seguir e selecione aquela que apresenta corretamente um dos componentes do Hadoop.",
    opcoes: [
      "O NameNode localiza-se nos nós e é responsável pelo gerenciamento de arquivos utilizados pelo HDFS.",
      "O DataNodelocaliza-se no nó mestre, identificando os dados que são distribuídos e replicados.",
      "O JobTrackeré o responsável pelo trabalho de execução das tarefas do MapReduce, que são realizadas nos nós.",
      "O TaskTrackerpossui a tarefa de controlar o plano de execução do MapReduce, designando os nós que serão utilizados.",
      "O SecondaryNameNodeé responsável pela verificação dos checkpoints necessários para garantir a recuperação em caso de falha.",
    ],
    correta: 4,
  },
  {
    pergunta:
      "O Hadoop possui alguns modos de execução e cada um deles possui configurações e formas de execução específicas. Analise as alternativas a seguir e selecione aquela que descreve corretamente um dos modos de execução do Hadoop:",
    opcoes: [
      "No fully distributed mode, o Hadoop determina automaticamente as máquinas que serão utilizadas no processamento.",
      "No pseudo-distributed mode, o Hadoop simula o processamento paralelo em uma única máquina.",
      "No standalone mode, o Hadoop realiza o seu trabalho padrão, processamento paralelo e distribuído com o conjunto de máquinas definidas nos arquivos de configuração.",
      "No blank mode, o Hadoop utiliza estruturas padronizadas para realizar o processamento paralelo e distribuído da aplicação.",
      "No single distributed mode, o Hadoop utiliza um nó mestre e uma máquina escrava para realizar o processamento paralelo e distribuído.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "O Hadoop Distributed File System (HDFS) é o sistema de arquivos distribuídos do Hadoop. Ele deve garantir:",
    opcoes: [
      "Tolerância a falhas para que, em caso de falha de algum nó, os dados não sejam perdidos e o processamento não pare.",
      "Liberdade para todos usuários realizarem qualquer operação.",
      "Isolamento dos dados, garantindo que cada usuário somente veja os seus dados.",
      "Desempenho inversamente proporcional ao volume de dados.",
      "Que os dados não sejam alterados, mantendo-se sempre inalterados.",
    ],
    correta: 0,
  },
];
