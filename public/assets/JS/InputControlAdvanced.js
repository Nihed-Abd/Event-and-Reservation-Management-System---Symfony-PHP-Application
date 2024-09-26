

function No_Number(id) {
    const noma = document.getElementById(id);
    const nomControl = /^[A-Za-z]+$/;
    // if (noma.value!=NULL) 
    {
        if (!nomControl.test(noma.value)) {
          noma.classList.add('wrong');
          noma.classList.remove('correct');
        } else {
          noma.classList.remove('wrong');
          noma.classList.add('correct');
        }
    }
}
