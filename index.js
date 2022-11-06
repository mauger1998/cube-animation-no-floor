gsap.registerPlugin(ScrollTrigger)

const cube = document.querySelector(".smallest-cube")

cube.addEventListener("click", (e) => {
    gsap.to(".smallest-cube", {
        stagger:0.2,
        y:"-250%",
        x:"100%",
        rotateZ:"180deg",
    })
})