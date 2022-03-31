const indicator = document.querySelector("[data-indicator]")

document.addEventListener("click", e => {
  let anchor
  if (e.target.matches("a")) {
    anchor = e.target
  } else {
    anchor = e.target.closest("a")
  }
  if (anchor != null) {
    const allAnchors = [...document.querySelectorAll("a")]
    const index = allAnchors.indexOf(anchor)
    indicator.style.setProperty("--position", index)
    document.querySelectorAll("a").forEach(elem => {
      elem.classList.remove("active")
    })
    anchor.classList.add("active")
  }
})

const galleryImgs = document.querySelectorAll('.g-img')

galleryImgs.forEach(img => {
  img.addEventListener('click', (e) => {
    console.log("clicked")
    const target = e.target
    const imgDis = document.querySelector('.img-viewer')

    imgDis.classList.remove("hidden")
    const imgDisElm = imgDis.querySelector('img')
    imgDisElm.setAttribute("src", target.src)
  })
})

document.querySelector('.close').addEventListener("click", () => {
  const imgDis = document.querySelector('.img-viewer')

  imgDis.classList.add("hidden")
})
