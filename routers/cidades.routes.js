const express = require("express"); 
const router = express.Router(); 
const Cidade = require('./../model/cidades');

router.get('/', (req, res) => {
    res.status(200).json({message: 'Cidades OK'});
});

router.get('/listall', async (req, res) => {
    await Cidade.find({}).then((cidades) => {
        res.status(200).json(cidades);
        }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);
        });
});

router.get('/listid/:id', async (req, res) => {
    await Cidade.findById({ _id: id }, req.body).then( () => {
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

router.get('/listname/:nome', async (req, res) => {
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

router.post('/add', async (req,res) => { 

    if(!req.body.nome) {
        res.status(400).json({message: "Nome não informado."});
        return;
    } else if (!req.body.populacao) {
        res.status(400).json({message: "População não informado."});
        return;
    } else if (!req.body.qntdbair) {
        res.status(400).json({message: "Quantidade de bairros não informado."});
        return;
    } else if (!req.body.nivercidad) {
        res.status(400).json({message: "Aniverssario da cidade não informado."});
        return;
    };

    await Cidade.create(req.body).then(() => {
        res.status(200).json({message: "Cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

router.put('/update/:id', async (req, res) => {

    if(!req.body.nome) {
        res.status(400).json({message: "Nome não informado."});
        return;
    } else if (!req.body.populacao) {
        res.status(400).json({message: "População não informado."});
        return;
    } else if (!req.body.qntdbair) {
        res.status(400).json({message: "Quantidade de bairros não informado."});
        return;
    } else if (!req.body.nivercidad) {
        res.status(400).json({message: "Aniverssario da cidade não informado."});
        return;
    };
    
    const id = req.params.id;   
    await Cidade.updateOne({ _id: id }, req.body).then( () => {
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

router.delete('/delete/:id', async (req, res) => { 
    await Cidade.deleteOne({ _id: req.params.id }, req.body).then( () => {
        res.status(200).json({message: "Deletado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

module.exports = router;