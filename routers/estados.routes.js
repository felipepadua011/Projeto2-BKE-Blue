const express = require("express"); 
const router = express.Router(); 
const Estado = require('./../model/estados');

router.get('/', (req, res) => {
    res.status(200).json({message: 'Estados OK'});
});

router.get('/viewestados', async (req, res) => {
    await Estado.find({}).then((estados) => {
        res.status(200).json(estados);
        }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);
        });
});

router.get('/findnome/:nome', async (req, res) => {
    const nome = req.params.nome;
    await Estado.findOne({ nome: nome }).then((estados) => {
        if(estados == null) {
            res.status(404).json({message: "Não foi encontrado"});
        } else {
            res.status(200).json(estados);
        };
        res.status(200).json(estados);
    }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);
        });
});

router.post('/addestado', async (req,res) => { 

    if(!req.body.nome) {
        res.status(400).json({message: "Nome não informado."});
        return;
    } else if (!req.body.regiao) {
        res.status(400).json({message: "Região não informada."});
        return;
    } else if (!req.body.populacao) {
        res.status(400).json({message: "População não informada."});
        return;
    } else if (!req.body.valsalmin) {
        res.status(400).json({message: "Valor do salário minímo não informado."});
        return;
    };

    await Estado.create(req.body).then(() => {
        res.status(200).json({message: "Cadastrado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

router.put('/editestado/:id', async (req, res) => {
    const id = req.params.id;   
    await Estado.updateOne({ _id: id }, req.body).then( () => {
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

router.delete('/delestado/:id', async (req, res) => { 
    await Estado.deleteOne({ _id: req.params.id }, req.body).then( () => {
        res.status(200).json({message: "Deletado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

module.exports = router;