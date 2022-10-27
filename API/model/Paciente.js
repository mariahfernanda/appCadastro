const Sequelize = require('sequelize');

const connection = require('../database/database');

const Usuario =  require('./Usuario');

const Paciente  = connection.define(
    'tbl_paciente',
    {
        cod_pacinte:{
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: Sequelize.STRING(50),
            allowNull: true
        },
        telefone:{
            type: Sequelize.STRING(12),            
            allowNull: true
        },
        celular:{
            type: Sequelize.STRING(12),
            allowNull: true
        },
        email:{
            type: Sequelize.STRING(250),
            allowNull: true
        },
        nomeresponsavel:{
            type: Sequelize.STRING(50),
            allowNull: true
        },
        telefoneresponsavel:{
            type: Sequelize.STRING(12),
            allowNull: true
        }
    }
);




Pacinte.belongsTo(Usuario);

Paciente.sync({force:true});

module.exports = Paciente;