const express = require("express"); 
const router = express.Router(); 
const Pais = require('./../model/paises');

router.get('/', (req, res) => {
    res.status(200).json({message: 'Paises OK'});
});

router.get('/listall', async (req, res) => {
    await Pais.find({}).then((paises) => {
        res.status(200).json(paises);
        }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);
        });
});

router.get('/listname/:nome', async (req, res) => {
    const nome = req.params.nome;
    await Pais.findOne({ nome: nome }).then((paises) => {
        if(paises == null) {
            res.status(404).json({message: "Não foi encontrado"});
        } else {
            res.status(200).json(paises);
        };
        res.status(200).json(paises);
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
        res.status(400).json({message: "População não informada."});
        return;
    } else if (!req.body.linguamae) {
        res.status(400).json({message: "Língua Mãe não informada."});
        return;
    } else if (!req.body.pib) {
        res.status(400).json({message: "PIB não informado."});
        return;
    };

    await Pais.create(req.body).then(() => {
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
        res.status(400).json({message: "População não informada."});
        return;
    } else if (!req.body.linguamae) {
        res.status(400).json({message: "Língua Mãe não informada."});
        return;
    } else if (!req.body.pib) {
        res.status(400).json({message: "PIB não informado."});
        return;
    };

    const id = req.params.id;   
    await Pais.updateOne({ _id: id }, req.body).then( () => {
        res.status(200).json({message: "Atualizado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

router.delete('/delete/:id', async (req, res) => { 
    await Pais.deleteOne({ _id: req.params.id }, req.body).then( () => {
        res.status(200).json({message: "Deletado com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
});

module.exports = router;