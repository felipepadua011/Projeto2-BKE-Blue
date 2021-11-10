const Cidade = require('./../model/cidades');

function validarCidade(requisicao){
    if(!requisicao.nome) {
        res.status(400).json({message: "Nome não informado."});
        return;
    } else if (!requisicao.populacao) {
        res.status(400).json({message: "População não informado."});
        return;
    } else if (!requisicao.qntdbair) {
        res.status(400).json({message: "Quantidade de bairros não informado."});
        return;
    } else if (!requisicao.nivercidad) {
        res.status(400).json({message: "Aniverssario da cidade não informado."});
        return;
    };
};

exports.getAll = async (req, res) => {
    await Cidade.find({}).then((cidades) => {
        res.status(200).json(cidades);
        }).catch((err) => {
            res.status(204).json({message: "Nada foi encontrado"});
            console.error(err);
        });
};

exports.getName = async (req, res) => {
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
};

exports.getId = async (req, res) => {
    await Cidade.findById({ _id: id }, req.body).then( () => {
        res.status(200).json({message: "Atualizada com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
};

exports.postCreate = async (req,res) => {
    validarEntrada(req.body);
    await Cidade.create(req.body).then(() => {
        res.status(200).json({message: "Cadastrada com sucesso"});
    }).catch((err) => {
        res.status(400).json({message: "Algo esta errado"});
        console.error(err);
    });
};

exports.putUpdate = async (req,res) => {
    validarEntrada(req.body);
    await Cidade.findByIdAndUpdate(req.params.id,req.body).then(() => {
        res.status(200).json({message: "Cidade atualizada com sucesso!!!"})
    }).catch((err) => {
        res.status(400).json({message: "Algo deu errado!!!"});
        console.error(err);
    });
}

exports.delDelete = async (req,res) => {
    await Cidade.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({message: "Cidade deletada com sucesso!!!"});
    }).catch((err) => {
        res.status(404).json({message: "nenhum personagem foi encontrado"});
        console.error(err);
    });
}