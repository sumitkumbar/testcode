// let num1=document.getElementById("num1")
// // let num2=document.getElementById("num2")
// let add=document.getElementById("add")
// let sub=document.getElementById("sub")
// let mut=document.getElementById("mul")
// let div=document.getElementById("div")
// let h3=document.getElementById("h3")

function result_add(){
    let result= parseInt(num1.value) + parseInt(num2.value)
    h3.innerText ="the answer is :"+result;
}

function result_mut(){
    let result = parseFloat(num1.value) * parseFloat(num2.value)
    h3.innerText = "the answer is :" +result;

}
function result_div(){
    let result = parseFloat(num1.value) / parseFloat(num2.value)
    h3.innerText = "the answer is :" + result;
}
function result_sub(){
    let result = parseFloat(num1.value) - parseFloat(num2.value)
    h3.innerText = "the answer is :" + result;
}
