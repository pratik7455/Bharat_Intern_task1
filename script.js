document.querySelector(".skill_button").addEventListener("click", function () {
  document.getElementById("skill_show").classList.remove("overlay");
});
document.querySelector(".close1").addEventListener("click", function () {
  document.getElementById("skill_show").classList.add("overlay");
});
document.querySelector(".contact_btn").addEventListener("click", function () {
  document.getElementById("contact_show").classList.remove("overlay1");
});
document.querySelector(".close2").addEventListener("click", function () {
  document.getElementById("contact_show").classList.add("overlay1");
});
