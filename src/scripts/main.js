const menuIcon = document.getElementById('menu');
const navLinks = document.querySelector('.navlinks')
menuIcon.onclick = () => {
  menuIcon.name = menuIcon.name === "menu-outline" ? "close-outline" : "menu-outline";
  navLinks.classList.toggle("left-[0%]")
}





// testimonials section 

const content = document.querySelectorAll('.moreContent');
const fullContent = document.querySelectorAll('.fullContent');
const testimonialBtn = document.querySelector('#testimonialBtn');

testimonialBtn.addEventListener('click', () => {
  if (testimonialBtn.innerText === "Show more") {
    content.forEach((contents) => {
      contents.classList.remove('hidden');
    });
    testimonialBtn.innerText = "Show less";
  }

  else {
    content.forEach((contents) => {
      contents.classList.add('hidden');
    });

    testimonialBtn.innerText = "Show more";
  }
});


// Projects Section

window.addEventListener("load", function () {
  const sr = ScrollReveal();

  if (window.innerWidth < 768) {
    const timelineContent = document.querySelector(".timeline-content");
    if (timelineContent.classList.contains("js--fadeInLeft")) {
      timelineContent.classList.remove("js--fadeInLeft");
      timelineContent.classList.add("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800
  });
});



// events section


const carousel = document.querySelector("#carousel");
const caroudchildren = [...carousel.children];

let isDragging = false;
let startX, startScrollLeft;

// // infinite loop
// let cardperView = Math.round(carousel.offsetWidth / firstCardWidth); //number of cards that can fit in the carousel at once


// // insert firt card copies to the end
// caroudchildren.slice(-cardperView).forEach(card => {
//   carousel.insertAdjacentHTML("beforeend" , card.outerHTML);
// });


// caroudchildren.slice(-cardperView).reverse().forEach(card => {
//   carousel.insertAdjacentHTML("afterbegin" , card.outerHTML);
// });

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // record initial cursor and scroll position of the cursor 

  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragging) return;

  // upadete the scroll position of the carousel based on the cursor movement 
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = (e) => {
  isDragging = false;
  carousel.classList.remove("dragging")
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);
