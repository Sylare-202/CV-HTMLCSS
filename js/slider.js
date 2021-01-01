// variables
let compteur = 0
let timer, elements, slides, slideWidth

window.onload = () => {
    // on recup les slides
    const slider = document.querySelector(".slider")

    // on recup les autre elems
    elements = document.querySelector(".elements")

    // on recup le tab avec les slides
    slides = Array.from(elements.children)

    // on recup la largeur des differentes slides
    slideWidth = slider.getBoundingClientRect().width

    // on recup les 2 fleches
    let droite = document.querySelector("#nav-droite")
    let gauche = document.querySelector("#nav-gauche")

    droite.addEventListener("click", slideDroite)
    gauche.addEventListener("click", slideGauche)
    timer = setInterval(slideDroite, 5000)
    slider.addEventListener("mouseover", stopTimer)
    slider.addEventListener("mouseout", startTimer)
    window.addEventListener("resize", () => {
        slideWidth = slider.getBoundingClientRect().width
        slideDroite()
    })
}

// fonction du defilement vers la droite
function slideDroite(){
    compteur++
    if(compteur == slides.length){
        compteur = 0
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

// fonction du defilement vers la gauche
function slideGauche(){
    compteur--
    if(compteur < 0){
        compteur = slides.length - 1
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

// stoppage du defilement
function stopTimer(){
    clearInterval(timer)
}

// redemarrage du defilement
function startTimer(){
    timer = setInterval(slideNext, 4000)
}