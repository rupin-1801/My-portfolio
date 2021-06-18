const gcount = document.getElementById("rem_guess");
const number = document.getElementById("n");
const correct = document.getElementById("correct");
const glabel = document.getElementById("glabel");
const label = document.getElementById("label");
const pre_guess = document.getElementById("guesses");
const reset = document.getElementById("reset");
const guess_value = document.getElementById("guess");
const guess_box = document.getElementById("user-guess");
let value=100;
var guess;
var guess_count;
number.addEventListener("keydown", (k) => {
    if(k.key == "Enter"){
        if(number.value >= 2){
            while(pre_guess.firstChild) pre_guess.removeChild(pre_guess.firstChild);
            number.style.display="none";
            label.style.display="none";
            guess_box.style.display="flex";
            value = number.value;
            gcount.innerText="Guess:";
            guess = Math.floor(Math.random()*value)+1;
            guess_value.disabled=false;
            glabel.innerText="Enter your guess[1, "+number.value+"]: ";
            guess_count = Math.floor(Math.log2(value));
            gcount.innerText+=" "+guess_count;
            guess_value.focus();
            reset.style.display="inline";
        }
        else{
            correct.innerText="Enter value greater than 1";
            setTimeout(()=> {
                correct.innerText="";
            }, 1000);
        }
    }
});
guess_value.addEventListener("keydown", (k) => {
    if(k.key == "Enter"){
        if(guess_value.value == guess){
            game_over(1);
        }
        else{
            game_over(0);
        }
    }
});
reset.addEventListener("click", () => {
    number.style.display="block";
    label.style.display="block";
    number.value="";
    number.focus();
    gcount.innerText="";
    correct.innerText="";
    guess_value.value="";
    guess_box.style.display="none";
    reset.style.display="none";
    glabel.innerText="Enter your guess: ";
    while(pre_guess.firstChild) pre_guess.removeChild(pre_guess.firstChild);
});
function game_over(n){
    let div = document.createElement("div");
    div.innerText = guess_value.value;
    div.className="last_guess";
    guess_count--;
    if(n == 0){
        if(guess_value.value > guess){
            div.style.backgroundColor="rgb(150,30,30)";
        }
        else{
            div.style.backgroundColor="rgb(30,150,30)";
        }
    }
    pre_guess.appendChild(div);
    pre_guess.scrollTop = pre_guess.scrollHeight;
    if(n == 1){
        guess_value.disabled = true;
        correct.innerText="Congrats! You guessed it right : "+guess;
        var guesser = pre_guess.childNodes;
        for(var i = 0; i<guesser.length; i++){
            guesser[i].style.backgroundColor="rgba(255, 255, 255, 0.2)";
        }
    }
    else if(guess_count <= 0){
        guess_value.disabled = true;
        correct.innerText="Correct Answer : "+guess;
        var guesser = pre_guess.childNodes;
        for(var i = 0; i<guesser.length; i++){
            guesser[i].style.backgroundColor="rgba(255, 255, 255, 0.2)";
        }
    }
    guess_value.value="";
    gcount.innerText="Guess: "+guess_count;
}