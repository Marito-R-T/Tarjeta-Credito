const express = require('express');

//Base de datos
const sequelize = require('./Model/Db');
const Models = require('./Model/CreateModels');
const { database } = require('./config');

//Servidor
const { createServer } = require('http');
const app = express();
const PORT = process.env.PORT || 3000;
const server = createServer(app);

//para envio de request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
const email = require('./Routes/MailRoutes');
app.use(email);





server.listen(PORT, function(){
    console.log(`la app ha sido arrancada en ${PORT}`);

    //Conexion a la base de datos   
    sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(
        sequelize.sync({force: false}).then(() => {
        console.log("Conexion establecida");
    }).catch(error => {
        console.log("Se ha producido un error al momento de intentar conectar con la db",error);
    }))
})
