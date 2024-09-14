const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
       const {name} = req.body
        const type = await Type.create({name})
        return res.join(type)
    }

    async getAll(req, res) {
      const types = await Type.findAll()
        return res.join(types)
    }

    async getOne(req,res) {

    }

}

module.exports = new TypeController()