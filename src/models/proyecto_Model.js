const mongoose = require('mongoose');

const proyectoSchema = mongoose.Schema({
    titulo:{
        type: String,
        required:true
    },
    descripcion:{
        type: String,
        required:true
    },
    etiquetas:{
        type: Array,
        required:true
    },
    imagenes:{
        type: Array,
        required:true
    },   
});

module.exports = mongoose.model('proyecto',proyectoSchema);