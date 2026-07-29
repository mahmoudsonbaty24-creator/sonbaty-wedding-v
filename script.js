/* ==========================================
   Mahmoud ❤️ Wesam Wedding
   Version 3.0
========================================== */

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("music");

/* ================= Intro ================= */

enterBtn.addEventListener("click", () => {

    music.volume = 0.35;

    music.play().catch(() => {});

    intro.classList.add("hide");

});

/* ================= Smooth Scroll ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* ================= Countdown ================= */

const weddingDate = new Date("September 11, 2026 20:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance <= 0){

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(

        (distance % (1000*60*60*24)) / (1000*60*60)

    );

    const minutes = Math.floor(

        (distance % (1000*60*60)) / (1000*60)

    );

    const seconds = Math.floor(

        (distance % (1000*60)) / 1000

    );

    document.getElementById("days").textContent = String(days).padStart(2,"0");

    document.getElementById("hours").textContent = String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");

    document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);
/* ================= Reveal ================= */

const reveals = document.querySelectorAll("section");

reveals.forEach(section => {

    section.classList.add("reveal");

});

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("active");

        }

    });

});

/* ================= Scroll To Top ================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ================= Floating Hearts ================= */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=Math.random()>0.5?"🤍":"✨";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(6+Math.random()*6)+"s";

    heart.style.fontSize=(16+Math.random()*18)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,1800);
