console.log("js is connected")

let num = 0
let num1 = 0
let num2 = 0

document.getElementById("btn").onclick = function(){
    console.log("btn is working")
    num = num+1
    console.log(num)
    document.getElementById("head").innerHTML = num
}

document.getElementById("btn1").onclick = function(){
    console.log("btn is working")
    num = 0
    document.getElementById("head").innerHTML = num
}

document.getElementById("btn2").onclick = function(){
    console.log("btn is working")
    num = num-1
    console.log(num)
    document.getElementById("head").innerHTML = num
    if(num<=0)
    {
        num = 0
        console.log("error")
        document.getElementById("head").innerHTML = "error"
    }
    else if(num==1)
    {
        console.log("1 is selected")
        window.alert("1 is selected")
    }
    
}











document.getElementById("btn11").onclick = function(){
    console.log("btn is working")
    num1 = num1+1
    console.log(num1)
    document.getElementById("head1").innerHTML = num1
}

document.getElementById("btn12").onclick = function(){
    console.log("btn is working")
    num1 = 0
    document.getElementById("head1").innerHTML = num1
}

document.getElementById("btn13").onclick = function(){
    console.log("btn is working")
    num1 = num1-1
    console.log(num1)
    document.getElementById("head1").innerHTML = num1
    if(num1<=0)
    {
        num1 = 0
        console.log("error")
        document.getElementById("head1").innerHTML = "error"
    }
}
















document.getElementById("btn21").onclick = function(){
    console.log("btn is working")

    if(check.checked){
        console.log("Is checked")
        num2 = num + num1
        if(num2 == 5){
            window.alert("correct")
        }
        else{
            window.alert("wrong")
        }
        document.getElementById("head2").innerHTML = num2
    }
    else if(check1.checked){
        num2 = num - num1
        document.getElementById("head2").innerHTML = num2
    }
    else if(check2.checked){
        num2 = num * num1
        document.getElementById("head2").innerHTML = num2
    }
    else if(check3.checked){
        num2 = num / num1
        document.getElementById("head2").innerHTML = num2
    }
    else{
        console.log("not checked")
    }
}