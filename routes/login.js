let express = require('express')
let router = express.Router()
let db = require('../models/index')

router.post('/',(req, res) => {
    console.log("HERE YOU ARE");
    db.user_cookies.findOne({
        where:{
            name: req.body.loginName
        }
    }).then((d)=> {console.log(d);
    console.log(req.body.loginPassword)
    console.log(d.password)
    if(req.body.loginPassword==d.password){
        console.log("OK")
        res.cookie('login',true)
        res.cookie('name',req.body.loginName)
        res.send(200)
    } else {
        console.log("NG")
        res.cookie('login',false)
        res.send(200)    
    }
    })
})

module.exports = router;
