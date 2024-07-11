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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

gsap.from('.header',{
  y:"-100px",
  opacity:0,
  duration:1.5,
  delay:0.7
});

gsap.from('.marketing-wrapper',{
  opacity:0,
  duration:1,
  delay:1
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


// Features

const slide = {
  elements: gsap.utils.toArray('.slide'),
  images: gsap.utils.toArray('.slide-img'),
  prev: document.querySelector('.slider-button-previous'),
  next: document.querySelector('.slider-button-next'),

  duration: 1.4,
  ease: Power4.easeInOut,
}

let current = 0;
let total = slide.elements.length;
const slidesWrap = gsap.utils.wrap(0, total);



const slideNext = (index, direction = 1, duration = slide.duration) => {
  const tl = gsap.timeline({ defaults: { duration: duration, ease: slide.ease } });

  tl.fromTo(
      slide.elements[index],
      {
          yPercent: direction > 0 ? 100 : -100,
      },
      {
          yPercent: 0,
      }
  ).
      fromTo(
          slide.images[index],
          {
              yPercent: direction > 0 ? -100 : 100,
              scale: 0.8,
          },
          {
              yPercent: 0,
              scale: 1,
          },
          0
      );
};

const slidePrev = (index, direction = 1, duration = slide.duration) => {
  const tl = gsap.timeline({ defaults: { duration: duration, ease: slide.ease } });

  tl.to(
      slide.elements[index],
      {
          yPercent: direction > 0 ? -100 : 100,
      },
  ).
      to(
          slide.images[index],
          {
              yPercent: direction > 0 ? 100 : -100,
              scale: 0,
          },
          0
      );
}


slide.elements.forEach((el, index) => {
  index === current ? slideNext(index, 1, 0) : slidePrev(index, 1, 0);
});



slide.prev.addEventListener('click', () => {
  const prev = current;
  current = slidesWrap(current - 1);

  slideNext(current, -1);
  slidePrev(prev, -1);
});

slide.next.addEventListener('click', () => {
  const prev = current;
  current = slidesWrap(current + 1);

  slideNext(current);
  slidePrev(prev);
});


// Showreel

window.onload = function () {
  let cosmos = document.querySelectorAll(".cosmos");
  let total = cosmos.length;

  for(let i = 0; i < total; i++) {
      let angle = (360/total)*i;
      let transform = `rotate(${angle}deg) translate(55vh)`;
      cosmos[i].style.transform = transform;
      let cosmosItems = cosmos[i].querySelectorAll('.cosmic-item');

      for(let j = 0; j < cosmosItems.length; j++) {
          cosmosItems[j].style.animationDelay = `${j * 0.5}s`
      }
  }


};