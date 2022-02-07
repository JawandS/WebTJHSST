const express = require('express');
var router = express.Router();

router.get('/views', function(req,res){
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    
    var obj = {
     'message' : 'Hello World, it works!',
     'visitorCount': visitorCount
    };
    
    pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count and rendering");
        res.render('dynamic.hbs', obj);
    });
});

router.get('/chance', function(req,res){
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    
    var x = 0.33;
    
    if (Math.random() < x){
        res.render('win_template.hbs');
    }else{
        res.render('lose_template.hbs');
    }
    
    pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count");
    });
});

router.get('/delay', function(req,res){
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    
    var obj = {
     'message' : 'Delay Complete',
     'delay_time': 1000
    };
    res.render('delay.hbs', obj);
    
    pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count");
    });
});

router.get('/list', function(req,res){
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    
    var obj = {
     people: [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
     ], 
     'number': 3
    };
    res.render('list.hbs', obj);
    
     pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count");
    });
});

router.get('/madlibs', function(req,res){
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    
    var obj = {};
    res.render('form.hbs', obj);
    
     pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count");
    });
});

router.get('/story_render', function(req,res){
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    
    var obj = req.query;
    console.log(obj);
    
    // if (['adj_one', 'adj_two', 'adj_three', 'noun_one', 'noun_two'] in req.query) {
    //     res.render('madlib.hbs', obj);
    // } else {
    //     res.render('fail.hbs', {"error": `Fields not Filled:`});
    // }
    
    res.render('madlib.hbs', obj);
    
     pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count");
    });
});

router.post('/story_render', function(req,res){
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    
    var obj = req.body;
    console.log(obj);
    
    // if (['adj_one', 'adj_two', 'adj_three', 'noun_one', 'noun_two'] in req.query) {
    //     res.render('madlib.hbs', obj);
    // } else {
    //     res.render('fail.hbs', {"error": `Fields not Filled:`});
    // }
    
    res.render('madlib.hbs', obj);
    
     pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count");
    });
});



module.exports = router;
