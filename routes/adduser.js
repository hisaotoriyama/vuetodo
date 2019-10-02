let express = require('express')
let router = express.Router()
let db = require('../models/index')

router.post('/',(req, res) => {

router.post以下で設定しようとしている。

    UserTableのNameに、新規ログイン試みるUserのNameが存在するしないで条件分け。
    ①存在する場合→Login画面に進む(そこでLoginする)。
    ②存在しない場合→NameとPasswordがUserTableに登録され、そしてそのままPrivate/todo.htmlに遷移する。
    
if関数を使って条件わけ？

// db.user_cookies.findOne({
    //     where:{
    //         name: req.body.name
}}).then
 

    // もしもreq.body.nameとDatabaseに同じNameがあれば、NewNameでの登録はせず、。。。へいく
    // db.user_cookies.findAll
    // もしも同じNameでなければ新規に登録し、そのNameをccookiesに入れる
    db.user_cookies.findAll().then((d) => {
    　　for(i=0;i<d.length;i++){
        if(d[i].dataValues.name==req.body.name){
            res.redirect('/login.html')
        } else {
            continue;
        }
                    res.cookie('login',true)
                    res.cookie('name',req.body.loginName)
                    res.send(200)
        } else {
            continue;
        }

            res.cookie('login',false)
            res.send(200)  
            break;
        }
    }
  
    })

    

    // let data = {
    //     name:req.body.name,
    //     password:req.body.password
    //     }
    // db.user_cookies.create(data).then((d)=> {
    //     res.send(200)
})

module.exports = router;
