let express = require('express');
let app = express();

app.use(function (req, res, next) {
    // 解决跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
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
app.listen(3000);