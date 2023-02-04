(function() {
  const divs = document.querySelectorAll(".img-div");

  for (let i = 0; i < divs.length; i += 1) {
    divs[i].addEventListener("click", function(e) {
      e.target.classList.toggle("img-widen");
    });
  }
})();