let zhe = document.querySelector('.zhe')
zhe.addEventListener('click', () => {
    zhe.classList.toggle('open')
})
let cai = document.querySelector('.cai')
let op = document.querySelector('.op')
cai.addEventListener('click', () => {
    cai.classList.toggle('open')
    op.classList.toggle('open')
})