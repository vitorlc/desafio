
const {Router} = require('express')
const animalController = require('../controllers/animalController')
const pessoaController = require('../controllers/pessoaController')
const loteController = require('../controllers/loteController')

const routes = Router()

// ------------- Pessoa -------------
routes.get('/pessoa', pessoaController.findAll)

routes.get('/pessoa/:id', pessoaController.findById)

routes.post('/pessoa', pessoaController.create)

routes.put('/pessoa/:id', pessoaController.update)

routes.delete('/pessoa/:id', pessoaController.remove)

// ------------- Animal -------------

routes.get('/animal', animalController.findAll)

routes.get('/animal/:id', animalController.findById)

routes.post('/animal', animalController.create)

routes.put('/animal/:id', animalController.update)

routes.delete('/animal/:id', animalController.remove)


// ------------- Lote -------------

routes.get('/lote', loteController.findAll)

routes.get('/lote/:id', loteController.findById)

routes.post('/lote', loteController.create)

routes.put('/lote/:id', loteController.update)

routes.delete('/lote/:id', loteController.remove)


module.exports = routes