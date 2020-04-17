const db = require('../models')
const Lote = db.animal_lote

module.exports = {
    async findAll(req, res) {
        try {
            let lotes = await Lote.findAll()
            return res.status(200).send(lotes)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível encontrar os lotes"})
        }
    },

    async findById(req, res) {
        try {
            let lote = await Lote.findByPk(req.params.id)
            return res.status(200).send(lote)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível encontrar o lote"})
        }
    },


    async create(req, res) {
        try {
            let lote = await Lote.create(req.body)
            return res.status(200).send(lote)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível criar o lote"})
        }
    },

    async update(req, res) {
        try {
            let lote = await Lote.update(req.body, { where: { id: req.params.id }})
            return res.status(200).send(lote)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível atualizar o lote"})
        }
    },

    async remove(req, res) {
        try {
            let lote = await Lote.findByPk(req.params.id)
            await lote.destroy()
            return res.status(200).send()
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível remover o lote"})
        }
    }


}