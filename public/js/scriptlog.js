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
        LoginCard.classList.remove('hide');
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
document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('reg-log');
    var centerWrap = document.querySelector('.form');
    centerWrap.classList.add('hide');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            setTimeout(function() {
                centerWrap.classList.remove('hide');
            }, 300); // Délai de 2 secondes (2000 millisecondes)
        } else {
            centerWrap.classList.add('hide');
        }
    });
});
////////////////////////////




const formBtn1 = document.querySelector("#btn-1")
const formBtnPrev2 = document.querySelector("#btn-2-prev")
const formBtnNext2 = document.querySelector("#btn-2-next")
const formBtnPrev3 = document.querySelector("#btn-3-prev")
const formBtn3 = document.querySelector("#btn-3")

// Button listener of form 1
formBtn1.addEventListener("click", function(e) {
    gotoNextForm(formBtn1, formBtn3, 1, 2)
    e.preventDefault()
})


// Previous button listener of form 3
formBtnPrev3.addEventListener("click", function(e) {
    gotoNextForm(formBtn3, formBtn1, 2, 1)
    e.preventDefault()
})

// Button listener of form 3
formBtn3.addEventListener("click", function(e) {
    document.querySelector(`.step--2`).classList.remove("step-active")
    document.querySelector(`.step--3`).classList.add("step-active")
    formBtn3.parentElement.style.display = "none"
    document.querySelector(".form--message").innerHTML = `
   <h1 class="form--message-text">Your account is successfully created </h1>
   `
    /*sleep(1000).then(() => { InputVisibility.classList.add('flip-out-hor-top');
                             InputVisibility.classList.remove('flip-in-hor-bottom');
                             });
     sleep(1600).then(() => { location.reload();}); */
    e.preventDefault()
})

const gotoNextForm = (prev, next, stepPrev, stepNext) => {
    // Get form through the button
    const prevForm = prev.parentElement
    const nextForm = next.parentElement
    const nextStep = document.querySelector(`.step--${stepNext}`)
    const prevStep = document.querySelector(`.step--${stepPrev}`)
    // Add active/inactive classes to both previous and next form
    nextForm.classList.add("form-active");
    prevForm.classList.remove("form-active");
    // Change the active step element
    prevStep.classList.remove("step-active");
    nextStep.classList.add("step-active");
    // Remove active/inactive classes to both previous an next form
    setTimeout(() => {
        prevForm.classList.remove("form-active")
        prevForm.classList.remove("form-inactive")
        nextForm.classList.remove("form-active-animate")
        nextForm.classList.remove("form-inactive")

    }, 1000)
}








const toggleinputt = document.querySelector('.btn_event');
const InputVisibilityy = document.querySelector('.input-visibility');
const closebtn3 = document.querySelector('#closebtn1');
const closebtn4 = document.querySelector('#closebtn2');

console.log("nember of element: "+`${toggleinputt.length}`);

toggleinputt.forEach(button => {
    button.addEventListener('click', () => {
        var idevent = button.closest("div.UnNouvEvent").querySelector("#idevent").value;
        var dateevent = button.closest("div.UnNouvEvent").querySelector("#dateevent").value;
        var prixevent = button.closest("div.UnNouvEvent").querySelector("#prixevent").value;
        document.getElementById("idEventa").value = idevent;
        document.getElementById("dateeventa").value = dateevent;
        document.getElementById("prixeventa").value = prixevent;
        InputVisibilityy.classList.remove('hide');
        InputVisibilityy.classList.remove('flip-out-hor-top');
        InputVisibilityy.classList.add('flip-in-hor-bottom');
    });
});

closebtn3.addEventListener('click', () => {
    InputVisibilityy.classList.add('flip-out-hor-top');
    InputVisibilityy.classList.remove('flip-in-hor-bottom');
    InputVisibilityy.classList.add('hide');
});
closebtn4.addEventListener('click', () => {
    InputVisibilityy.classList.add('flip-out-hor-top');
    InputVisibilityy.classList.remove('flip-in-hor-bottom');
    InputVisibilityy.classList.add('hide');
});


