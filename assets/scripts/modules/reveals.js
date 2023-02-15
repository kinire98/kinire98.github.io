export function reveals() {
  let reveals = document.querySelectorAll(".reveal");
  for (const element of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  }
}
export function revealEverything() { 
  let reveals = document.querySelectorAll(".reveal"),
    fixed = document.querySelectorAll("#title, .section, #left, #right");
  for (const element of reveals) {
    element.classList.add("active");
  }
  for (const element of fixed) {
    element.style.backgroundAttachment = "local";
  }
  if (location.pathname === "/es/sobre/" || location.pathname === "/en/about/") {
    document.getElementById("back").style.position = "absolute";
    document.getElementById("points").style.position = "absolute";
  }
}