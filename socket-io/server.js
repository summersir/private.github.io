/**
 * Created by shenjunchen on 16/11/11.
 */
var http = require('http');
var fs = require('fs');
var mime = require('mime');

var server = http.createServer(handle).listen(3000,function(){
  console.log("success")
});
// 绑定服务器
var io = require('socket.io')(server);

function handle(req,res){
  var filePath ="";
  if (req.url == "/"){
    filePath = "./public/html/index.html"
    // serverStatic(res,filePath)
  }else{
    filePath = "./public" + req.url;
    // serverStatic(res,filePath)
  }
  serverStatic(res,filePath)
}



function serverStatic(res,filePath){
  fs.exists(filePath,function(exists){
    if(exists){
      fs.readFile(filePath,function(err,data){
        if(err){
          send404(res);
        }
        res.writeHead(200,{
          "Content-Type":mime.lookup(filePath)
        });
        res.end(data)
      })
    }else{
      send404(res);
    }
  })
}



function send404(res){
  res.writeHead(404,{
    "Content-Type":"text/plain"
  });
  res.end("404!sorry not find")
}


var num = 0;
var arr = [];
io.on('connection', function (socket) {
  num++;
  // emit(事件名,{发射主体})
  // on(事件名，接受回调)
  // 服务端要和客户端11对应
  socket.on('news', function (data) {

    arr.push(data.info);
    console.log(arr);
    io.sockets.emit('message',{msg:arr});
  });
});