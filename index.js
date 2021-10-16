const express = require('express');

const { createServer } = require('http');
const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, function(){
    console.log('La app ha sido arrancada en el puerto '+PORT);
    
}) 