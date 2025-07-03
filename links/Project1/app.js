const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove live class from all buttons
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    // add live class to clicked button
    e.target.classList.add("live");

    // hide all content
    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    // show matching content
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});

function changeImage(src) {
  const image = document.getElementById("MYimage");
  image.src = src;
}