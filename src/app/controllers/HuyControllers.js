

class HuyControllers {

    index(req, res) {
        res.render('ngochuy');
    }
    show(req, res) {
        res.send('xin chao moi nguoi');
    }
}

module.exports = new HuyControllers;