const mongoose = require("mongoose"); 

async function Conn(){
    await mongoose.connect("mongodb://localhost:27017/Projeto",{ 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { 
        console.log("MongoDB esta conectado");
    }).catch((err) => { 
        console.error(err);
    });
};

module.exports = Conn;