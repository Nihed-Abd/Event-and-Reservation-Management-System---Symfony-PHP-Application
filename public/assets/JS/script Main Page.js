//! Logging Animation =================================================

const LoginSEC = document.querySelector('.LoginSEC');
const toggleLogin = document.querySelector('.toggle-login');
const closebtn_signin = document.querySelector('#closebtn-signin');
const closebtn_signup = document.querySelector('#closebtn-signup');
const headerr = document.querySelector('#header');
const section = document.querySelector('Section');
const container = document.querySelector('.container');

window.onload = function () {  
    LoginSEC.classList.toggle('slide-out-blurred-bottom');
}

toggleLogin.addEventListener('click', () => {
    container.classList.remove('LoginSECbase');
    LoginSEC.classList.toggle('slide-in-blurred-top');
    LoginSEC.classList.toggle('slide-out-blurred-bottom');
    toggleLogin.classList.toggle('active');
    headerr.classList.toggle('blur');
    section.classList.toggle('blur');
});

closebtn_signin.addEventListener('click', () => {
    LoginSEC.classList.toggle('slide-in-blurred-top');
    LoginSEC.classList.toggle('slide-out-blurred-bottom');
    toggleLogin.classList.toggle('active');
    headerr.classList.toggle('blur');
    section.classList.toggle('blur');
});
closebtn_signup.addEventListener('click', () => {
    LoginSEC.classList.toggle('slide-in-blurred-top');
    LoginSEC.classList.toggle('slide-out-blurred-bottom');
    toggleLogin.classList.toggle('active');
    headerr.classList.toggle('blur');
    section.classList.toggle('blur');
});



//! Scrolling Animation =================================================

let text = document.getElementById('text');
        let Lib = document.getElementById('Library');
        let water = document.getElementById('water');
        let header = document.getElementById('header');
        
        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            
            text.style.top = 50+ value * -0.01 + '%';
            Lib.style.top = value * .25 + 'px';
            header.style.top = value * .5 + 'px';
        })


//! Scroll back to top =================================================
  

$(document).ready(function() {	
    var offset = 200;
    var duration = 400;
    jQuery(window).on('scroll', function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.scroll-to-top').addClass('active-arrow');
        } else {
            jQuery('.scroll-to-top').removeClass('active-arrow');
        }
    });				
    jQuery('.scroll-to-top').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
}); 
