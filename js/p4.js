let cai = document.querySelector('.cai')
let op = document.querySelector('.op')
cai.addEventListener('click', () => {
    cai.classList.toggle('open')
    op.classList.toggle('open')
})