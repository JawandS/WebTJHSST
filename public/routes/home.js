const express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    
    var obj = {
     'clicks': clicks
    };
    
    res.render('index.hbs', obj);
});

router.get('/labs', function(req,res){
    var obj = {};
    res.render('labs.hbs', obj);
});

router.get('/views', function(req,res){
    var obj = {
     'message' : 'Hello World, it works!',
     'visitorCount': visitorCount
    };
});

router.get('/chance', function(req,res){
    var x = 0.33;
    
    if (Math.random() < x){
        res.render('win_template.hbs');
    }else{
        res.render('lose_template.hbs');
    }
});

router.get('/delay', function(req,res){
    var obj = {
     'message' : 'Delay Complete',
     'delay_time': 1000
    };
    
    res.render('delay.hbs', obj);
});

router.get('/list', function(req,res){
    var obj = {
     people: [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
     ], 
     'number': 3
    };
    
    res.render('list.hbs', obj);
});

router.get('/madlibs', function(req,res){
    var obj = {};
    res.render('form.hbs', obj);
});

router.get('/story_render', function(req,res){
    var obj = req.query;
    console.log(obj);
    
    // if (['adj_one', 'adj_two', 'adj_three', 'noun_one', 'noun_two'] in req.query) {
    //     res.render('madlib.hbs', obj);
    // } else {
    //     res.render('fail.hbs', {"error": `Fields not Filled:`});
    // }
    
    res.render('madlib.hbs', obj);
});

router.post('/story_render', function(req, res){
    var obj = req.body;
    console.log(obj);
    
    // if (['adj_one', 'adj_two', 'adj_three', 'noun_one', 'noun_two'] in req.query) {
    //     res.render('madlib.hbs', obj);
    // } else {
    //     res.render('fail.hbs', {"error": `Fields not Filled:`});
    // }
    
    res.render('madlib.hbs', obj);
});

// public decleration inside of a file
// exports the router as a function 
module.exports = router;
