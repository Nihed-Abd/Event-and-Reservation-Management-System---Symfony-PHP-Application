window.onload = function () {  

    idconnection = document.getElementById("idclienta").value;
    const displaylogin = document.querySelectorAll('.displaylogin');
    const connecter=document.querySelector('.connecter');
    const deconnecter=document.querySelector('.deconnecter');
    const deconnecterbtns=document.querySelectorAll('.deconnecter-btn');

    if((idconnection==null) || (idconnection==0))
    {
        deconnecter.classList.remove('hide');
        deconnecter.classList.add('d-lg-block');
        displaylogin.forEach(displaylogin => {
            displaylogin.classList.add('hide');
            displaylogin.classList.remove('nav-link');
        });
        connecter.classList.add('hide');
        connecter.classList.remove('d-lg-block');
        
    }
    else
    {
        deconnecterbtns.forEach(btn => btn.remove());
    }
}

const LoginCard = document.querySelector('.LoginCard');
const toggleLogin = document.querySelectorAll('.toggle-login');
const closebtn_signin = document.querySelector('#closebtn-signin');
const closebtn_signup = document.querySelector('#closebtn-signup');
const toBeBluredElements = document.querySelectorAll('.ToBeBlured');

toggleLogin.forEach(button => {
    button.addEventListener('click', () => {
        LoginCard.classList.remove('hidden');
        LoginCard.classList.add('LoginSEC');
        LoginCard.classList.add('slide-in-blurred-top');
        LoginCard.classList.remove('slide-out-blurred-bottom');
        toBeBluredElements.forEach(element => {
            element.classList.add('blur');
        });
    });
});


closebtn_signin.addEventListener('click', () => {
    LoginCard.classList.remove('slide-in-blurred-top');
    LoginCard.classList.add('slide-out-blurred-bottom');
    toBeBluredElements.forEach(element => {
        element.classList.remove('blur');
    });
    setTimeout(() => {
        LoginCard.classList.remove('LoginSEC');
        LoginCard.classList.add('hide');
    }, 500);
});
closebtn_signup.addEventListener('click', () => {
    LoginCard.classList.remove('slide-in-blurred-top');
    LoginCard.classList.add('slide-out-blurred-bottom');
    toBeBluredElements.forEach(element => {
        element.classList.remove('blur');
    });
    setTimeout(() => {
        LoginCard.classList.remove('LoginSEC');
        LoginCard.classList.add('hide');
    }, 500);
});


