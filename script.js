(function() {
  const gallery = document.querySelector("#gallery");
  let currentDiv;
  gallery.addEventListener("click", function(e) {
    if (currentDiv) {
      currentDiv.classList.remove("img-widen");
    }
    currentDiv = e.target;
    currentDiv.classList.add("img-widen");
  });
})();
