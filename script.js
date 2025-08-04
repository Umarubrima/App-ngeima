// Toggle dropdown menu
document.getElementById("menuToggle").addEventListener("click", function () {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Tab switching
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    document.querySelector(".tab.active").classList.remove("active");
    this.classList.add("active");
    document.querySelector(
      ".content"
    ).innerHTML = `<p>${this.textContent} content loaded...</p>`;
  });
});

// Hide dropdown on outside click
document.addEventListener("click", function (e) {
  if (
    !document.getElementById("menuToggle").contains(e.target) &&
    !document.getElementById("dropdownMenu").contains(e.target)
  ) {
    document.getElementById("dropdownMenu").style.display = "none";
  }
});