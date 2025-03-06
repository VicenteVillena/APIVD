const mongoose = require('mongoose');

const tarjetaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    descripcion:{
        type: String,
        required:true
    },
    redes:{
        type: String,
        required:true
    },
    redes2:{
        type: String,
        required:true
    },
    redesLink:{
        type: String,
        required:true
    },
    redesLink2:{
        type: String,
        required:true
    },
    imagen:{
        type: String,
        required:true
    } 
});

module.exports = mongoose.model('tarjeta',tarjetaSchema);