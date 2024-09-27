const { Router, query } = require('express') // 
const Aluno = require('../models/Aluno')

const { sign } = require('jsonwebtoken')
const { auth } = require('../middleware/auth')
const LoginController = require('../controllers/LoginController')

const loginRoutes = new Router()

loginRoutes.post('/', LoginController.login)


module.exports = loginRoutes
