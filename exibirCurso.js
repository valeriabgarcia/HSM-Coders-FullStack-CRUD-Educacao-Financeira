const fs = require("fs");
const readline = require("readline-sync");

function exibirCurso() {
  const db = JSON.parse(fs.readFileSync("./database.json", "utf-8"));
  const courses = db.courses;

  const id = Number(readline.question("Digite o id do curso desejado: "));
  const findCourse = courses.find((course) => course.id === id);

  if (findCourse === undefined)
    return console.log(`Curso com id ${id} não encontrado!`);

  const date = new Date(findCourse.creationDate);

  console.log(`
  Id do curso: ${id}:
  Titulo do curso: ${findCourse.title}
  Descricao do curso: ${findCourse.description}
  Imagem do curso: ${findCourse.image}
  Professor do curso: ${findCourse.teacherName}
  Link da aulado curso: ${findCourse.linkCurso}
  Data de criacao do curso: ${date.toString()}
  `);
}

module.exports = exibirCurso;
