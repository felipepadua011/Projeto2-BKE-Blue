const mongoose = require("mongoose"); 

const cidadesModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    populacao: { type: String, required: true }, 
    qntdbair: { type: Number, required: true }, 
    nivercidad: { type: String, required: true }, 
    dataCriacao: { type: Date, default: Date.now } 
});

const Cidade = mongoose.model("Cidades", cidadesModel); 

module.exports = Cidade; 