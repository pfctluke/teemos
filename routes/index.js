var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home/index');
});
router.get('/ad', function(req, res) {
    res.render('ad.ejs');
});

router.get('/sign_up', checkNotLogin);
router.get('/sign_up', function (req, res) {
    res.render('sign/sign_up', {
        //title: '注册',
        //user: req.session.user,
        //success: req.flash('success').toString(),
        //error: req.flash('error').toString(),
        layout: 'layouts/sign_layout'
    });
});


module.exports = router;

function checkLogin(req, res, next) {
    if (!req.session.user) {
        req.flash('error', '未登录!');
        res.redirect('/login');
    }
    next();
}

function checkNotLogin(req, res, next) {
    //if (req.session.user) {
    //    req.flash('error', '已登录!');
    //    res.redirect('back');//返回之前的页面
    //}
    next();
}
