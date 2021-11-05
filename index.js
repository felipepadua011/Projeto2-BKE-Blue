const express = require("express"); 
const app = express();  

app.use(express.json());  

const Conn = require("./model/conn/index"); 
Conn(); 

const port = 3000; 

app.get("/", (req, res) => {    
    res.json({message: "Bem vindos ao meu segundo projeto de BackEnd!!"});
});

const cidadesRouter = require("./routers/cidades.routes");
app.use('/cidades', cidadesRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});