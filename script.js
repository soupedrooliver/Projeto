function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/PFP_.jpg")
  } else {
    img.setAttribute("src", "./assets/Abstract Identity.jpg")
  }
}
