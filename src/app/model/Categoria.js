const mongoose = require("mongoose");

const CategoriaSchema = new mongoose.Schema(
    {
        codigo: {
            type: Number,
            required: true
        },
        nome: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Categoria", CategoriaSchema);
