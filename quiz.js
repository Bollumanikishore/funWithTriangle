const sample = document.querySelector(".form");
const submit = document.querySelector("#submit");
var op = document.querySelector("#op");
const myArr = ["one right angle","12, 16, 20","Right angled","90°","no"];
function myFun(i)
{
    for(let j of myArr.values())
    {
        if(i === j)
        {
            return true;
            // console.log(j);
        }
}
}
function eventCall(){
    let count = 0;
    // let search = 0;
    const formdata = new FormData(sample);
    for(let i of formdata.values()){
        if(myFun(i))
        {
            count = count +1;
        }
    }
    console.log(count);
    op.innerHTML = "Your score is "+count;
}
submit.addEventListener("click",eventCall);