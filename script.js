function scrollToSection() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  console.log(linksInternos);

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const sections = document.querySelector(href);
    sections.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
scrollToSection();

function initFadeSection() {
  const section = document.querySelectorAll(".js-scroll");
  const janela = window.innerHeight * 0.7;
  console.log(janela);
  if (section.length) {
    function animaScroll() {
      section.forEach((item) => {
        const tops = item.getBoundingClientRect().top;
        const top = tops - janela;
        if (top < 0) {
          console.log("oi");
          item.classList.add("ativo");
        } else {
          item.classList.remove("ativo");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
  }
}
initFadeSection();
