const { Router } = require("express");
const alunoRoutes = require("./aluno.routes");
const cursoRoutes = require("./curso.routes");
const loginRoutes = require("./login.routes");

const routes = Router()

routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)

module.exports = routes