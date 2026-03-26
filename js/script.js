/* ================= LOADER REMOVAL ================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }, 1500); // Loader visible time
});


/* ================= SCROLL REVEAL ================= */
const revealElements = document.querySelectorAll(
  ".panel, .event-item, .guest-card"
);

// Add initial hidden state
revealElements.forEach(el => {
  el.classList.add("reveal");
});

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

// Run on scroll and on load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ================= SMOOTH NAV SCROLL ================= */
document.querySelectorAll(".fixed-nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});


/* ================= OPTIONAL: NAV BACKGROUND ON SCROLL ================= */
const nav = document.querySelector(".fixed-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.75)";
  } else {
    nav.style.background = "rgba(0,0,0,0.4)";
  }
});
/* ================= BACKGROUND INTERACTION ================= */
const blobs = document.querySelectorAll(".blob");

window.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;

  blobs.forEach((blob, i) => {
    blob.style.transform = `translate(${x * (i + 1)}px, ${y * (i + 1)}px)`;
  });
});
