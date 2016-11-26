title: 基于Node.js和socket打造简易聊天室
date: 2015-10-05
---
## 源码&演示

源码可访问项目的[GITHub](https://github.com/summersir/private.github.io/tree/master/socket-io)页面下载

本地运行方法

* 命令行运行`npm install`
* 模块下载成功后，运行 `node server` 启动服务器
* 打开浏览器访问127.0.0.1:3000（`源码里设置的就是3000端口号`）

## 准备工作
本文示例环境为Mac，Windows也就是Node的安装与命令行稍有不同，程序的实现基本与平台无关。

### Node相关
* 你需要在本机安装Node.js
* 多少需要一点Node.js的基础知识，如果还未曾了解过Node.js，[这里](http://www.nodebeginner.org/index-zh-cn.html)有一篇不错的入门教程

然后我们就可以开始创建一个简单的服务器了。
详细介绍可以去看[我的博客](https://summersir.github.io/2015/10/05/socket/)进行了解