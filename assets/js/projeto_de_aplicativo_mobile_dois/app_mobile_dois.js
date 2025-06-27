const quizFlutterEDart = [
  {
    pergunta: "Qual widget é usado para entrada de texto simples em Flutter?",
    opcoes: ["Checkbox", "TextField", "Radio", "DropdownButton"],
    correta: 1,
  },
  {
    pergunta:
      "O que o widget TextFormField oferece a mais em relação ao TextField?",
    opcoes: [
      "Suporte a validação e integração com formulários",
      "Rolagem automática",
      "Seleção de múltiplas opções",
      "Exibição de datas",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual widget é ideal para selecionar uma opção entre várias em um grupo?",
    opcoes: ["Checkbox", "Radio", "TextField", "DatePicker"],
    correta: 1,
  },
  {
    pergunta: "O widget Checkbox é usado para:",
    opcoes: [
      "Seleção de uma única opção",
      "Entrada de texto longo",
      "Seleção de múltiplas opções",
      "Exibição de uma lista suspensa",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual propriedade do DropdownButton define as opções exibidas?",
    opcoes: ["items", "value", "onChanged", "hint"],
    correta: 0,
  },
  {
    pergunta: "O widget DatePicker é usado para:",
    opcoes: [
      "Selecionar uma data em um calendário",
      "Inserir texto formatado",
      "Exibir uma lista rolável",
      "Selecionar múltiplas opções",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual widget permite rolagem de conteúdo em uma única direção?",
    opcoes: ["Row", "Column", "SingleChildScrollView", "TextFormField"],
    correta: 2,
  },
  {
    pergunta: "O widget ListView é mais adequado para:",
    opcoes: [
      "Exibir widgets em linha horizontal",
      "Exibir uma lista rolável de itens",
      "Organizar widgets em coluna",
      "Entrada de dados de texto",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual widget organiza seus filhos em uma linha horizontal?",
    opcoes: ["Column", "Row", "ListView", "SingleChildScrollView"],
    correta: 1,
  },
  {
    pergunta: "O widget Column é usado para:",
    opcoes: [
      "Exibir itens em uma lista rolável",
      "Organizar widgets verticalmente",
      "Permitir entrada de texto",
      "Selecionar datas",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Em Dart, qual biblioteca é comumente usada para serialização e deserialização de arquivos?",
    opcoes: ["dart:async", "dart:io", "dart:convert", "dart:math"],
    correta: 2,
  },
  {
    pergunta:
      "Qual função é usada para converter uma string JSON em um objeto Dart?",
    opcoes: ["jsonEncode", "jsonDecode", "toString", "parseJson"],
    correta: 1,
  },
  {
    pergunta: "O que a função jsonEncode faz?",
    opcoes: [
      "Converte um objeto Dart em uma string JSON",
      "Lê um arquivo de texto",
      "Converte uma string em um inteiro",
      "Executa operações assíncronas",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual palavra-chave em Dart indica que uma função é assíncrona?",
    opcoes: ["sync", "async", "await", "future"],
    correta: 1,
  },
  {
    pergunta: "Para que serve a palavra-chave await em Dart?",
    opcoes: [
      "Definir uma função síncrona",
      "Aguardar a conclusão de uma operação assíncrona",
      "Criar uma lista de itens",
      "Serializar dados",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual biblioteca é usada para fazer requisições HTTP em Flutter?",
    opcoes: ["dart:io", "http", "dart:async", "shared_preferences"],
    correta: 1,
  },
  {
    pergunta:
      "Qual método da biblioteca http é usado para obter dados de um servidor?",
    opcoes: ["post", "get", "put", "delete"],
    correta: 1,
  },
  {
    pergunta: "O método http.post é usado para:",
    opcoes: [
      "Excluir dados de um servidor",
      "Atualizar dados existentes",
      "Enviar dados para um servidor",
      "Obter dados de um servidor",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual método HTTP é usado para atualizar recursos existentes?",
    opcoes: ["get", "post", "put", "delete"],
    correta: 2,
  },
  {
    pergunta: "O que o método http.delete faz?",
    opcoes: [
      "Envia dados para o servidor",
      "Remove um recurso do servidor",
      "Obtém dados do servidor",
      "Atualiza um recurso existente",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual widget é usado para construir a interface com base no estado de um Future?",
    opcoes: ["ListView", "FutureBuilder", "TextField", "DropdownButton"],
    correta: 1,
  },
  {
    pergunta:
      "Qual propriedade do FutureBuilder define a operação assíncrona a ser monitorada?",
    opcoes: ["builder", "future", "initialData", "snapshot"],
    correta: 1,
  },
  {
    pergunta: "O que a propriedade builder do FutureBuilder faz?",
    opcoes: [
      "Define o Future a ser executado",
      "Constrói a interface com base no estado do Future",
      "Armazena dados iniciais",
      "Serializa dados JSON",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual biblioteca é usada para persistência de dados simples em Flutter?",
    opcoes: ["dart:io", "http", "shared_preferences", "dart:convert"],
    correta: 2,
  },
  {
    pergunta: "Como você obtém uma instância de SharedPreferences?",
    opcoes: [
      "SharedPreferences.getInstance()",
      "SharedPreferences.create()",
      "SharedPreferences.init()",
      "SharedPreferences.load()",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual método do SharedPreferences é usado para salvar um valor booleano?",
    opcoes: ["setString", "setInt", "setBool", "setDouble"],
    correta: 2,
  },
  {
    pergunta: "Qual widget é mais adequado para formulários com validação?",
    opcoes: ["TextField", "TextFormField", "Checkbox", "Radio"],
    correta: 1,
  },
  {
    pergunta: "Qual propriedade do TextField define o tipo de teclado exibido?",
    opcoes: ["controller", "keyboardType", "onChanged", "decoration"],
    correta: 1,
  },
  {
    pergunta: "O widget Radio requer qual propriedade para agrupar opções?",
    opcoes: ["groupValue", "value", "onChanged", "items"],
    correta: 0,
  },
  {
    pergunta:
      "Qual propriedade do DropdownButton é chamada quando uma opção é selecionada?",
    opcoes: ["value", "items", "onChanged", "hint"],
    correta: 2,
  },
  {
    pergunta: "O widget DatePicker é geralmente apresentado usando:",
    opcoes: [
      "showDialog",
      "showDatePicker",
      "showModalBottomSheet",
      "Navigator.push",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual widget evita o overflow de conteúdo em uma tela?",
    opcoes: ["Row", "Column", "SingleChildScrollView", "ListView"],
    correta: 2,
  },
  {
    pergunta: "Qual propriedade do ListView define a direção de rolagem?",
    opcoes: ["scrollDirection", "itemCount", "children", "padding"],
    correta: 0,
  },
  {
    pergunta:
      "O widget Row pode ser combinado com qual widget para evitar overflow?",
    opcoes: ["Column", "SingleChildScrollView", "TextField", "Checkbox"],
    correta: 1,
  },
  {
    pergunta:
      "Qual propriedade do Column controla o alinhamento horizontal dos filhos?",
    opcoes: [
      "mainAxisAlignment",
      "crossAxisAlignment",
      "children",
      "scrollDirection",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual biblioteca em Dart contém jsonDecode e jsonEncode?",
    opcoes: ["dart:io", "dart:async", "dart:convert", "dart:math"],
    correta: 2,
  },
  {
    pergunta: "Qual tipo de dado é retornado por jsonDecode?",
    opcoes: ["String", "Map ou List", "int", "double"],
    correta: 1,
  },
  {
    pergunta: "Em operações assíncronas, o que Future representa?",
    opcoes: [
      "Um valor disponível imediatamente",
      "Um valor que estará disponível no futuro",
      "Uma lista de widgets",
      "Um arquivo serializado",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual palavra-chave é usada para esperar o resultado de um Future?",
    opcoes: ["async", "await", "then", "sync"],
    correta: 1,
  },
  {
    pergunta:
      "Qual método da biblioteca http é usado para enviar dados atualizados ao servidor?",
    opcoes: ["get", "post", "put", "delete"],
    correta: 2,
  },
  {
    pergunta:
      "Qual propriedade do FutureBuilder fornece o estado atual do Future?",
    opcoes: ["builder", "future", "snapshot", "initialData"],
    correta: 2,
  },
  {
    pergunta: "O que snapshot.hasData indica no FutureBuilder?",
    opcoes: [
      "Se o Future foi concluído com erro",
      "Se o Future está em execução",
      "Se o Future retornou dados com sucesso",
      "Se o Future foi cancelado",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual método do SharedPreferences recupera um valor de string?",
    opcoes: ["getInt", "getString", "getBool", "getDouble"],
    correta: 1,
  },
  {
    pergunta: "Qual propriedade do TextFormField é usada para validação?",
    opcoes: ["validator", "controller", "onChanged", "keyboardType"],
    correta: 0,
  },
  {
    pergunta: "Qual widget é mais eficiente para listas longas em Flutter?",
    opcoes: ["Row", "Column", "ListView.builder", "SingleChildScrollView"],
    correta: 2,
  },
  {
    pergunta: "Qual método do SharedPreferences remove uma chave?",
    opcoes: ["remove", "clear", "delete", "setString"],
    correta: 0,
  },
  {
    pergunta:
      "O que acontece se você usar jsonEncode em um objeto sem suporte?",
    opcoes: [
      "Retorna uma string vazia",
      "Lança uma exceção",
      "Converte para null",
      "Ignora o objeto",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual propriedade do http.get define cabeçalhos da requisição?",
    opcoes: ["headers", "body", "url", "encoding"],
    correta: 0,
  },
  {
    pergunta: "Qual método do SharedPreferences limpa todos os dados salvos?",
    opcoes: ["remove", "clear", "deleteAll", "reset"],
    correta: 1,
  },
  {
    pergunta: "Qual é o propósito principal do FutureBuilder?",
    opcoes: [
      "Exibir uma lista rolável",
      "Construir a UI com base no estado de um Future",
      "Serializar dados JSON",
      "Armazenar dados localmente",
    ],
    correta: 1,
  },
];
