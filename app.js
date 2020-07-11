
var min = 00;
var sec =00;
var msec =00 ;
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
var interval;
function timer(){
    msec++;
    msecheading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secheading.innerHTML = sec;
        msec = 00;
    }else if (sec >=60){
        min++;
        sec = 00;
        minheading.innerHTML = min;
    }

}
function start(){
    interval = setInterval(timer,10);
    document.getElementById("startbtn").disabled = true;
    document.getElementById("stopbtn").disabled = false;
}
function stop(){
    clearInterval(interval);
    document.getElementById("stopbtn").disabled = true;
    document.getElementById("startbtn").disabled = false;
}
function reset(){
    min = "00";
    sec = "00";
    msec = "00";
    minheading.innerHTML = min;
    secheading.innerHTML = sec;
    msecheading.innerHTML = msec;
    clearInterval(interval);
    document.getElementById("stopbtn").disabled = false;
    document.getElementById("startbtn").disabled = false;
}

function getname(){
    var x = document.getElementById("namein").value
    var y = min + ":" +sec+":"+ msec
    document.getElementById("data").innerHTML = y;  
    var b = document.createElement("p");
    var t = document.createTextNode(x+ " = " + y);
    b.appendChild(t);
    document.body.appendChild(b);
}



    
