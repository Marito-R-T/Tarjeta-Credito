const express = require('express');
const Router = express.Router();
const email = require('../Controller/SenderEmail');


Router.post('/send_pin', email.sendEmail);

module.exports = Router;