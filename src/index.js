const express = require('express');
// import express from 'express';
const path = require('path'); 

const  morgan = require('morgan');

// dang lam viec voi handlebars
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;
// định nghĩa tuyến đường /trang-chu 

app.use(express.static(path.join(__dirname, 'public' ))); // xử lí static file, thư mục tĩnh thì nó lao vào thư mục public

//http logger
app.use(morgan("combined"))

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
})); // sử dụng template engine là handlebars--> ném thư viện handlebars thả vào engine
app.set('view engine', 'hbs');// sử dụng view engine là handlebars
app.set('views', path.join(__dirname,'resources/views'))
console.log('Path: ', path.join(__dirname, 'views')); 
console.log(__dirname);

app.get('/', (req, res) => {
    res.render('home'); // render trang nao thi lay trang do dua vao body
})
app.get('/news', (req,res ) =>{
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})