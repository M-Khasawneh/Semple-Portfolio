const text = "MOHAMMAD KHASAWNEH";
const element = document.getElementById("typing");

let i = 0;

function type() {
  if (i < text.length) {
    element.textContent += text[i];
    i++;
    setTimeout(type, 150);
  }
}
type();
const boxs = document.querySelectorAll(".box");
const card = document.querySelectorAll(".card");
const inforight = document.querySelectorAll(".info-right ");
const exp = document.querySelectorAll(".innerExperience");
const progressBar = document.querySelectorAll(".barskills");
const observer = new IntersectionObserver(
  (entreis) => {
    entreis.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.4,
  },
);

card.forEach((card) => {
  observer.observe(card);
});
progressBar.forEach((bar) => {
  observer.observe(bar);
});
exp.forEach((exp) => {
  observer.observe(exp);
});

inforight.forEach((info) => {
  observer.observe(info);
});
boxs.forEach((box) => {
  observer.observe(box);
});

const activeSection = document.querySelectorAll(".activ");
const links = document.querySelectorAll("nav ul li a");
const acitveObserver = new IntersectionObserver(
  (entreis) => {
    entreis.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (`#${entry.target.id}` === link.getAttribute("href")) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.5,
  },
);
activeSection.forEach((sections) => {
  acitveObserver.observe(sections);
});
