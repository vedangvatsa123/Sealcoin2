const navigations = document.querySelectorAll("[data-navigation]");
navigations.forEach((navigation) => {
  const button = navigation.querySelector("[data-navigationButton]");
  const list = navigation.querySelector("[data-navigationList]");
  button.addEventListener("mousedown", (e) => {
    if (list.classList.contains("hidden")) {
      list.classList.remove("hidden");
    } else {
      list.classList.add("hidden");
    }
  });
  document.body.addEventListener("mousedown", (e) => {
    let isClickInsideMom = navigation.contains(e.target);
    let isClickInsideChild = list.contains(e.target);
    if (!isClickInsideMom && !isClickInsideChild) {
      list.classList.add("hidden");
    }
  });
});

const slIcons = document.querySelectorAll("[data-slicon]");
let slideIdex = 0;
showSlides();
function showSlides() {
  if (slIcons !== undefined) {
    slIcons.forEach((slicon) => {
      let slides = slicon.getElementsByTagName("li");
      for (let index = 0; index < slides.length; index++) {
        slides[index].classList.remove("inline-block");
        slides[index].classList.add("hidden");
      }
      slideIdex++;
      if (slideIdex > slides.length) {
        slideIdex = 1;
      }
      slides[slideIdex - 1].classList.remove("hidden");
      slides[slideIdex - 1].classList.add("inline-block");
      setTimeout(showSlides, 3000);
    });
  }
}
