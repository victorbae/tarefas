const Categoria = require("../model/Categoria");

class CategoriaController {
  async store(req, res) {
    const data = await Categoria.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Categoria.find({});

    return res.json(data);
  }
}

module.exports = new CategoriaController();