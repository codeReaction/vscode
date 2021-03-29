const express = require("express");
const app = express();
app.get('/home',(request,response)=>{
        // 设置允许跨域
        response.setHeader('Access-Control-Allow-Origin','*')
        //设置允许任意类型的请求头
        response.setHeader('Access-Control-Allow-Headers','*')
        //设置响应体 返回一个页面
            response.sendFile(__dirname+'/index.html')
})
app.get('/data',(request,response)=>{
    //返回数据
    response.send('用户数据1')
})

app.listen(9000,()=>console.log('端口9000监听中'))