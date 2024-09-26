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

//! Burger Menu or SideBar =============================================

$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });


//! input in and out Animation =========================================

const toggleedit = document.querySelector('.toggle-edit');
const toggleadd = document.querySelector('.toggle-add');
const InputlistAdd = document.querySelector('.InputlistAdd');
const InputlistEdit = document.querySelector('.InputlistEdit');


toggleedit.addEventListener('click', () => {
    InputlistEdit.classList.remove('slide-out-right');
    InputlistEdit.classList.add('slide-in-right');
    InputlistAdd.classList.add('slide-out-right');
});

toggleadd.addEventListener('click', () => {
    InputlistAdd.classList.remove('slide-out-right');
    InputlistAdd.classList.add('slide-in-right');
    InputlistEdit.classList.add('slide-out-right');
});








/*
const toggleedit = document.getElementById('toggle-edit');
if (toggleedit) {
    toggleedit.addEventListener('click', () => {
        InputlistEdit.classList.remove('slide-out-right');
        InputlistEdit.classList.add('slide-in-right');
        InputlistAdd.classList.add('slide-out-right');
    });
}
const toggleadd = document.getElementById('toggleadd');
if (toggleadd) {
    toggleadd.addEventListener('click', () => {
        InputlistEdit.classList.remove('slide-out-right');
        InputlistEdit.classList.add('slide-in-right');
        InputlistAdd.classList.add('slide-out-right');
    });
}
*/

