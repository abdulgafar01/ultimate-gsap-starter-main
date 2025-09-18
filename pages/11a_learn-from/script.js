import gsap from "gsap";

const repeat = document.querySelector(".repeat")

const animation = gsap.from(".card",{
    y:60,
    opacity:0,
    duration:0.6,
    scale:0.95,
    delay:0.2,
    ease:"power1",
    stagger:0.3
})

repeat.addEventListener("click", ()=>{
    animation.restart()
})
