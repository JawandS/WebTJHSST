const express = require('express');
var router = express.Router();

// // MYSQL SETUP
var mysql = require('mysql');

// https://www.w3schools.com/nodejs/nodejs_mysql.asp

var sql_params = {
  connectionLimit : 10,
  user            : process.env.DIRECTOR_DATABASE_USERNAME,
  password        : process.env.DIRECTOR_DATABASE_PASSWORD,
  host            : process.env.DIRECTOR_DATABASE_HOST,
  port            : process.env.DIRECTOR_DATABASE_PORT,
  database        : process.env.DIRECTOR_DATABASE_NAME
};

var pool  = mysql.createPool(sql_params);
var visitorCount = 0;

// SQL - get the visitor count
pool.query('SELECT * FROM data', function(err, result, fields) {
    if (err) throw err;
    console.log(result);
    visitorCount = parseInt(result[0]['visits']);
});

router.get('/math-home', function(req,res){
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    
    var obj = {};
    
    res.render('math-home.hbs', obj);
    
    pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count and rendering");
    });
});


router.get('/math/:num', function(req,res){
    var number = req.params.num;
    
    if(int(number))
    var obj = {
        'number': number,
        'even': number % 2 == 0,
        'odd': number % 2 != 0,
        'power_two': Math.pow(number, 2),
        'power_three': Math.pow(number, 3),
        'power_four': Math.pow(number, 4)
    };
    
    var input = req.query;
    if (Object.keys(input).includes("format")){
        console.log(`Input to math/num ${input['format']}`);
        if(input['format'] == 'json'){
            res.json(obj);
        }
    }
    
    res.render('math.hbs', obj);
    console.log(`url number ${number}`)
    
    // increment visitory count
    visitorCount++; 
    console.log(`Visitors: ${visitorCount}`);
    pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count and rendering");
    });
});

module.exports = router;