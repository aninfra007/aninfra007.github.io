// ==============================
// AN INFRA & REALTY
// Premium Website Script
// ==============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header Effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "#000";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(0,0,0,.92)";

        header.style.boxShadow = "none";

    }

});

// Counter Animation
const counters = document.querySelectorAll(".box h2");

const speed = 80;

counters.forEach(counter => {

    const animate = () => {

        const value = +counter.innerText.replace("+","").replace("%","");

        const data = +counter.getAttribute("data-count") || value;

        const time = data / speed;

        if(value < data){

            counter.innerText = Math.ceil(value + time);

            setTimeout(animate,30);

        }else{

            if(counter.innerText.includes("%")){

                counter.innerText=data+"%";

            }else{

                counter.innerText=data+"+";

            }

        }

    };

    animate();

});

// Fade Animation
const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// Current Year
const year=document.querySelector(".copyright");

if(year){

year.innerHTML=
"© "+new Date().getFullYear()+
" AN Infra & Realty Construction & Property Consultant. All Rights Reserved.";

}

console.log("AN Infra Website Loaded Successfully.");
