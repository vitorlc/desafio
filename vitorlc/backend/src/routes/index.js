
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

router.delete('/pessoa/:id', pessoaController.delete)

// ------------- Animal -------------

routes.get('/animal', animalController.findAll)

routes.get('/animal/:id', animalController.findById)

routes.post('/animal', animalController.create)

routes.put('/animal/:id', animalController.update)

router.delete('/animal/:id', animalController.delete)


// ------------- Lote -------------

routes.get('/lote', loteController.findAll)

routes.get('/lote/:id', loteController.findById)

routes.post('/lote', loteController.create)

routes.put('/lote/:id', loteController.update)

router.delete('/lote/:id', loteController.delete)