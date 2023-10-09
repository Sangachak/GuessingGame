let randomNum=Math.floor((Math.random()*50)+1);

const input=document.querySelector('#guessInput');

const submit=document.querySelector("#sbt")

const result=document.querySelector('#hol');

const prev=document.querySelector('#prevGuess');

const rem=document.querySelector('#remGuess');

const newGame=document.querySelector('#newG');

let numGuess=0;

// let prevGuess=[];

let play=true;

if(play){
    // newGame.setAttribute('disabled','');
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess=parseInt(input.value);
        validate(guess);
    })  ; 
}

function validate(guess){
    if(guess>50||guess<1||isNaN(guess)){
        alert("Please play by rules and enter a valid number between 1 and 50");
    }else{
        check(guess);
    }
}   

function check(guess){
    if(guess===randomNum){
        result.innerHTML=`${guess} is right!`;
        rem.innerHTML='';
        prev.innerHTML=`The wrongs does not matter.`
        endGame();
    }else{
        
        prev.innerHTML+=`${guess}, `;
        numGuess++;
        const remaining=10-numGuess;
        rem.innerHTML=`${remaining}`;
        input.value='';
        if(guess>randomNum){
            result.innerHTML=`Too High`;
        }else if(guess<randomNum){
            result.innerHTML=`Too Low`;
        }
        if(remaining<=0){
            result.innerHTML=`You couldn't guess right. The number was ${randomNum}`;
            endGame();
        }
    }
}

function endGame(){   
    input.value='';
    input.setAttribute('disabled','');
    play=false;
    playAgain();    
}

function playAgain(){
    newGame.removeAttribute('disabled');
    newGame.addEventListener('click',(e)=>{
        randomNum=Math.floor((Math.random()*50)+1);
        // prevGuess=[];
        numGuess=0;
        rem.innerHTML='10';
        prev.innerHTML='';
        input.removeAttribute('disabled');
        play=true;
        input.value='';
        result.innerHTML='';
        newGame.setAttribute('disabled','')
    })
}

