let flagHeaderShow = true
let prevScrollPos = window.scrollY

window.onscroll = function () {
  if (flagHeaderShow) {
    let currentScrollPos = window.scrollY
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
  if (place === "home" && window.scrollY === 0) {
  } else {
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
}

document.addEventListener("DOMContentLoaded", function () {
  let navItems = document.querySelectorAll(".nav-item")
  let activeNav = null
  window.addEventListener("scroll", function () {
    let currentPosition = window.scrollY
    for (const nav of navItems) {
      let navi = nav.querySelector(".nav-link")
      let section = document.getElementById(navi.innerHTML.toLowerCase())
      if (
        section.offsetTop <= currentPosition &&
        section.offsetTop + section.offsetHeight > currentPosition + 300
      ) {
        if (navi !== activeNav) {
          if (activeNav) {
            activeNav.classList.remove("active")
          }
          activeNav = navi
          activeNav.classList.add("active")
        }
        break
      }
    }
  })
})