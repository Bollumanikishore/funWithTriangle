const inputs = document.querySelectorAll(".values");
const button = document.querySelector("#Button");
const output = document.querySelector("#output");
function ClickEventHandler()
function ClickEventHandler()
{
    var input1 = Number(inputs[0].value);
    var input2 = Number(inputs[1].value);
    var input3 = Number(inputs[2].value);
    // console.log(input);
    var sol = (input1+input2+input3)*0.5;

    var sol1 = Math.sqrt(sol*(sol-input1)*(sol-input2)*(sol-input3));

    // console.log(add); 
    output.innerText = "Area of a triangle using heron's formula is "+sol1+ " units";
}
button.addEventListener("click", ClickEventHandler);