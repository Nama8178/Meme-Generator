let timer = 60;
let score = 0;
let tar = 0;
document.querySelector(".playBoard").addEventListener("click",function(dets){
    tar = (Number(dets.target.textContent));
    if (tar === hitNum) {
        scoreUpdate();
        bubbleMaker();
        hit();
    }
})
function bubbleMaker() {
    let bubble = "";
for(let i=1;i<=336;i++){
    let rn = Math.floor(Math.random()*10); 
    bubble += `<div id="bubble">${rn}</div>`
}
document.querySelector(".playBoard").innerHTML = bubble;
}
bubbleMaker();
let hitNum = 0;

function hit(){
     hitNum = Math.floor(Math.random()*10);
     document.querySelector("#hit").textContent = hitNum;
}
function scoreUpdate(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
function runtimer() {
    let timertn = setInterval(function (){
        if(timer>0){
            timer -=1 ;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timertn); 
            document.querySelector(".playBoard").innerHTML = "Game Over 😵😵";
        }
    }, 1000);
}
runtimer();
hit();
//restart
   function restart() {
    score = 0;
    timer = 60;
    hitNum = 0;
    bubbleMaker();
    runtimer();
    hit();
   }
// sound
let song = document.getElementById("song");
let cntrlIcn = document.getElementById("volIcn")
let f = true;
song.play();
function playpause(){
    if(f){
        song.pause();
        f = false;
        document.getElementById('volIcn').className = "fa-solid fa-volume-xmark fa-2xl";
    }
    else {
        f = true;
        song.play();
        document.getElementById('volIcn').className = "fa-solid fa-volume-high fa-2xl";
    }
}