
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

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
    delay: (el, i) => 400 + 50 * i
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
    delay: (el, i) => 400 + 50 * i
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
    delay: (el, i) => 400 + 50 * i
  });

TweenMax.to(".box", 2.4, {
  y: "-100%",
  ease: Expo.easeInOut,
  delay: 0,
});



gsap.from('.header', {
  y: "-100px",
  opacity: 0,
  duration: 1.5,
  delay: 0.7
});

gsap.from('.marketing-wrapper', {
  opacity: 0,
  duration: 1,
  delay: 1
});


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// Advantages

let tlAdvantage = gsap.timeline({
  scrollTrigger: {
    trigger: ".advantages",
    pin: true,
    start: '50% 50%',
    end: '150% 50%',
    scrub: true,
  }
});

tlAdvantage.to(".advantage__inventory", {
  opacity: 1,
  filter: "blur(0px)"
})
  .to(".advantage__records", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__cashflow", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__vendor", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__pos", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__ledger", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__team", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__reports", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__payment", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__discount", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__alerts", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__history", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })
  .to(".advantage__support", {
    opacity: 1,
    filter: "blur(0px)",
    delay: -0.3
  })


// Showcase

let th = gsap.timeline({
  scrollTrigger: {
    trigger: ".showcase__message",
    start: "0% 25%",
    end: "50% 40%",
    scrub: 1,
  }
})

th.from(".showcase__message", {
  opacity: 0,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".showcase",
    start: "0% 40%",
    end: "50% 80%",
    scrub: 1,
  }
})


tl.from(".showcase-three", {
  bottom: "-200px",
  opacity: 0,
});

tl.from(".showcase-two, .showcase-four", {
  bottom: "-100px",
  opacity: 0,
  delay: 1
})

tl.from(".showcase-one, .showcase-five", {
  bottom: "-50px",
  opacity: 0,
  delay: 1
})

// Features