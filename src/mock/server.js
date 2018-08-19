let express = require('express');
let session = require('express-session');
let bodyParse = require('body-parser');
let app = express();
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'cgp'
}));
app.use(bodyParse.json());
app.use(function (req, res, next) {
    // 解决跨域
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.setHeader("Access-Control-Allow-Credentials",true); //设置cookie

    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") return res.end(); /*让options请求快速返回*/
    else next();
});
let sliders = require('./mock/sliders');
let lessons = require('./mock/lessons');
app.get("/sliders",function (req, res) {
    res.json(sliders);
});
//http://localhost:3000/lessons?limit=5&offset=0&ttype=1
app.get('/lessons',function (req, res) {
    let {limit,offset,type} = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
    type = parseInt(type);
    let newLessons = lessons.filter(item=>{
        if(type === 0) return true;
        return item.type === type;
    });
    //判断下服务端是否有更多数据 hasMore
    let hasMore = true;
    let len = newLessons.length; //获取数据的总长
    if(len<offset+limit){ //没有更多了
        hasMore = false;
    }
    newLessons = newLessons.slice(offset,offset+limit); //获取更多数据
    res.json({hasMore,list:newLessons});

});
let users = []; //存放所有的用户
// 返回参数{msg:'xxx',err:1,user:{username,password}} 1代表错误
// 登陆接口
app.post("/login",function (req, res) {
    let {username,password} = req.body;
    let user = users.find(item=>(item.username ==username)&&(item.password == password));
    if(user){ //用户已经找到
        req.session.user = req.body;
        res.json({msg:'用户成功登陆',err:0,user:username})
    }else {
        res.json({msg:'用户名或密码不正确',err:1})
    }
});
app.post('/reg',function (req, res) {
   let {username,password} = req.body;
    let user = users.find(item=>item.username == username);
   if(user){ //已经存在这样一个用户
       res.json({msg:'用户已经存在',err:1})
   }else {
        users.push({username,password});
        res.json({msg:'注册成功',err:0});
   }
});
//校验用户是否登陆
app.get("/validate",function (req, res) {
    console.log(req.session.user);
    if(req.session.user){
        res.json({msg:'',err:0,user:req.session.user.username})
    }else {
        res.json({msg:'',err:0,user:null})
    }
});












app.listen(3000);