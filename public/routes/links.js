const express = require('express');
var router = express.Router();

// import statement
var https = require('https');

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


router.get('/links', function(req,res){
    var obj = {};
    
    var url = 'https://user.tjhsst.edu/2023jsingh/math/5?format=json';
    var options = {};
    
    https.get(url, options, function(response) {
        var rawData = '';
        
        response.on('data', function(chunk) {
            rawData += chunk;
        });   
    	
        response.on('end', function() {
            console.log(rawData);
            obj = JSON.parse(rawData);
            // res.json(obj);
            res.render('links.hbs', obj);
        });
        
        }).on('error', function(e) {
	        res.render('links.hbs');
    });
    
    // res.json(obj);
    // res.render('links.hbs', obj);
    
    visitorCount++; 
    // console.log(`Visitors: ${visitorCount}`);
    pool.query(`UPDATE data SET visits = ${visitorCount}`, function(err, result, fields) {
        if (err) throw err;
        console.log("updated visitor count and rendering");
    });
    
});

module.exports = router;
