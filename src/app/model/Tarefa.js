const mongoose = require("mongoose");

const TarefaSchema = new mongoose.Schema(
  {
    codigo: {
      type: Number,
      required: true
    },
    titulo: {
      type: String,
      require: true
    },
    prioridade: {
      type: String,
      require: true
    },
    situacao: {
      type: String,
      require: true
    },
    descricao: {
      type: String,
      require: true
    },
    categoriaCodigo: {
      type: Number,
      require: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tarefa", TarefaSchema);