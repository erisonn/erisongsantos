const home_btn = document.querySelector('#home-btn');
const sobre_btn = document.querySelector('#sobre-btn');
const conhecimentos_btn = document.querySelector('#conhecimentos-btn');
const links = document.querySelectorAll('.links')
const sections = document.querySelectorAll('section');

home_btn.addEventListener('click', () => {
    document.querySelector('#home').scrollIntoView({behavior: "smooth"});
})

sobre_btn.addEventListener('click', () => {
    document.querySelector('#sobre').scrollIntoView({behavior: "smooth"})
})

conhecimentos_btn.addEventListener('click', () => {
    document.querySelector('#conhecimentos').scrollIntoView({behavior: "smooth"})
})
window.addEventListener('scroll', () => {
    console.log(pageYOffset)
    if (pageYOffset < 340) {
        links.forEach( link => {
            link.classList.remove('active')
        })
        home_btn.classList.add('active')
    }
    if (pageYOffset >= 340) {
        links.forEach( link => {
            link.classList.remove('active')
        })
        sobre_btn.classList.add('active')
    }
    if (pageYOffset >= 1010) {
        links.forEach( link => {
            link.classList.remove('active')
        })
        conhecimentos_btn.classList.add('active')
    }
})