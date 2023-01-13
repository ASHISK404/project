const background = document.querySelector(".b")
document.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    if (scrollY !== 0) {
        background.style.backgroundPosition = `calc(50% + ${4 * scrollY}px) calc(50% + ${scrollY}px)`
    }
})
let an1 = document.querySelector('.an_1')
let an2 = document.querySelector('.an_2')
let c = document.querySelector('.card')
let help = document.querySelector('#help')
let x = document.querySelector('#x')
an1.addEventListener('click', () => {
    c.classList.toggle('click')
})
an2.addEventListener('click', () => {
    c.classList.toggle('click')
})
help.addEventListener('click', () => {
    c.classList.toggle('click_open')
})
x.addEventListener('click', () => {
    c.classList.toggle('click_open_1')
})
