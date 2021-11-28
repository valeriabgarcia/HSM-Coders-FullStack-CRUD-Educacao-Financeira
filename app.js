const readline = require("readline-sync");
const createCourse = require("./criarCurso");
const readCourse = require("./exibirCurso");
const updateCourse = require("./atualizarCurso");
const deleteCourse = require("./deletarCurso");
const listCourses = require("./listaCursos");

while (true) {
  console.log(`
  DIGITE O NUMERO DAS OPCOES ABAIXO:
  1 - Criar um curso
  2 - Ver um curso
  3 - Atualizar um curso
  4 - Deletar um curso
  5 - Listar todos os cursos
  0 - Sair do Programa
  `);
  const option = Number(readline.question("Escolha uma das opcoes acima: "));

  if (option === 0) break;
  else if (option === 1) createCourse();
  else if (option === 2) readCourse();
  else if (option === 3) updateCourse();
  else if (option === 4) deleteCourse();
  else if (option === 5) listCourses();
  else console.log("Opcao não eh valida! Digite uma das opcoes anteriores (1/2/3/4/5/0)");
}
