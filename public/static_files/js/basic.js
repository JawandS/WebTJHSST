var count = 0;

var h = setInterval(function(){
    
    var s = document.getElementById('counter');
    count++;
    s.innerHTML = count;
    
}, 100)