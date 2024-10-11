document.addEventListener("DOMContentLoaded", function () {
  const menuHamburger = document.getElementById(
    "menu-hamburger"
  ) as HTMLElement;
  menuHamburger.addEventListener("click", toggleAside);
});

function toggleAside(): void {
  const aside = document.getElementById("menu-aside") as HTMLElement;
  const button = document.querySelector(".toggle-aside") as HTMLElement;
  const buttonIcon = button.querySelector("i") as HTMLElement;

  aside.classList.toggle("open");
  button.classList.toggle("open");

  if (buttonIcon.classList.contains("fa-bars")) {
    buttonIcon.classList.remove("fa-bars");
    buttonIcon.classList.add("fa-times");
    buttonIcon.setAttribute("aria-label", "Close menu");
    aside.setAttribute("aria-hidden", "false");
    aside.setAttribute("aria-expanded", "true");
    aside.style.setProperty("visibility", "visible");
  } else {
    buttonIcon.classList.remove("fa-times");
    buttonIcon.classList.add("fa-bars");
    buttonIcon.setAttribute("aria-label", "Open menu");
    aside.setAttribute("aria-hidden", "true");
    aside.setAttribute("aria-expanded", "false");
    aside.style.setProperty("visibility", "hidden");
  }
}
