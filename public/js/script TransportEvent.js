var resevtest = document.getElementById("resevtest").value;
console.log("resevtest = " + resevtest);
const hellow = document.querySelectorAll(".afficher");
const btnrequesttransport = document.querySelectorAll('.btnrequesttransport');

window.onload = function () {  
    if (resevtest == 1) {
        hellow.forEach(function (element) {
            element.innerHTML = "Your Reservation is successfully created";
        });
    } else {
        hellow.forEach(function (element) {
            element.innerHTML = "Your Reservation's creation has failed";
        });
        btnrequesttransport.forEach(function (element) {
            element.remove();
        });
    }
}

console.log("nember of btnrequesttransports: "+`${btnrequesttransport.length}`);


//! input in and out Animation =========================================

const toggle = document.querySelectorAll("button.toggleinputtransp");
const InputVisib = document.querySelector('.input-visibility');
const closebtn1 = document.getElementById('closebtn1Transp');
const closebtn2 = document.getElementById('closebtn2Transp');

console.log("number of toggles: "+`${toggle.length}`);

toggle.forEach(button => {
  button.addEventListener('click', () => {
    InputVisib.classList.remove('hide');
    InputVisib.classList.remove('flip-out-hor-top');
    InputVisib.classList.add('flip-in-hor-bottom');
  });
});

closebtn1.addEventListener('click', () => {
    InputVisib.classList.add('flip-out-hor-top');
    InputVisib.classList.remove('flip-in-hor-bottom');
    setTimeout(() => {
      InputVisib.classList.add('hide');
    }, 600);
  });
  
closebtn2.addEventListener('click', () => {
    InputVisib.classList.add('flip-out-hor-top');
    InputVisib.classList.remove('flip-in-hor-bottom');
    setTimeout(() => {
      InputVisib.classList.add('hide');
    }, 600);
  });
  


