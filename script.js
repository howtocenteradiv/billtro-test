const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

var textWrapper = document.querySelector('.line-01');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.line-01 .letter',
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 2400 + 50 * i
    });

var textWrapper = document.querySelector('.line-02');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.line-02 .letter',
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 2400 + 50 * i
    });

var textWrapper = document.querySelector('.line-03');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.line-03 .letter',
        translateY: [200, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 2400 + 50 * i
    });

TweenMax.to(".wrapper", 2, {
    top: "-100%",
    ease: Expo.easeInOut,
    delay: 1.6
});

var tl = new TimelineMax();

tl.from(".loader", 1, {
    scaleY: "0%",
    y: 80,
    ease: Expo.easeInOut,
    delay: 1,
    transformOrigin: "50% 100%"
});

tl.to(".loader", 1, {
    height: "40vh",
    scaleY: "0%",
    ease: Expo.easeInOut,
    transformOrigin: "0% -100%"
});

TweenMax.to(".box", 2.4, {
    y: "-100%",
    ease: Expo.easeInOut,
    delay: 1.6,
});

let contact = document.querySelector('.contact');

gsap.from('.contact', {
    backgroundColor: "Yellow",
    duration: 3,
    repeat: -1,
    yoyo: true
})