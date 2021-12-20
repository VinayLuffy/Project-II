const processing = document.querySelector("section.processing");
const preparing = document.querySelector("section.preparing");
const results = document.querySelector("section.results");

setTimeout(() => {
  processing.classList.add("fade-out");
  processing.style.display = "none";
  preparing.style.display = "flex";
  processing.classList.remove("fade-out");
  preparing.classList.add("fade-in");
  showResult();
}, 6000);

function showResult() {
  setTimeout(() => {
    processing.classList.add("fade-out");
    preparing.style.display = "none";
    processing.classList.remove("fade-out");
    results.style.display = "block";
    results.classList.add("fade-in");
    results.querySelector("p.text").innerHTML = content;
  }, 4000);
}