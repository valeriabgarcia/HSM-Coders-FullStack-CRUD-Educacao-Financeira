const fs = require('fs');

function listaCursos() {

  const db = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));
  const courses = db.courses;

  for(let i = 0; i < courses.length; i++) {
    const course = courses[i];
    console.log(`
    Id do curso: ${course.id}
    Titulo do curso: ${course.title}
    Descricao do curso: ${course.description}
    Caminho da imagem do curso: ${course.image}
    Nome do professor do curso : ${course.teacherName}
    Link da aula do curso: ${course.linkCurso}
    Data de criacao do curso: ${new Date(course.creationDate).toString()}
    \n`);
  }
}

module.exports = listaCursos;