const express = require("express"); 
const app = express();  
require('dotenv').config();

app.use(express.json());  

const Conn = require("./model/conn/index"); 
Conn(); 

app.get("/", (req, res) => {    
    res.json({message: "Bem vindos ao meu segundo projeto de BackEnd!!"});
});

const cidadesRouter = require("./routers/cidades.routes");
app.use('/cidades', cidadesRouter);

const estadosRouter = require("./routers/estados.routes");
app.use('/estados', estadosRouter);

const paisesRouter = require("./routers/paises.routes");
app.use('/paises', paisesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});