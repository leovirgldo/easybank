let btnOpen = document.querySelector('.btn-open');
let btnClose = document.querySelector('.btn-close');
let aside = document.querySelector('.aside');
let mobile = document.querySelector('.mockup');
let mobileBg = document.querySelector('header');
let body = document.body;

btnOpen.addEventListener('click', () =>{
    aside.style.display = 'block';
    body.style.overflow = 'hidden';
    mobile.style.display = 'none';
    btnClose.style.display = 'block';
    btnOpen.style.display = 'none';
    // mobileBg.style.boxShadow = ' inset 100vw 400px 10px';
    // aside.style.boxShadow = '0 120px 400px 60px hsla(233, 26%, 24%, .6),0 -10px 10px hsla(233, 26%, 24%, .6)';
    // aside.style.boxShadow = 'inset 0 -200px 10px hsla(233, 26%, 24%, .6)';
})
btnClose.addEventListener('click', () =>{
    aside.style.display = 'none';
    body.style.overflow = 'auto';
    btnOpen.style.display = 'block';
    btnClose.style.display = 'none';
    mobile.style.display = 'block';
})