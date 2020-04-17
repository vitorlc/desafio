const db = require('../models')
const Pessoa = db.pessoa

module.exports = {
    async findAll(req, res) {
        try {
            let pessoas = await Pessoa.findAll()
            return res.status(200).send(pessoas)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível encontrar pessoas"})
        }
    },

    async findById(req, res) {
        try {
            let pessoa = await Pessoa.findByPk(req.params.id)
            return res.status(200).send(pessoa)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível encontrar a pessoa"})
        }
    },


    async create(req, res) {
        try { 
            let pessoa = await Pessoa.create(req.body)
            return res.status(200).send(pessoa)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível criar pessoa"})
        }
    },

    async update(req, res) {
        try {
            let pessoa = await Pessoa.update(req.body, { where: { id: req.params.id }})
            return res.status(200).send(pessoa)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível atualizar pessoa"})
        }
    },

    async remove(req, res) {
        try {
            console.log(req.params)
            let pessoa = await Pessoa.findByPk(req.params.id)
            await pessoa.destroy()
            return res.status(200).send(pessoa)
        } catch (e) {
            console.log(e)
            return res.status(500).send({error: true, msg:"Não foi possível remover pessoa"})
        }
    }


}
