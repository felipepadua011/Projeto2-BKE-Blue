const express = require("express"); 
const router = express.Router();    
const CidadeController = require('./../controller/cidades.controller')



router.get('/', (req, res) => {
    res.status(200).json({message: 'Cidades OK'});
});

router.get("/listall", CidadeController.getAll);

router.get("/listid/:id", CidadeController.getId);

router.get("/listname/:nome", CidadeController.getName);

router.post("/add", CidadeController.postCreate);

router.put("/update/:id", CidadeController.putUpdate);

router.delete("/delete/:id", CidadeController.delDelete);

module.exports = router;