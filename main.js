let prevScrollPos = window.scrollY

window.onscroll = function () {
  let currentScrollPos = window.scrollY

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").classList.remove("hide")
  } else {
    document.getElementById("header").classList.add("hide")
  }

  prevScrollPos = currentScrollPos
}