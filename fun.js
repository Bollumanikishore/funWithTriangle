var a1 = document.querySelector("#Angle1");
var a2 = document.querySelector("#Angle2");
var a3 = document.querySelector("#Angle3");
var button = document.querySelector("#Button");
var output = document.querySelector("#output");

function clickEventHandler()
{
    var a = parseInt(a1.value);
    var b = parseInt(a2.value);
    var c = parseInt(a3.value);
    main_fun(a,b,c);
}
function main_fun(a,b,c)
{
var sol = a+b+c;
    if(sol === 180){
        output.innerHTML = "Triangle";
    }
    else{
        output.innerHTML = "Not Triangle";
    }
}
button.addEventListener("click",clickEventHandler);