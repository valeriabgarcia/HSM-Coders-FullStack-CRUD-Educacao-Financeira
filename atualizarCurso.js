const fs = require('fs');
const readline = require('readline-sync');
const saveToDatabase = require('./saveToDatabase');

function atualizarCurso() {
  const id = Number(readline.question("Digite o id do curso: "));
  const db = JSON.parse(fs.readFileSync('./database.json'));

  const findCourse = db.courses.find(course => course.id === id);
  if(findCourse === undefined) return console.log(`Curso com id ${id} nao encontrado!`);

  const title = readline.question("Digite o titulo do curso: ");
  const description = readline.question("Digite a descricao do curso: ");
  const image = readline.question("Digite o caminho da imagem do curso: ");
  const teacherName = readline.question("Digite a nome do professor do curso: ");
  const linkAula = readline.question("Digite o link da aula do curso: ");
  const classes = [];
  const updateDate = Date.now();

  while(true) {
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
    creationDate: findCourse.creationDate,
  }

  saveToDatabase(course, true);
}

module.exports = atualizarCurso;