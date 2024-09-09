const express = require('express');
// import express from 'express';
const path = require('path'); 

const  morgan = require('morgan');
const route = require('./routes');
// dang lam viec voi handlebars
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;
// định nghĩa tuyến đường /trang-chu 
app.use(express.static(path.join(__dirname, 'public' ))); // xử lí static file, thư mục tĩnh thì nó lao vào thư mục public
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());  
//http logger
// app.use(morgan("combined"))

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
})); // sử dụng template engine là handlebars--> ném thư viện handlebars thả vào engine
app.set('view engine', 'hbs');// sử dụng view engine là handlebars
app.set('views', path.join(__dirname,'resources/views'))
console.log('Path: ', path.join(__dirname, 'views')); 
console.log(__dirname);

// dinh nghia tuyen duong de truy cap vao trang web
//app la instance cua express, path la duong dan de truy cap, handler function
// req chua thong tin yeu cau tu ung dung phia nguoi dung len server 
// res chua lua chon tuy chinh ket qua tra ve qua response  

// day la tuyen duong 
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})