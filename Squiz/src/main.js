let btn = document.querySelector('.menu-btn');
btn.addEventListener('click',function(){
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('header').classList.toggle('active');
    document.querySelector('.cancel').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
})

let accordions = [...document.getElementsByClassName('accordion')];
accordions.forEach(accordion=>{
   accordion.addEventListener('click',function(){
    //    console.log('działa');
    let content = this.nextElementSibling;
    if(content.style.maxHeight){
content.style.maxHeight = null;
    }else{
content.style.maxHeight = content.scrollHeight + 'px';
    }
   })
})