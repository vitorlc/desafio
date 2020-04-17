const db = require('../models')
const Animal = db.animal

module.exports = {
    async findAll(req, res) {
        try {
            let animais = await Animal.findAll()
            return res.status(200).send(animais)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível encontrar animais"})
        }
    },

    async findById(req, res) {
        try {
            let animal = await Animal.findByPk(req.params.id)
            return res.status(200).send(animal)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível encontrar o animal"})
        }
    },


    async create(req, res) {
        try {
            let animal = await Animal.create(req.body)
            return res.status(200).send(animal)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível criar o animal"})
        }
    },

    async update(req, res) {
        try {
            let animal = await Animal.update(req.body, { where: { id: req.params.id }})
            return res.status(200).send(animal)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível atualizar o animal"})
        }
    },

    async remove(req, res) {
        try {
            let animal = await Animal.findByPk(req.params.id)
            await animal.destroy()
            return res.status(200).send()
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível remover o animal"})
        }
    }


}