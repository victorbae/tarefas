const express = require("express");

const routes = express.Router();

const TarefaController = require("./app/controller/TarefaController");
const CategoriaController = require("./app/controller/CategoriaController");

routes.get("/tarefa", TarefaController.index);

routes.post("/tarefa", TarefaController.store);

routes.get("/categoria", CategoriaController.index);

routes.post("/categoria", CategoriaController.store);

module.exports = routes;