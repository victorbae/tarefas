const Tarefa = require("../model/Tarefa");

class TarefaController {
  async store(req, res) {
    const data = await Tarefa.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Tarefa.find({});

    return res.json(data);
  }
}

module.exports = new TarefaController();