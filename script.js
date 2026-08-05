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

  const c = document.querySelector('.container');
  console.log(getComputedStyle(c).width, getComputedStyle(c).maxWidth, getComputedStyle(c).boxSizing);