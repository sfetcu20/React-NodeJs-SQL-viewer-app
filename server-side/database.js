const {Sequelize} = require('sequelize')

const sequelize =new Sequelize('database','admin','admin',{
    dialect:'sqlite',
    host: './dev.sqlite'
})
module.exports = sequelize;