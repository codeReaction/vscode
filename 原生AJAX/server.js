// 引入express
const express = require("express");
// 创建应用对象
const app = express();
// 创建路由规则
app.get("/server", (request, response) => {
  // 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置响应体
  response.send("Hello express by nodemon");
});

// app.post('/server',(request,response)=>{
//     // 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin','*')
//     //设置允许任意类型的请求头
//     response.setHeader('Access-Control-Allow-Headers','*')
//     //设置响应体
//     response.send('Hello express by post')
// })

app.all("/server", (request, response) => {
  // 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置允许任意类型的请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //设置响应体
  response.send("Hello express by post");
});
//json数据处理
app.all("/json-server", (request, response) => {
  // 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置允许任意类型的请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //设置响应体
  //传回对象数据
  const data = { name: "Lihui" };
  let str = JSON.stringify(data);
  response.send(str);
});
//ie缓存问题
app.all("/ie", (request, response) => {
  // 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置允许任意类型的请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //设置响应体
  //传回对象数据
  const data = { name: "Lihui" };
  let str = JSON.stringify(data);
  response.send(str);
});
//delay and error
app.get("/delay", (request, response) => {
  // 设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  //设置允许任意类型的请求头
  response.setHeader("Access-Control-Allow-Headers", "*");
  //设置响应体
  //延时响应
  setTimeout(() => {
    const data = "延时响应";
    response.send(data);
  }, 3000);
});

//cors
app.get("/cors-server", (request, response) => {
  response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
  response.send('Hello CORS');
})
//监听端口启动服务
app.listen(8000, () => {
  console.log("service start. port8000 is listening");
});
