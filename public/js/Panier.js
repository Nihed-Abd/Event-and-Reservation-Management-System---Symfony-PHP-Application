const toggle = document.querySelector('.btn_Panier');

const SectionPanier = document.querySelector('.SectionPanier');
const closebtn1 = document.querySelector('#closebtn');


toggle.addEventListener('click', () => {
    SectionPanier.classList.remove('flip-out-hor-top');
    SectionPanier.classList.add('flip-in-hor-bottom');
    SectionPanier.classList.remove('hide');
});

closebtn.addEventListener('click', () => {
    SectionPanier.classList.add('flip-out-hor-top');
    SectionPanier.classList.remove('flip-in-hor-bottom');
    setTimeout(() => {
        SectionPanier.classList.add('hide');
    }, 600);
});