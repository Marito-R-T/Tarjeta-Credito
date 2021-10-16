const AccountType = require('./Initialization/AccountType');
const Admin = require('./Initialization/Administration');
const Comment = require('./Initialization/Comment');
const Credit = require('./Initialization/CreditCard');
const Disabling = require('./Initialization/Disabling');

//Creacion de las llaves foraneas

//Tarjeta de credito
AccountType.hasMany(Credit, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'tipo_plan',
        allowNull: false
    }
});

Disabling.hasMany(Credit, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'habilitada',
        allowNull: false
    }
});


