const express = require('express');
var router = express.Router();

// import statement
var https = require('https');

router.get('/links', function(req,res){
    var obj = {};
    
    var url = 'https://ion.tjhsst.edu/api/schedule?format=json';
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
