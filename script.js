let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let val3 = document.getElementById('val3');


let values = ['😀','😜','😅','😂','🤣','😇','😒','🥰','😎',
                '🤩','😨','😵','😱','🤕','😲','😔'];

let getRandomEmoji = function(){
    return values[Math.floor(Math.random()*16)];
};

let speed = document.getElementById('speed');
let animationId;

speed.onchange = function(ev){
    document.documentElement.style.setProperty('--speed',ev.target.value);

    updateAnimation(ev.target.value);
    console.log(ev.target.value)
}

function updateAnimation(newspeed=1){
    clearInterval(animationId);
    animationId = setInterval(function(){
        val1.innerText = getRandomEmoji();
        val2.innerText = getRandomEmoji();
        val3.innerText = getRandomEmoji();
    },1000/newspeed);
}

updateAnimation();