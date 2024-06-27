const toggleMenu = document.querySelector(".toggle-menu"),
  ulLinks = document.querySelector("header nav > ul");

toggleMenu.addEventListener("click", () => {
  ulLinks.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (e.target !== ulLinks && e.target !== toggleMenu) {
    ulLinks.classList.remove("active");
  }
});

// ------------------------------------------------------------
const bgLanding = document.querySelector(".landing #img img");

let imgArray = [
  "landing-1.jpg",
  "landing-2.avif",
  "landing-3.avif",
  "landing-4.avif",
];

let currentIndex = 0;

setInterval(() => {
  setTimeout(() => {
    bgLanding.classList.add("scale");
  }, 5000);
  bgLanding.classList.remove("scale");
  bgLanding.src = "./Image/" + imgArray[currentIndex];
  currentIndex = (currentIndex + 1) % imgArray.length;
}, 5000);

// ------------------------------------------------------------
const secStats = document.querySelector(".stats"),
  span = document.querySelectorAll(".stats .box span");
let start = false;

window.addEventListener("scroll", function () {
  if (scrollY >= secStats.offsetTop - 100) {
    if (!start) {
      startCounter(span);
      start = true;
    }
  }
});

function startCounter(nums) {
  nums.forEach((element) => {
    let count = setInterval(() => {
      element.textContent++;
      if (element.textContent === element.dataset.num) {
        clearInterval(count);
      }
    }, 10 / element.dataset.num);
  });
}
// ------------------------------------------------------------

const progHolder = document.querySelector(".prog-holder"),
  div = document.querySelectorAll(".prog-holder > div");
allDiv = document.querySelectorAll(".skills > div");

window.addEventListener("scroll", function () {
  if (scrollY >= progHolder.offsetTop - 300) {
    allDiv.forEach((element) => {
      element.classList.add("active");
    });
  }
});
// ------------------------------------------------------------
