// setup application
//まず画面で ブラウザで叩かれたアドレスlogin, user, vuetodoに基づき稼働する最初の画面。
let express = require('express')
let Res = require('express-resource')
let cp = require('cookie-parser')
let path = require('path')
let login   = require('./routes/login')
let logout  = require('./routes/logout')
let adduser = require('./routes/adduser')
let app = express()

let bodyParser = require('body-parser');
let db = require('./models/index')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cp())
app.use(express.json())
app.use('/login', login)// app.resource('logins', require('./controllers/login'), {id: 'id'})とはしない。POSTだけでいいのでresourceは使わない！
// 他のシート(今回の場合public/main.js)で/loginとなった場合、ここを読み込みに来る。
app.use('/logout', logout)
app.use('/adduser', adduser)

// register REST controllers
app.resource('vuetodos', require('./controllers/vuetodo'), {id: 'id'})
app.resource('users', require('./controllers/user'), {id: 'id'})

let isLogin = (req, res, next) => {
    // console.log(">>"+req.cookies.login)
    if(req.cookies.login == 'true') {
        next();  // これによりapp.use isLoginのあとのexpress.static( path.join( __dirname, '/private' )) に移る。
    } else {
    //windows.alert("NameないしPasswordが異なっています")//→alert使えない。なぜ？？？？
    // redirectはサーバーサイド、main.jsのlocation.hrefはブラウザサイド 
        res.redirect('/login.html')
    }
}

app.use('/secure', isLogin, express.static(path.join(__dirname,'/private')));
app.use('/secureloggedin', express.static(path.join(__dirname,'/private')));
app.use(express.static('public'));

// start application
app.listen(3020)
