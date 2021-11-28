const fs = require("fs");
const readline = require("readline-sync");

function deletarCurso() {
  const id = Number(
    readline.question("Digite o id do curso que deseja deletar: ")
  );

  try {
    const db = JSON.parse(fs.readFileSync("./database.json"));
    const findCourse = db.courses.find((course) => course.id === id);

    if (findCourse === undefined)
      return console.log(`O ${id} não foi encontrado`);

    db.courses = db.courses.filter((courseArray) => courseArray.id != id);

    fs.writeFileSync("./database.json", JSON.stringify(db, null, 2));
  } catch (erro) {
    console.log(`Erro: ${erro}`);
  }

  console.log("O curso foi deletado");
}

module.exports = deletarCurso;