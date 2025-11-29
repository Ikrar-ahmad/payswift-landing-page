
// 🌙 DARK / LIGHT MODE TOGGLE
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// 📱 MOBILE NAVIGATION MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// 🔥 SCROLL REVEAL SECTION ANIMATION
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll() {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const visiblePoint = window.innerHeight - 140;
    if (top < visiblePoint) el.classList.add("active");
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ⭐ BUTTON PRESS / TAP ANIMATION
document.querySelectorAll(".animated-btn").forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.94)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});

// 🔳 NAVBAR SHADOW ON SCROLL
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.style.boxShadow =
    window.scrollY > 40 ? "0 6px 26px rgba(0,0,0,0.15)" : "none";
});
