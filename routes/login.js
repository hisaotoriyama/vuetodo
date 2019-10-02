let express = require('express')
let router = express.Router()
let db = require('../models/index')

router.post('/',(req, res) => {
    db.user_cookies.findOne({
        where:{
            name: req.body.loginName
        }
    }).then((d)=> {
    if(req.body.loginPassword==d.password){
        res.cookie('login',true)
        res.cookie('name',req.body.loginName)
        res.send(200)
    } else {
        res.cookie('login',false)
        res.send(200)    
    }
    })
})

module.exports = router;
