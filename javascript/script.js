function toggleNavBar() {
  const links = document.getElementById("navLinks");
  if (links.style.display === "inline-block") {
    links.style.display = "none";
  } else {
    links.style.display = "inline-block";
  }
}
