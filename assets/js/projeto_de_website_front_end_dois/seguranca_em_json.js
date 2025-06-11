const seguranca_em_json = [
  {
    pergunta:
      "JSON é um formato para troca de dados entre aplicações, que compete diretamente com a linguagem XML. Apesar dos inúmeros benefícios desse formato, é fundamental, nele e em qualquer outro formato para troca de dados, a implementação de uma abstração de segurança. Qual é a principal aplicação de segurança do JSON?",
    opcoes: ["JWT.", "RSA.", "HMAC.", "HTTP.", "POST."],
    correta: 0,
  },
  {
    pergunta:
      "O formato JSON foi pensado, em meados de 2000, para ser uma forma simples de intercambiar dados e para ser utilizada em aplicações diversas na Internet. Dentro desse contexto, temos as camadas cliente e servidor para intercomunicação, sendo que a segurança no tráfego ponta a ponta dessas camadas é essencial. Qual a principal etapa de segurança do formato JSON do lado cliente?",
    opcoes: [
      "Autorização.",
      "Validação.",
      "Autenticação.",
      "Confiabilidade.",
      "Integridade.",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Como o XML é mais rígido que o JSON, é fundamental que mecanismos de segurança sejam utilizados na troca de dados em JSON. Caso se queira verificar os tipos de acesso de um pacote JSON a um servidor de aplicação com diretórios em JS (JavaScript), que tipo de segurança será necessário implementar?",
    opcoes: [
      "Verificação de autenticidade.",
      "Verificação de confiabilidade.",
      "Verificação de integralidade.",
      "Verificação de autorizações de acesso.",
      "Verificação lógica.",
    ],
    correta: 3,
  },
  {
    pergunta:
      "O JSON Web Token é, sem dúvida, o meio mais difundido de garantir a autenticidade na segurança da troca de dados, no formato JSON. A estrutura do JWT conta com três partes; são elas, respectivamente:",
    opcoes: [
      "payload, signature e header.",
      "header, signature e payload.",
      "signature, header e payload.",
      "payload, header e signature.",
      "header, payload e signature.",
    ],
    correta: 4,
  },
  {
    pergunta:
      "No reserved claims do token JSON, existem atributos que não são obrigatórios, mas que podem ser utilizados para formar um conjunto de informações úteis. Desses atributos, o responsável por definir com quanto tempo o token expira (timestamp) é:",
    opcoes: ["{e}.", "sub.", "exp.", "iat.", "iss."],
    correta: 2,
  },
];
