const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port||8080
app.use(cors());
const Routes =require("./Routes")
const sequilize = require('./database');
app.use(express.json());
app.use('/routes',Routes);

sequilize.sync({force:true}).then(()=>console.log('db is ready'));

app.listen(port,()=>{
    console.log('run on port ' + port)
})