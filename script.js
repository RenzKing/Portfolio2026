const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');
const overlay = document.querySelector('.overlay')
const body = document.body;



function openMenu(){
navLinks.classList.add('is-open');
navToggle.setAttribute('aria-expanded','true');
body.classList.add('overlay');
}

function closeMenu(){
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
    body.classList.remove('overlay')
}

navToggle.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeMenu();
});


document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.clientWidth) console.log(el.offsetWidth, el);
  });

 const switchBtn = document.querySelector('.switch-icon');


 if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('light');
 }

 switchBtn.addEventListener('click', ()=>{
   const isLight = document.body.classList.toggle('light');
   heroImg.src = isLight ? 'images/portrait-light.jpg' : 'images/2018 pic.jpg';

   switchBtn.textContent = isLight ? '☾' : '☀';
   switchBtn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
   localStorage.setItem('theme', isLight ? 'light' : 'dark');
 });

 const heroImg = document.querySelector('#hero-portrait');

 

 const savedLight = localStorage.getItem('theme') === 'light';
 if(savedLight) document.body.classList.add('light');
 applyTheme(savedLight);


 switchBtn.addEventListener('click', ()=>{
    const isLight = document.body.classList.toggle('light');
    applyTheme(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
 });