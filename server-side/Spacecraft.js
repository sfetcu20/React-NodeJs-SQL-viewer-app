const req = require('express/lib/request');
const {Model,DataTypes} = require('sequelize');
const sequelize = require('./database')
const Astronaut = require('./Astronaut');
class Spacecraft extends Model{}
Spacecraft.init({
    name:{
        type:DataTypes.STRING
    },
    mass:{
        type:DataTypes.NUMBER
    },
    speed:{
        type:DataTypes.NUMBER
    }
},
     {
         sequelize,
         modelName: 'spacecraft'
    }
)
//Spacecraft.hasMany(Astronaut,{foreignKey:'id',onDelete:'CASCADE',onUpdate:'CASCADE'});
module.exports = Spacecraft;
