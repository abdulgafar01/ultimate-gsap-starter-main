import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, i) => {
    gsap.fromTo(
        bar,
        { scaleY: 0.4 }, 
         {scaleY:1.6,
            duration: 0.5,
            ease: "power1.inOut",
            repeat: -1,
            stagger: 0.1,
            yoyo: true,
            delay: i * 0.1
        } )     })