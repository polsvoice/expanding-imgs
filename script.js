(function() {
  const divs = document.querySelectorAll(".imgDiv");

  for (let i = 0; i < divs.length; i += 1) {
    divs[i].addEventListener("click", function(e) {
      e.target.classList.toggle("gallery-img");
    });
  }
})();