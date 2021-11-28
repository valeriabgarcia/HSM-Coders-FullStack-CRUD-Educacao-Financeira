const readline = require("readline-sync");
const saveToDatabase = require("./saveToDatabase");

function criarCurso() {
  const id = Number(readline.question("Digite o id do curso: "));
  const title = readline.question("Digite o titulo do curso: ");
  const description = readline.question("Digite a descricao do curso: ");
  const image = readline.question("Digite o caminho da imagem do curso: ");
  const teacherName = readline.question("Digite a nome do professor do curso: ");
  const linkAula = readline.question("Digite o link da aula do curso: ");
  const classes = [];
  const creationDate = Date.now();

  while (true) {
    let classEncerrar = readline.question("Digite 'x' para gravar o curso: ");
    if (classEncerrar === "x") break;
    classes.push(classEncerrar);
  }

  const course = {
    id,
    title,
    description,
    image,
    teacherName,
    linkAula,
    classes,
    creationDate,
  };

  saveToDatabase(course);
}

module.exports = criarCurso;