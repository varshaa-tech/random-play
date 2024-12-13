let number=Math.ceil(Math.random()*100);
console.log(number);
function checkGuess(){
    let value=document.getElementById("userInput").value;
    if(value>number){
        document.getElementById("gameResult").innerText="TOO HIGH!! TRY AGAIN.";
        document.getElementById("gameResult").style.color="green";
        document.getElementById("gameResult").style.backgroundColor="white";
        value.textContent=" ";
    }
    else if(value<number){
        document.getElementById("gameResult").innerText="TOO LOW! TRY AGAIN.";
        document.getElementById("gameResult").style.color="red";
        document.getElementById("gameResult").style.backgroundColor="white";
        value.textContent=" ";
    }
    else{
        document.getElementById("gameResult").innerText="CONGRATULATION THIS IS CORRECT ANSWER!!!";
        document.getElementById("gameResult").style.color="yellow";
        document.getElementById("gameResult").style.backgroundColor="white";
        value.textContent=" ";
    }
}