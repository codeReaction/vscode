// 引入express
const express = require('express')
// 创建应用对象
const app = express()
// 创建路由规则
app.get('/',(request,response)=>{
    response.send('Hello express')
})
app.listen(8000,()=>{console.log("service start. port8000 is listening");})