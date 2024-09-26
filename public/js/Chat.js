const btnChat = document.querySelectorAll('.btnChat');
const Chataffiche = document.querySelector('.Chataffiche');
btnChat.forEach(function(item) {
  item.addEventListener('click', () => {
    Chataffiche.classList.toggle('slide-out-right');
    Chataffiche.classList.toggle('slide-in-right');
    setTimeout(() => {
        Chataffiche.classList.toggle('chathidden');
    }, 600);
  });
});