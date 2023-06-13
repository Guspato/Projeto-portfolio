/*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}
*/

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")
  // Se tiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile-gus-light.jpg")
  } else {
    // se tiver sem light mode, manter a original //
    img.setAttribute("src", "./assets/profile gus.jpg")
  }
}
