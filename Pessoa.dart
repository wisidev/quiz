class Pessoa {
  String nome;
  int? idade; // idade agora é opcional (pode ser nula)

  // Construtor padrão
  Pessoa(this.nome, this.idade);

  // Construtor nomeado que inicializa apenas o nome
  Pessoa.somenteNome(this.nome);
}

void main() {
  // Usando o construtor padrão
  Pessoa p1 = Pessoa('Maria', 30);
  print('Pessoa 1: ${p1.nome}, ${p1.idade}');

  // Usando o construtor nomeado
  Pessoa p2 = Pessoa.somenteNome('João');
  print('Pessoa 2: ${p2.nome}, ${p2.idade}');
}
