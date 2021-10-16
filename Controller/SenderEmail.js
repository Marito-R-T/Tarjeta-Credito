const express = require('express');
const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    },
    auth: {
        user: 'luisestuardo-bolanosgonzalez@cunoc.edu.gt',
        pass: 'dshq glnx pcju jtpk',
    }
});

transporter.use('compile', hbs({
    viewEngine: {
        extName: '.hbs',
        partialsDir: './View/email_templates/',
        layoutsDir: './View/email_templates/',
        defaultLayout: 'verification.hbs',
    },
    viewPath: './View/email_templates/',
    extName: '.hbs',
}));

async function sendEmail(req, res){
    return new Promise((resolve, reject) => {
      let mailOptions = {
        from: 'hola',
        to: req.body.email,
        subject: 'Envio de email',
        template: 'verification'
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if(error){
          console.log("err1 ", error);
          reject(error);
        } else {
          resolve("Pin enviado de forma correcta")
        }
      })
    })
  }



module.exports = {
    sendEmail
}