let randomNumber = Math.floor((Math.random()*10)+1);

let lblChances = document.getElementById("lblChances");
let lblResult = document.getElementById("lblResult");



let count = 3;
lblChances.innerHTML = `Chances left : ${count}`;

function guess(){
    if(count > 0){
        let txtInput = Number(document.getElementById("txtInput").value);
        if(txtInput == randomNumber){
            lblResult.innerHTML = "You Win...!🤩";
            
            lblChances.innerHTML = "";
        }else if(randomNumber > txtInput){
            lblResult.innerHTML = "Your Number is Too low...!🥱";
            imgBox.innerHTML=`<img src="https://media.tenor.com/6I9cJ0kdQXIAAAAM/this-is-the-way-tom-the-cat.gif" alt="" class="mx-auto">`;
        }else{
            lblResult.innerHTML = "Your Number is Too high...!😬";
            imgBox.innerHTML=`<img src="https://media.tenor.com/6I9cJ0kdQXIAAAAM/this-is-the-way-tom-the-cat.gif" alt="" class="mx-auto">`;
        }
        count--;
        lblChances.innerHTML = `Chances left : ${count}`;
    }else{
        lblResult.innerHTML = `<p class="text-danger">Game oveer💀</p> The correct number was ${randomNumber}`;
    }
}