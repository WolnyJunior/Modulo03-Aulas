const { Router, query } = require('express') // 
const Curso = require('../models/Curso')

const { auth } = require('../middleware/auth')
const CursoController = require('../controllers/CursoController')

const cursoRoutes = new Router()

cursoRoutes.post('/', auth, CursoController.cadastrar)
cursoRoutes.get('/', auth, CursoController.listarUmCurso)
// cursoRoutes.get('/', auth, CursoController.listar)
cursoRoutes.delete('/:id', auth, CursoController.atualizar)
cursoRoutes.put('/:id', auth, CursoController.deletar)

module.exports = cursoRoutes