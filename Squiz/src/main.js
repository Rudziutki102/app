let btn = document.querySelector('.menu-btn');
btn.addEventListener('click',function(){
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('header').classList.toggle('active');
    document.querySelector('.cancel').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
})