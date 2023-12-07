//header scroll event
let header = document.querySelector('.header');
let headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
}else{
    header.classList.remove('header--dark');
}
});

//navebar__toggle
let ToggleMenu = document.querySelector('.menu_toggle');
let NaveMenu = document.querySelector('.nav_menu');

ToggleMenu.addEventListener('click', ()=>{
    NaveMenu.classList.toggle('open');
      });
NaveMenu.addEventListener('click',()=>{
    ToggleMenu.classList.remove('open')
});

//filtering event

const categories = document.querySelector('.filtre');
const hebergements = document.querySelectorAll('.hebergement');
categories.addEventListener('click', (event) => {
   const filter =event.target.dataset.filter;
   if(filter == null){
    return;
   }
   hebergements.forEach((hebergement)=>{
    console.log('do',hebergement.dataset.type);
    if (filter === 'all' || filter === hebergement.dataset.type){
        hebergement.style.display = 'block';
    }else{
        hebergement.style.display = 'none';
    }
   });
});

