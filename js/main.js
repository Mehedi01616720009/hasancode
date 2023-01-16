/*=============== SHOW MENU ==================*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/*========= MENU SHOW =========*/
if(navToggle){
   navToggle.addEventListener('click', () =>{
       navMenu.classList.add('show-menu')
   })
}

/*========= MENU SHOW =========*/
if(navClose){
   navClose.addEventListener('click', () =>{
       navMenu.classList.remove('show-menu')
   })
}

/*========= REMOVE MENU MOBILE =========*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))