const protocoloMqtt = [
  {
    pergunta:
      "No decorrer dos anos, muitas aplicações, direcionadas às mais diversas atividades econômicas, foram criadas com o uso da tecnologia de IoT. Várias empresas do ramo da tecnologia criam diversos protocolos de comunicação para os objetos conseguirem se comunicar de forma eficiente.\n\nEscolha a afirmação correta sobre as especificidades do protocolo CoAP em relação ao MQTT.",
    opcoes: [
      "Por ser um protocolo mais antigo, o CoAP, definido antes da publicação do protocolo MQTT, apresenta maior aceitação e, portanto, é aplicado na comunicação de diversos dispositivos de IoT.",
      "A empresa IBM foi a responsável pela criação do protocolo CoAP. Já a Amazon desenvolveu a estrutura do MQTT e adotou outros protocolos como o HTTP e o Websockets.",
      "O protocolo MQTT, por ter mecanismos de retransmissão variável que foram herdados do  UDP, perde mais pacotes no momento da comunicação, em relação ao CoAP.",
      "O protocolo CoAP tem maior confiabilidade na transmissão de mensagens em relação ao MQTT. Essa confiabilidade é constatada pela menor quantidade de tráfego do MQTT.",
      "Perdas de pacotes são mais prováveis de ocorrer no protocolo CoAP do que no MQTT, mesmo que o CoAP seja executado em uma camada acima da UDP.​​​​​​​",
    ],
    correta: 4,
  },
  {
    pergunta:
      "No protocolo MQTT, existem três níveis que indicam a qualidade do serviço (QoS) prestado a partir de esforços realizados pelo servidor para efetivar a entrega de mensagens entre dispositivos. Os QoS existentes para o MQTT são:\n\nI - QoS 1.\nII - QoS 2.\nIII - QoS 3.\n\nAssocie os tipos de QoS destacados com as informações apresentadas a seguir:\n\n( ) Tem recursos que garantem a entrega única de mensagem. Para a checagem de envio, ele retorna o status e a confirmação de recebimento.\n\n( ) Tem qualidade de serviço semelhante ao protocolo UDP, pois, ao entregar a mensagem, não existe uma confirmação ao transmissor.\n\n( ) Nível caracterizado pela expressão at least once (pelo menos, uma vez). Nesse tipo de serviço, é mantida, no receptor, uma cópia da mensagem em situações em que ocorre time out.\n\n( ) Tipo de serviço em que existe uma confirmação de recebimento para o emissor de uma mensagem enviada a um destinatário.\n\n( ) Nesse tipo de serviço, o dispositivo transmissor não guarda a mensagem para ser utilizada em retransmissões futuras.\n\nMarque a resposta correta:",
    opcoes: [
      "III - II - I - II - I.",
      "II - I - I - II - II.",
      "III - I - II - II - I.",
      "I - II - II - I - III.",
      "I - I - III - III - II.",
    ],
    correta: 2,
  },

  {
    pergunta:
      "A comunicação via protocolo MQTT ocorre entre dispositivos de IoT dispostos em uma rede sem fio em que mensagens são recebidas e enviadas entre elementos dessa rede e que podem ser recuperadas por aplicações para uma tomada de decisão específica. Existem mensagens trocadas na rede que indicam as mais diversas situações do ambiente como sensores de temperatura, direção do vento, intensidade da luz ambiente, entre outras mediações. Para que as mensagens possam ser trocadas de maneira eficiente, deve existir um conjunto de recursos que viabilizam o uso do protocolo MQTT.\n\n",

    imagem: "./assets/img/bd2-3-2.png",

    complemento:
      "\nEm relação aos recursos necessários para o envio e o recebimento de mensagens a partir do protocolo MQTT, julgue as afirmações a seguir como V (verdadeiras) ou F (falsas):\n\n(   ) A mensagem de temperatura de 28ºC enviada pelo sensor a um servidor MQTT, representado na figura com a letra B, é considerada um código de information (informação) para o protocolo MQTT.\n\n(   ) O servidor Broker, representado na figura com a letra B, serve de elemento intermediário entre a troca de mensagens entre o sensor e os outros dispositivos da rede.\n\n(   ) Quando o sensor de temperatura envia a mensagem de 28ºC, representada pela letra A, ela é chamada de Subscribed, pois sobrescreve a mensagem que será publicada.\n\n(   ) A seta azul, representada pela letra C, que parte do dispositivo de notebook para o servidor do protocolo MQTT, é considerada uma mensagem de Subscribed e sua função é assinar a mensagem anteriormente enviada.\n\nMarque a resposta correta:",

    opcoes: [
      "V - F - F - V.",
      "F - V - F - V.",
      "F - F - V - F.",
      "V - V - F - F.",
      "F - V - V - V.",
    ],

    correta: 1,
  },
  {
    pergunta:
      "O padrão utilizado para a troca de mensagens no protocolo MQTT denomina-se publish/subscriber. Nesse cenário, o Broker desempenha papel importante para a comunicação.\n\nEscolha a alternativa correta em relação ao Broker e às trocas de mensagens publish/subscriber:",
    opcoes: [
      "O publish/subscriber tem a função de troca de mensagens seguras entre brokers na rede utilizando o protocolo MQTT.",
      "O Broker é um serviço hospedado remotamente por um servidor na Internet com a função de intermediar as mensagens de publish/subscriber.",
      "O publish/subscriber apresenta conexão ponto-a-ponto síncrona entre os dispositivos IoT que utilizam como protocolo o MQTT.",
      "O Broker é uma estrutura lógica para a segurança da informação de publish/subscriber entre os protocolos HTTP e MQTT.",
      "O Broker pode enviar dados para diferentes dispositivos na rede, porém não reconhece mensagens do tipo subscriber.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Os parâmetros de execução permitem a comunicação de um cliente com um servidor broker MQTT. Para iniciar a mensagem, o cliente deve, primeiramente, enviar o comando CONNECT.\n\nEscolha a afirmação que representa a relação entre o nome e as características dos parâmetros existentes no envio de uma mensagem:",
    opcoes: [
      "O parâmetro cleanSession especifica se a conexão está vazia e se as mensagens estão salvas no broker.",
      "O parâmetro returnCode retorna mensagens falhas de execução do sistema no início da comunicação.",
      'O parâmetro lastWillTopicindica o encerramento de uma conexão de forma inesperada, sendo considerado uma mensagem de "último desejo".',
      "O parâmetro keepAlive mantém o usuário conectado temporariamente no broker sem a necessidade de efetuar pings constantes.",
      "Os parâmetros password e username são logs de segurança que permitem o acesso ao broker.",
    ],
    correta: 2,
  },
];
