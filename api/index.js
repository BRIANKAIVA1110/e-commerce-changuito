const express = require('express');
const app = express();
const config = require('./src/config/config')
const productoController = require('./src/routes/productoController');
const usuariosController = require('./src/routes/usuariosController');

app.use(express.json());/*body-parser: ya no es necesario instalar este ya que express ya lo incluye desde x version.*/
app.use("/productos",productoController);
app.use("/usuarios",usuariosController);

app.listen(config.PORT, config.HOST,(x)=>{
    console.log(`server listen: ${config.HOST}:${config.PORT}`)    
})

