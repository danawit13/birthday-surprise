function startSurprise(){
document.getElementById("home").style.display="none";
show("mainPage");

typeText(`Happy Birthday🎂!

Thank you for teaching not only code,
but patience, creativity, and problem-solving.
May your life be as elegant as clean code
and as powerful as a perfect algorithm.`,
"typing");
}

function show(id){
document.getElementById(id).classList.remove("hidden");
}

function hideAll(){
document.querySelectorAll(".section").forEach(s=>s.style.display="none");
}

function goCelebrate(){
hideAll();
document.getElementById("celebratePage").style.display="flex";
startConfetti();
}

function goLast(){
hideAll();
document.getElementById("lastPage").style.display="flex";
}

/* typing effect */
function typeText(text,id){
let i=0;
let el=document.getElementById(id);

function typing(){
if(i<text.length){
el.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,40);
}
}
typing();
}

/* cake & gift */
function showCake(){
document.getElementById("cake").classList.remove("hidden");
}

function showGift(){
document.getElementById("watch").classList.remove("hidden");
}

/* confetti */
function startConfetti(){
const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let pieces=[];

for(let i=0;i<120;i++){
pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*6+2,
speed:Math.random()*3+2
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{
ctx.fillStyle="white";
ctx.fillRect(p.x,p.y,p.size,p.size);
p.y+=p.speed;
if(p.y>canvas.height)p.y=0;
});

requestAnimationFrame(draw);
}
draw();
}

/* Bye Button */
function sayBye(){

// show waving hand
document.getElementById("wave").classList.remove("hidden");

// wait 3 seconds then restart
setTimeout(()=>{
location.reload(); // returns to first page
},3000);

}