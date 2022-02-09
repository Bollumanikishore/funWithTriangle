var mani = document.querySelector("#mani");
var kishore = document.querySelector("#kishore");
var manikishore = document.querySelector("#manikishore");
var button = document.querySelector("#submit");
function funEventHandler()
{
    var m = mani.value;
    if(m === 1)
    {
        console.log("correct!");
    }
    else{
        console.log("Not correct!");
    }
}
button.addEventListener("click",funEventHandler);