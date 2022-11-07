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

gsap.to(".card-one-title", {
    scrollTrigger: {
        trigger: ".card-one-title",
        scrub:true,
        start:"top bottom",
        end:"+=500",
    },
    x:0,
    opacity:1
})
gsap.to(".card-one-title-second", {
    scrollTrigger: {
        trigger: ".card-one-title",
        scrub:true,
        start:"top bottom",
        end:"+=500",
    },
    x:0,
    opacity:1
})
gsap.to(".card-one__image", {
    scrollTrigger: {
        trigger: ".card-one-title",
        scrub:true,
        start:"top bottom",
        end:"+=500",
    },
    x:0,
    opacity:1
})
gsap.to(".card-one__buttons", {
    scrollTrigger: {
        trigger: ".card-two-title",
        scrub:true,
        start:"top bottom",
        end:"+=100",
    },
    y:0,
    opacity:1
})

gsap.to(".card-two-title", {
    scrollTrigger: {
        trigger: ".card-one-title",
        scrub:true,
        start:"top bottom",
        end:"+=800",
    },
    x:0,
    opacity:1
})
gsap.to(".card-two-title-second", {
    scrollTrigger: {
        trigger: ".card-one-title",
        scrub:true,
        start:"top bottom",
        end:"+=800",
    },
    x:0,
    opacity:1
})
gsap.to(".card-two__image", {
    scrollTrigger: {
        trigger: ".card-one-title",
        scrub:true,
        start:"top bottom",
        end:"+=800",
    },
    x:0,
    opacity:1
})
gsap.to(".card-two__buttons", {
    scrollTrigger: {
        trigger: ".card-one-title",
        scrub:true,
        start:"top bottom",
        end:"+=800",
    },
    y:0,
    opacity:1
})
gsap.to(".threeD-title", {
    scrollTrigger: {
        trigger: ".threeD-title",
        scrub:true,
        start:"top bottom",
        end:"+=1200",
    },
    y:0,
    opacity:1,
})



