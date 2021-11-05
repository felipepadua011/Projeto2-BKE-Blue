router.get('/findnome/:nome', async (req, res) => {
    const nome = req.params.nome;
    await Cidade.findOne({ nome: nome }).then((cidades) => {
        if(cidades == null) {
            res.status(404).json({message: "Não foi encontrado"});
        } else {
            res.status(200).json(cidades);
        };
        res.status(200).json(cidades);
    }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);
        });
});

router.post('/add', async (req,res) => { //add nova pessoa no banco

    if(!req.body.nome) {
        res.status(400).json({message: "Nome não informado."});
        return;
    } else if (!req.body.tecnico) {
        res.status(400).json({message: "Tecnico não informado."});
        return;
    } else if (!req.body.titulos) {
        res.status(400).json({message: "Titulos não informado."});
        return;
    } else if (!req.body.jogadores) {
        res.status(400).json({message: "Jogadores não informado."});
        return;
    } else if (!req.body.torcida) {
        res.status(400).json({message: "Torcida não informado."});
        return;
    } else if (!req.body.estadio) {
        res.status(400).json({message: "Estádio não informado."});
        return;
    };

    await Cidade.create(req.body).then(() => {
        res.status(200).json({message: "cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    });
});

router.put('/update/:id', async (req, res) => {
    const id = req.params.id;   
    await Cidade.updateOne({ _id: id }, req.body).then( () => {
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    });
});

router.delete('/delete/:id', async (req, res) => { 
    await Cidade.deleteOne({ _id: req.params.id }, req.body).then( () => {
        res.status(200).json({message: "Deletado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "algo esta errado"});
        console.error(err);
    });
});



const estadosRouter = require("./routers/estados.routes");
app.use('/estados', estadosRouter); 

const paisesRouter = require("./routers/paises.routes");
app.use('/paises', paisesRouter);aasas