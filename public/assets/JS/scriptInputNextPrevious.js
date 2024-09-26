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
            nextForm.classList.add("form-active")
            nextForm.classList.add("form-active-animate")
            prevForm.classList.add("form-inactive")
                // Change the active step element
            prevStep.classList.remove("step-active")
            nextStep.classList.add("step-active")
                // Remove active/inactive classes to both previous an next form
            setTimeout(() => {
                prevForm.classList.remove("form-active")
                prevForm.classList.remove("form-inactive")
                nextForm.classList.remove("form-active-animate")
            }, 1000)
        }


//! input in and out Animation =========================================

// const toggleinput = document.querySelectorAll("button.card_event");
// const InputVisibility = document.querySelector('.input-visibility');
// const closebtn1 = document.querySelector('#closebtn1');
// const closebtn2 = document.querySelector('#closebtn2');

// console.log(`${toggleinput.length}`);

// toggleinput.forEach(button => {
// button.addEventListener('click', () => {
//     var idevent = button.closest("li.UnEvent").querySelector("#idevent").value;
//     var dateevent = button.closest("li.UnEvent").querySelector("#dateevent").value;
//     var prixevent = button.closest("li.UnEvent").querySelector("#prixevent").value;
//     document.getElementById("idEventa").value = idevent;
//     document.getElementById("dateeventa").value = dateevent;
//     document.getElementById("prixeventa").value = prixevent;
//     InputVisibility.classList.remove('out-of-screen');
//     InputVisibility.classList.remove('flip-out-hor-top');
//     InputVisibility.classList.add('flip-in-hor-bottom');
// });
// });

// closebtn1.addEventListener('click', () => {
//     InputVisibility.classList.add('flip-out-hor-top');
//     InputVisibility.classList.remove('flip-in-hor-bottom');
// });
// closebtn2.addEventListener('click', () => {
//     InputVisibility.classList.add('flip-out-hor-top');
//     InputVisibility.classList.remove('flip-in-hor-bottom');
// });



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//! input in and out Animation =========================================

const toggleinputt = document.getElementById('btn_event');
const InputVisibilityy = document.getElementById('input-visibility');
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