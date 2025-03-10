const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const ApiProyectos = require('./routes/portafolio');
const ApiAcerade = require('./routes/acercade');

const app = express();
const port = process.env.port || 7770;

app.use(cors({origin:'*'}));
app.use(express.json());
app.use('/api',ApiProyectos);
app.use('/api/tarjeta',ApiAcerade);


//Routes
app.get('/',(req, res) => {
    res.send("Iniciando el servicio :D");
});

//Base de datos
mongoose
    .set("strictQuery", false)
    .connect(process.env.MONGODB_URI)
    .then(()=> console.log("Conectado a Base de Datos") )
    .catch((error) => console.error(error));


app.listen(port,
    ()=> 
        console.log("Iniciando el servicio en ", port));