// ==========================
// TEXT TYPING (OPENING)
// ==========================
const text = "Welcome To My Portfolio Website";
let i = 0;

function ketik() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(ketik, 80);
  } else {
    setTimeout(hilang, 800);
  }
}

// ==========================
// HILANGKAN OPENING
// ==========================
function hilang() {
  const opening = document.getElementById("opening");

  opening.classList.add("hide");

  setTimeout(() => {
    opening.style.display = "none";
  }, 1000);
}

ketik();


// ==========================
// REVEAL ANIMATION (SCROLL)
// ==========================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ==========================
// NAVBAR ACTIVE
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// ==========================
// SLIDE TEXT
// ==========================
function revealSlideText() {
  const texts = document.querySelectorAll(".slide-text");

  texts.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealSlideText);
window.addEventListener("load", revealSlideText);