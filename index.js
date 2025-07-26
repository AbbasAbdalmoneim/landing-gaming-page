const menuebutton = document.querySelector(".menue-button");
const active = document.querySelector(".side-bar");
const closemenue = document.querySelector(".close-button");
const sidebarLinks = document.querySelectorAll(".side-bar a");

menuebutton.addEventListener("click", () => {
  active.style.display = "block";
});

closemenue.addEventListener("click", () => {
  active.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (
    active.style.display === "block" &&
    !active.contains(e.target) &&
    !menuebutton.contains(e.target) 
  ) {
    active.style.display = "none";
  }
});

sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    active.style.display = "none"; 
  });
});
