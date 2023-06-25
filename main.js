let prevScrollPos = window.scrollY

let flagHeaderShow = true

window.onscroll = function () {
  let currentScrollPos = window.scrollY

  if (flagHeaderShow) {
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("header").classList.remove("hide")
    } else {
      document.getElementById("header").classList.add("hide")
    }
    prevScrollPos = currentScrollPos
  }
}

const toggleNav = () => {
  document.getElementById("nav").classList.toggle("hide")
  document.getElementById("menu").classList.toggle("active")
  document.getElementsByTagName("body")[0].classList.toggle("no-scroll")
}

const scrollToSection = (place) => {
  document.getElementById("nav").classList.toggle("hide")
  document.getElementById("menu").classList.toggle("active")
  document.getElementsByTagName("body")[0].classList.toggle("no-scroll")
  document.getElementById("header").classList.add("hide")
  document.getElementById(place).scrollIntoView({
    behavior: "smooth",
  })
  flagHeaderShow = false
  setTimeout(() => {
    flagHeaderShow = true
  }, 1000)
}

document.addEventListener("DOMContentLoaded", function () {
  let navItems = document.getElementsByClassName("nav-item")
  window.addEventListener("scroll", function () {
    let currentPosition = window.scrollY
    for (const nav of navItems) {
      let navi = nav.querySelector(".nav-link")
      let section = document.getElementById(navi.innerHTML.toLowerCase())
      if (section.offsetTop <= currentPosition && section.offsetTop + section.offsetHeight > currentPosition) {
        navi.classList.add("active")
      } else {
        navi.classList.remove("active")
      }

    }
  })
})