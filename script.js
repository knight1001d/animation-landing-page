document.addEventListener("DOMContentLoaded", () => {
  function counter(id, end, duration) {
    let obj = document.getElementById(id);
    let current = 0;
    let step = duration / end;
    let timer = setInterval(() => {
      current++;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  let counters = [
    { id: "count1", end: 28, duration: 2500 },
    { id: "count2", end: 13, duration: 2500 },
    { id: "count3", end: 68, duration: 2500 },
    { id: "count4", end: 10, duration: 2500 }
  ];

  let started = [false, false, false, false];

  window.addEventListener('scroll', () => {
    counters.forEach((counterObj, index) => {
      if (!started[index] && isInViewport(document.getElementById(counterObj.id))) {
        counter(counterObj.id, counterObj.end, counterObj.duration);
        started[index] = true;
      }
    });
  });
});
// Number Increment Ends

// Mobile Animation Starts
var swiper = new Swiper(".mobile-pages-slider", {
  grabCursor: true,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
// Mobile Animation Ends



// Cards Animation Starts
document.addEventListener("DOMContentLoaded", function() {
  var cards = document.querySelectorAll(".card");
  var delay = 1000; // Delay in milliseconds (1 second)

  cards.forEach(function(card, index) {
    setTimeout(function() {
      card.classList.add("animate");
    }, delay * index);  
  });
});
// Cards Animation Ends