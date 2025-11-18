// Mobile menu toggle
const menu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (menu) {
  menu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Contact form feedback
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.textContent = "✅ Thank you! Your message has been sent.";
    form.reset();
  });
}
