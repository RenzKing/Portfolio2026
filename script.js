const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');


navToggle.addEventListener('click', ()=>{
const isOpen = navLinks.classList.toggle('is-open'); navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
});

function openMenu(){
navLinks.classList.add('is-open');
navToggle.setAttribute('aria-expanded','true');
document.body.style.overflow = 'hidden';
}

function closeMenu(){
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
}

navToggle.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventLister('keydown', (e) => {
    if(e.key === 'Escape') closeMenu();
});
