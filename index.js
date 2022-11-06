gsap.registerPlugin(ScrollTrigger)

const cube = document.querySelector(".smallest-cube")
const arrow = document.querySelector(".arrow")
const below = document.querySelector(".portfolio-home__below")

cube.addEventListener("click", (e) => {
    gsap.to(".smallest-cube", {
        stagger:0.2,
        y:"-250%",
        x:"100%",
        rotateZ:"180deg",
    })
})


    gsap.to(below, {
    y:"0%",
    duration:1,
    opacity:1,
    delay:1,
})

