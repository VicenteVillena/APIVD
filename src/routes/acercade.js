const express = require('express');
const tarjetaSchema = require('../models/tarjeta_mod');
const router = express.Router();

//Crear un persona
router.post('/persona', (req, res)=>{
    const tarjeta = tarjetaSchema(req.body);
    tarjeta
        .save()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

//Metodo para obtener todos los personas
router.get('/todos', (req, res)=>{
    tarjetaSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

//Metodo para obtener un personas
router.get('/todos/:id', (req, res)=>{
    const {id} = req.params;
    tarjetaSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});


//Metodo para actualizar un personas
router.put('/todos/:id', (req, res)=>{
    const {id} = req.params;
    const {nombre, descripcion, redes, redes2, redesLink, redesLink2, imagen} = req.body;
    tarjetaSchema
        .updateOne({_id: id},{ $set: {nombre, descripcion, redes, redes2, redesLink, redesLink2, imagen}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});


//Metodo para eliminar un proyecto
router.delete('/todos/:id', (req, res)=>{
    const {id} = req.params;
    tarjetaSchema
        .deleteOne({_id: id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message:error}));
});

module.exports = router;