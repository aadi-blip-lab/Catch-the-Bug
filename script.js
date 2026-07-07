const bug = document.getElementById("bug");

const scoreText = document.getElementById("score");

const bestText = document.getElementById("best");

let score = 0;

let best = localStorage.getItem("bestBugScore") || 0;

bestText.textContent = best;

function randomPosition(){

    const x = Math.random()*(window.innerWidth-80);

    const y = 120 + Math.random()*(window.innerHeight-220);

    bug.style.left = x+"px";

    bug.style.top = y+"px";

}

randomPosition();

setInterval(randomPosition,2500);

bug.addEventListener("mouseenter",()=>{

    randomPosition();

});

bug.addEventListener("click",(e)=>{

    e.stopPropagation();

    score++;

    scoreText.textContent = score;

    if(score>best){

        best=score;

        localStorage.setItem("bestBugScore",best);

        bestText.textContent=best;

    }

    randomPosition();

});

document.body.addEventListener("click",()=>{

    if(score>0){

        score--;

        scoreText.textContent=score;

    }

});
