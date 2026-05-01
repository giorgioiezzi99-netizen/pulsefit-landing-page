const header = document.querySelector(".site-header");
const waitlistLink = document.querySelector(".download .button");

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
});

waitlistLink?.addEventListener("click", () => {
  waitlistLink.textContent = "Opening email...";
});
