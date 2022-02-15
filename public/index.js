#!/usr/bin/nodejs

// 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

// -------------- load packages -------------- //
// INITIALIZATION STUFF

var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// file system
const fsLibrary = require('fs');

// templating 
var hbs = require('hbs');
app.set('view engine','hbs');

// // -------------- routes -------------- //
const home = require('./routes/home.js')
app.use(home);

const math = require('./routes/math.js')
app.use(math);

const links = require('./routes/links.js')
app.use(links);

app.use(
    express.static('static_files')
);

// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});

// var mysql = require('mysql');

// var sql_params = {
//   connectionLimit : 10,
//   user            : process.env.DIRECTOR_DATABASE_USERNAME,
//   password        : process.env.DIRECTOR_DATABASE_PASSWORD,
//   host            : process.env.DIRECTOR_DATABASE_HOST,
//   port            : process.env.DIRECTOR_DATABASE_PORT,
//   database        : process.env.DIRECTOR_DATABASE_NAME
// };

// var pool  = mysql.createPool(sql_params);
// var visitorCount = 0;

// // SQL 
// pool.query('SELECT * FROM data', function(err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     visitorCount = parseInt(result[0]['visits']);
// });


// // SQL keep highest score of cookie clicker and update it for everyone 
// // communist cookie clicker 

// app.get('/views', function(req,res){
//     visitorCount++; 
//     console.log(`Visitors: ${visitorCount}`);
    
//     var obj = {
//      'message' : 'Hello World, it works!',
//      'visitorCount': visitorCount
//     };
    
//     pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
//         if (err) throw err;
//         console.log("updated visitor count and rendering");
//         res.render('dynamic.hbs', obj);
//     });
// });

// app.get('/chance', function(req,res){
//     visitorCount++; 
//     console.log(`Visitors: ${visitorCount}`);
    
//     var x = 0.33;
    
//     if (Math.random() < x){
//         res.render('win_template.hbs');
//     }else{
//         res.render('lose_template.hbs');
//     }
    
//     pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
//         if (err) throw err;
//         console.log("updated visitor count");
//     });
// });

// app.get('/delay', function(req,res){
//     visitorCount++; 
//     console.log(`Visitors: ${visitorCount}`);
    
//     var obj = {
//      'message' : 'Delay Complete',
//      'delay_time': 1000
//     };
//     res.render('delay.hbs', obj);
    
//     pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
//         if (err) throw err;
//         console.log("updated visitor count");
//     });
// });

// app.get('/list', function(req,res){
//     visitorCount++; 
//     console.log(`Visitors: ${visitorCount}`);
    
//     var obj = {
//      people: [
//         "Yehuda Katz",
//         "Alan Johnson",
//         "Charles Jolley",
//      ], 
//      'number': 3
//     };
//     res.render('list.hbs', obj);
    
//      pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
//         if (err) throw err;
//         console.log("updated visitor count");
//     });
// });

// app.get('/madlibs', function(req,res){
//     visitorCount++; 
//     console.log(`Visitors: ${visitorCount}`);
    
//     var obj = {};
//     res.render('form.hbs', obj);
    
//      pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
//         if (err) throw err;
//         console.log("updated visitor count");
//     });
// });

// app.get('/story_render', function(req,res){
//     visitorCount++; 
//     console.log(`Visitors: ${visitorCount}`);
    
//     var obj = req.query;
//     console.log(obj);
    
//     // if (['adj_one', 'adj_two', 'adj_three', 'noun_one', 'noun_two'] in req.query) {
//     //     res.render('madlib.hbs', obj);
//     // } else {
//     //     res.render('fail.hbs', {"error": `Fields not Filled:`});
//     // }
    
//     res.render('madlib.hbs', obj);
    
//      pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
//         if (err) throw err;
//         console.log("updated visitor count");
//     });
// });

// app.post('/story_render', function(req, res){
//     visitorCount++; 
//     console.log(`Visitors: ${visitorCount}`);
    
//     var obj = req.body;
//     console.log(obj);
    
//     // if (['adj_one', 'adj_two', 'adj_three', 'noun_one', 'noun_two'] in req.query) {
//     //     res.render('madlib.hbs', obj);
//     // } else {
//     //     res.render('fail.hbs', {"error": `Fields not Filled:`});
//     // }
    
//     res.render('madlib.hbs', obj);
    
//     pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
//         if (err) throw err;
//         console.log("updated visitor count");
//     });
// });

