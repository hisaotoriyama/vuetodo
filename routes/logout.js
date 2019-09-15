let express = require('express')
let router = express.Router()
let db = require('../models/index')

router.get('/',(req, res) => {
        //今までlongin=trueであったものをBlankにし、login:trueを無効にする。
        res.cookie("login")
        res.redirect("/login.html")
})

module.exports = router;
