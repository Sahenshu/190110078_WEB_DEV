/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

function toggleShow(){
    let fam_icon = document.getElementById('fam_icon');
    let fam_img = document.getElementById('fam_img');
    if(fam_img.style.display!='none'){
    fam_img.style.display= 'none';
    }
    else{
        fam_img.style.display= 'block';    
    }
}
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
/*sr.reveal('.button',{delay: 200}); */
sr.reveal('.home__img',{delay: 400}); 
/*sr.reveal('.home__social-icon',{ interval: 200}); */

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL PHOTOGRAPHS*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL FAMILY*/
sr.reveal('.family_img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 
sr.reveal('.contact__button',{interval: 200}); 

/*FORM VALIDATION*/
function validation()                                    
{ 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("msg").value;

    error_message.style.padding="20px";

    if (name.length=="") 
    {
        text= "Please enter your name";
        error_message.innerHTML=text;
        return false;    
    }

    if (email.length=="") 
    {
        text= "Please enter your email-id";
        error_message.innerHTML=text;
        return false;    
    }

    if (message.length=="") 
    {
        text= "Please enter a message";
        error_message.innerHTML=text;
        return false;    
    }

    alert("Form submitted")
    return true;
}
