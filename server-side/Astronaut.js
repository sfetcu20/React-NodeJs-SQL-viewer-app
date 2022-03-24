const {Model,DataTypes} = require('sequelize');
const sequelize = require('./database')

class Astronaut extends Model{}
Astronaut.init({
    name:{
        type:DataTypes.STRING
    },
    role:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    modelName:'astronaut'
});
module.exports=Astronaut;