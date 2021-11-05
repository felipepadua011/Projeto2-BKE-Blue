const mongoose = require("mongoose"); 

const paisesModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    populacao: { type: String, required: true }, 
    linguamae: { type: String, required: true }, 
    pib: { type: String, required: true }, 
    dataCriacao: { type: Date, default: Date.now } 
});

const Pais = mongoose.model("Paises", paisesModel); 

module.exports = Pais; 