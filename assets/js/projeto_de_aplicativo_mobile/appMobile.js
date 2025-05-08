const appMobile = [
  {
    pergunta: "Qual é o tipo de linguagem de programação do Dart?",
    opcoes: [
      "Compilada para bytecode (como Java)",
      "Interpretada (como Python)",
      "Compilada para código nativo e JavaScript",
      "Baseada em máquina virtual (como C#)",
    ],
    correta: 2,
  },
  {
    pergunta:
      "Qual palavra-chave é usada para declarar uma variável que não pode ser alterada?",
    opcoes: ["var", "dynamic", "final ou const", "static"],
    correta: 2,
  },
  {
    pergunta: "Como se define uma função anônima em Dart?",
    opcoes: ["function() {}", "() => {}", "() {} ou () => expr", "lambda: {}"],
    correta: 2,
  },
  {
    pergunta:
      "Qual é a saída do seguinte código? \n\nvoid main() {\n  int x = 5;\n  print(x ~/ 2);\n}",
    opcoes: ["2.5", "2", "3", "Erro"],
    correta: 1,
  },
  {
    pergunta: "Qual método é usado para converter uma String em int?",
    opcoes: [
      "String.toInt()",
      "int.parse()",
      "int.fromString()",
      "String.castToInt()",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é Future em Dart?",
    opcoes: [
      "Um tipo de lista assíncrona",
      "Um objeto que representa um valor disponível no futuro",
      "Um erro em tempo de execução",
      "Um operador para concatenação",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a forma correta de declarar uma lista de inteiros?",
    opcoes: [
      "List<int> = [1, 2, 3];",
      "List<int> list = [1, 2, 3];",
      "Array<int> list = [1, 2, 3];",
      "int[] list = [1, 2, 3];",
    ],
    correta: 1,
  },
  {
    pergunta: "Como se define um construtor nomeado em Dart?",
    opcoes: [
      "class MyClass { constructor.named(); }",
      "class MyClass { MyClass.named(); }",
      "class MyClass { new.named(); }",
      "class MyClass { named(); }",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a saída do código abaixo? \n\nvoid main() {\n  var list = [1, 2, 3];\n  list.forEach((item) => print(item * 2));\n}",
    opcoes: ["[2, 4, 6]", "2, 4, 6 (um por linha)", "null", "Erro"],
    correta: 1,
  },
  {
    pergunta: "Qual pacote é usado para fazer requisições HTTP em Dart?",
    opcoes: ["dart:web", "dart:io", "http (pacote externo)", "dart:net"],
    correta: 2,
  },
  {
    pergunta: "O que async e await fazem?",
    opcoes: [
      "Permitem trabalhar com código assíncrono de forma síncrona",
      "Compilam código mais rápido",
      "São usados para definir threads",
      "Convertem JSON automaticamente",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do operador ???",
    opcoes: [
      "Retorna o valor à direita se o da esquerda for null",
      "Verifica igualdade",
      "Concatena strings",
      "Faz divisão",
    ],
    correta: 0,
  },
  {
    pergunta: "Como se define um mapa (dicionário) em Dart?",
    opcoes: [
      "Map<String, int> = {'key': 1};",
      "Dict key = {'key': 1};",
      "HashMap<String, int> = {'key': 1};",
      "Map({'key': 1});",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a saída do código? \n\nvoid main() {\n  var a = [1, 2];\n  var b = [...a, 3];\n  print(b);\n}",
    opcoes: ["[1, 2]", "[1, 2, 3]", "[3, 1, 2]", "Erro"],
    correta: 1,
  },
  {
    pergunta: "Qual método adiciona um item ao final de uma lista?",
    opcoes: [
      "list.insert(item)",
      "list.add(item)",
      "list.push(item)",
      "list.append(item)",
    ],
    correta: 1,
  },
  {
    pergunta: "O que extends e implements significam?",
    opcoes: [
      "extends herda uma classe, implements implementa uma interface",
      "Ambos fazem herança múltipla",
      "implements herda, extends implementa",
      "São iguais",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é o tipo de var x = 1.0;?",
    opcoes: ["int", "double", "num", "dynamic"],
    correta: 1,
  },
  {
    pergunta: "Como se lê um arquivo em Dart?",
    opcoes: [
      "File('path').readAsString()",
      "readFile('path')",
      "File.read('path')",
      "importFile('path')",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a saída do código? \n\nvoid main() {\n  String? name;\n  print(name?.length ?? 0);\n}",
    opcoes: ["null", "Erro", "0", "1"],
    correta: 2,
  },
  {
    pergunta: "Qual ferramenta compila Dart para JavaScript?",
    opcoes: ["dart2js", "dartc", "flutter build", "dart-web"],
    correta: 0,
  },
  {
    pergunta: "Como se define uma classe em Dart?",
    opcoes: [
      "class MyClass {}",
      "def MyClass {}",
      "object MyClass {}",
      "new class MyClass {}",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a palavra-chave para criar uma instância de uma classe?",
    opcoes: ["create", "new (opcional no Dart 2+)", "instance", "make"],
    correta: 1,
  },
  {
    pergunta: "Como declarar um construtor padrão para a classe Pessoa?",
    opcoes: [
      "Pessoa() => {}",
      "Pessoa();",
      "constructor() {}",
      "Pessoa.new() {}",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é herança em Dart?",
    opcoes: [
      "Uma classe pode herdar propriedades e métodos de outra classe usando extends",
      "Uma classe pode ter múltiplas superclasses",
      "Só é possível herdar interfaces",
      "Herança é feita com a palavra-chave inherit",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a saída do código abaixo? \n\nclass Animal {\n  void emitirSom() => print('Som genérico');\n}\n\nclass Cachorro extends Animal {\n  void emitirSom() => print('Au au!');\n}\n\nvoid main() {\n  Animal animal = Cachorro();\n  animal.emitirSom();\n}",
    opcoes: ["Som genérico", "Au au!", "Erro", "null"],
    correta: 1,
  },
  {
    pergunta: "Como declarar um método privado em Dart?",
    opcoes: [
      "Usando private antes do método",
      "Prefixando o nome do método com _",
      "Usando a palavra-chave hidden",
      "Métodos não podem ser privados",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Como definir um construtor nomeado que inicializa apenas o nome de uma classe Pessoa? \n\nclass Pessoa {\n  String nome;\n  int idade;\n\n  // Construtor padrão\n  Pessoa(this.nome, this.idade);\n\n  // Construtor nomeado aqui\n}",
    opcoes: [
      "Pessoa.novo(String n) { nome = n; }",
      "Pessoa.somenteNome(this.nome);",
      "named Pessoa(String n) => nome = n;",
      "Pessoa({this.nome});",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a diferença entre extends e implements?",
    opcoes: [
      "extends herda tudo, implements só métodos",
      "extends herda atributos e métodos, implements obriga a implementar todos os métodos",
      "São sinônimos",
      "implements herda, extends implementa",
    ],
    correta: 1,
  },
  {
    pergunta: "Como definir uma classe abstrata?",
    opcoes: [
      "abstract class Veiculo { ... }",
      "class abstract Veiculo { ... }",
      "Veiculo with abstract { ... }",
      "interface Veiculo { ... }",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a saída do código? \n\nclass Contador {\n  static int count = 0;\n  Contador() { count++; }\n}\n\nvoid main() {\n  Contador();\n  Contador();\n  print(Contador.count);\n}",
    opcoes: ["0", "2", "1", "Erro"],
    correta: 1,
  },
  {
    pergunta: "Qual widget é usado para criar um botão clicável em Flutter?",
    opcoes: ["Clickable", "ElevatedButton", "TouchableOpacity", "Button"],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do widget Scaffold?",
    opcoes: [
      "Fornece uma estrutura básica de layout (AppBar, Body, FloatingActionButton, etc.)",
      "Gerencia estados de widgets",
      "Navega entre telas",
      "Cria listas roláveis",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual widget é usado para exibir uma lista rolável?",
    opcoes: ["Column", "ListView", "Stack", "Grid"],
    correta: 1,
  },
  {
    pergunta: "Qual é a diferença entre StatelessWidget e StatefulWidget?",
    opcoes: [
      "StatelessWidget é imutável, StatefulWidget pode mudar dinamicamente",
      "StatelessWidget usa setState(), StatefulWidget não",
      "StatefulWidget não pode ter filhos",
      "São idênticos",
    ],
    correta: 0,
  },
  {
    pergunta: "Como navegar para uma nova tela (Tela2) em Flutter?",
    opcoes: [
      "Navigator.push(context, MaterialPageRoute(builder: (context) => Tela2()));",
      "Navigator.goTo(Tela2());",
      "context.changeScreen(Tela2());",
      "Route.switch(Tela2());",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual widget é usado para centralizar um filho horizontal e verticalmente?",
    opcoes: ["Align", "Center", "Padding", "Container"],
    correta: 1,
  },
  {
    pergunta: "Qual método é chamado quando um StatefulWidget é inicializado?",
    opcoes: ["onCreate()", "initState()", "build()", "start()"],
    correta: 1,
  },
  {
    pergunta:
      "Qual widget permite adicionar espaçamento interno ao redor de outro widget?",
    opcoes: ["Margin", "Padding", "Spacer", "Space"],
    correta: 1,
  },
  {
    pergunta: "Como retornar à tela anterior na navegação?",
    opcoes: [
      "Navigator.back();",
      "Navigator.pop(context);",
      "context.goBack();",
      "Route.pop();",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual widget é usado para organizar widgets verticalmente?",
    opcoes: ["Column", "Row", "List", "VerticalLayout"],
    correta: 0,
  },
  {
    pergunta: "O que o método setState() faz em um StatefulWidget?",
    opcoes: [
      "Atualiza o estado interno e força o rebuild do widget",
      "Remove o widget da árvore",
      "Navega para outra tela",
      "Inicializa o estado",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual widget é usado para exibir texto em Flutter?",
    opcoes: ["Label", "Text", "StringView", "TextView"],
    correta: 1,
  },
  {
    pergunta: "Como adicionar margens a um widget?",
    opcoes: [
      "Usar Container com margin",
      "Usar Padding com edgeInsets",
      "Usar Spacer",
      "Não é possível",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual widget permite sobrepor widgets uns sobre os outros?",
    opcoes: ["Stack", "Column", "Overlay", "Layer"],
    correta: 0,
  },
  {
    pergunta: "Qual é o widget raiz obrigatório em um app Flutter?",
    opcoes: ["MaterialApp ou CupertinoApp", "Scaffold", "AppBar", "MainWidget"],
    correta: 0,
  },
  {
    pergunta: "Como definir um ícone no AppBar?",
    opcoes: [
      "AppBar(leading: Icon(Icons.menu));",
      "AppBar(icon: Icons.menu);",
      "AppBar(child: Icon(Icons.menu));",
      "AppBar(action: Icon(Icons.menu));",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual widget é usado para criar um campo de texto editável?",
    opcoes: ["TextField", "TextInput", "EditText", "Input"],
    correta: 0,
  },
  {
    pergunta: "O que o widget SizedBox faz?",
    opcoes: [
      "Define um tamanho fixo para seu filho ou espaçamento",
      "Cria uma caixa de texto",
      "Gerencia estados",
      "Navega entre telas",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual widget é usado para criar um switch (interruptor)?",
    opcoes: ["Switch", "Toggle", "Checkbox", "Button"],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do BuildContext?",
    opcoes: [
      "Representa a localização de um widget na árvore de widgets",
      "Gerencia estados globais",
      "Armazena dados persistentes",
      "Navega entre telas",
    ],
    correta: 0,
  },
];
