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

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});