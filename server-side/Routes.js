const router = require('express').Router();
const Spacecraft = require ('./Spacecraft');
const Astronaut = require ('./Astronaut');
router.post('/import1', async (req,res)=>{
    Spacecraft.bulkCreate(req.body).then(()=> res.status(200).send(JSON.stringify('ok_space')))
   
})
router.post('/import2', async (req,res)=>{
    Astronaut.bulkCreate(req.body).then(()=> res.status(200).send(JSON.stringify('ok_astr')))
})
router.post('/add', async (req,res)=>{
    Spacecraft.create(req.body).then(()=> res.status(200).send(JSON.stringify('ok_space')))
   
})
router.get('/getSpacecraft/:offset',async(req,res)=>{
    console.log(req.params.offset);
    const spacec =  await Spacecraft.findAll({
        limit:3,
        offset:req.params.offset
    });
    res.send(spacec);
})
router.get('/getAstronaut/:offset',async(req,res)=>{
    console.log(req.params.offset);
    const astr =  await Astronaut.findAll({
        limit:3,
        offset:req.params.offset
    });
    
    res.send(astr);
})
module.exports= router;