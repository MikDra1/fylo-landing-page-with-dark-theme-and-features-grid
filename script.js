const btnHero = document.querySelector(".hero__btn");
const ctaInput = document.querySelector(".cta__input");
const ctaLabel = document.querySelector(".cta__label");
const ctaForm = document.querySelector(".cta__form");
const header = document.querySelector(".header");

window.addEventListener("load", function () {
  if (window.innerWidth >= 1000) {
    btnHero.addEventListener("click", function () {
      btnHero.classList.add("special-animation");
    });
  }
});

ctaInput.addEventListener("input", function (e) {
  const isEmail = e.target.value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? true
    : false;

  ctaLabel.classList.add(isEmail ? "display__none" : "display__block");
  ctaLabel.classList.remove(isEmail ? "display__block" : "display__none");

  if (e.target.value === "") {
    ctaLabel.classList.remove("display__block", "display__none");
  }
});

ctaForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

const scrollOffset = 1;

let prevScrollpos = window.pageYOffset;

/* monitor when the page is being scrolled */
window.addEventListener("load", function () {
  if (window.innerWidth > 1600) {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 1) {
        header.style.boxShadow = "none";
        return;
      }
      /* check if the scroll offset is passed */
      if (window.scrollY > scrollOffset) {
        /* get the new page position after scrolling */
        let currentScrollPos = window.scrollY;
        /* check the new page position with the old position */
        if (prevScrollpos > currentScrollPos) {
          /* if scrolling UP, show the sticky element */
          header.style.boxShadow = "2px 2px 20px hsl(176, 68%, 70%)";
        } else {
          /* if scrolling DOWN, hide the sticky element */
          header.style.boxShadow = "2px 2px 20px hsl(198, 60%, 45%)";
        }
        /* set the page position, so it can be checked the next time */
        prevScrollpos = currentScrollPos;
      }
    });
  }
});
