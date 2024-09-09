const newsRouter = require('./news');
const huyRouter = require('./huy');
const siteRouter = require('./site');

function route(app){
    // nhan phuong thuc get voi path la news
    // app.get('/news', (req,res ) =>{
    //   res.render('news');
    // });
    app.use('/news',newsRouter );
    
    // app.get('/ngochuy-deptrai',(req, res) =>{
    //   res.render('ngochuy');
    // });
    app.use('/ngochuy-deptrai', huyRouter);
    app.use('/',siteRouter);
}

module.exports = route;