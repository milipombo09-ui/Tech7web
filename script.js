function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 90) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("successPopup").style.display = "flex";
  form.reset();
});

function closeSuccess() {
  document.getElementById("successPopup").style.display = "none";
}