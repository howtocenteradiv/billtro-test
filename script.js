
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


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


// FAQ Accordion

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach((accordion) => {
      const title = accordion.querySelector('.accordion-title');

      title.addEventListener('click', () => {
          // Close all open accordions
          accordions.forEach((item) => {
              if (item !== accordion) {
                  item.classList.remove('open');
                  item.querySelector('.accordion-content').style.display = 'none';
              }
          });

          // Toggle the current accordion
          const content = accordion.querySelector('.accordion-content');
          if (accordion.classList.contains('open')) {
              accordion.classList.remove('open');
              content.style.display = 'none';
          } else {
              accordion.classList.add('open');
              content.style.display = 'block';
          }
      });
  });
});



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

// Scroll To Link

document.querySelectorAll('.scroll-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Navbar

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const fullScreenMenu = document.getElementById('fullScreenMenu');
  const closeBtn = document.getElementById('closeBtn');
  const menuLinks = document.querySelectorAll('.menu-links li a');

  // Function to close the menu
  function closeMenu() {
      fullScreenMenu.classList.remove('show');
      document.body.classList.remove('no-scroll');
  }

  // Open menu on menu icon click
  menuIcon.addEventListener('click', function() {
      fullScreenMenu.classList.add('show');
      document.body.classList.add('no-scroll');
  });

  // Close menu on close button click
  closeBtn.addEventListener('click', closeMenu);

  // Close menu when any menu link is clicked
  menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
  });
});



// Pricing Modal

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable body scrolling
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable body scrolling
}

// Comparison chart accordion

function toggleAccordion() {
  const accordion = document.getElementById('accordion');
  const indicator = document.getElementById('indicator');
  accordion.classList.toggle('open');
  indicator.textContent = accordion.classList.contains('open') ? '▲' : '▼';
}
