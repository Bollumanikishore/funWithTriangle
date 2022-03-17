// const inputs = document.querySelector(".values");
// const inputs1 = document.querySelector(".values1");
const inputs = document.querySelectorAll(".values");
const button = document.querySelector("#Button");
const output = document.querySelector("#output");
function ClickEventHandler()
{
    var input1 = Number(inputs[0].value);
    var input2 = Number(inputs[1].value);
    // console.log(input);
    var add = Math.sqrt(Math.pow(input1,2) + Math.pow(input2,2));
    // console.log(add); 
    output.innerText = "Hypotenuse is " + add;
}
button.addEventListener("click", ClickEventHandler);