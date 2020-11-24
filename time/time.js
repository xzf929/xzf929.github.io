function startTime(){
    var td = new Date();
    var y = td.getFullYear();
    var m = td.getMonth()+1;
    var d = td.getDate();
    var h =td.getHours();
    var mm = td.getMinutes();
    var s = td.getSeconds();
    m = checkTime(m);
    d = checkTime(d);
    h = checkTime(h);
    mm = checkTime(mm);
    s = checkTime(s);
    document.getElementById("demo").innerHTML = 
    y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + s;
    // setTimeout({startTime()}, 500);
}

function checkTime(i){
    if(i<10){
        i = "0" + i;
    }
    return i;
}

// window.setInterval("startTime()",1000);
