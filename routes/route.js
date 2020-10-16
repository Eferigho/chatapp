const express = require('express')
const router = express.Router()
const {PORT} = require('../index')

router
    .get('/',(req,res)=>{
        res.status(200).send({
            message:"app running " + PORT
        })
    })

module.exports = router