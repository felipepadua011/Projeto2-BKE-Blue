const mongoose = require("mongoose"); 

const estadosModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    regiao: { type: String, required: true }, 
    populacao: { type: String, required: true }, 
    valsalmin: { type: String, required: true }, 
    dataCriacao: { type: Date, default: Date.now }  
});

const Estado = mongoose.model("Estados", estadosModel); 

module.exports = Estado; 