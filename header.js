/* ===================== LOAD HEADER INTO PAGE ===================== */
fetch("header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;
  });

/* ===================== PAGE FADE-IN EFFECT ON LOAD ===================== */
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});
