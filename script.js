const badhan = document.getElementById('mode-btn');
const mainQaybta = document.querySelector('main');

badhan.addEventListener('click', function() {
    // Kani si toos ah ayuu u eegayaa haddii midabku madow yahay iyo haddii kale
    if (mainQaybta.style.backgroundColor === 'rgb(34, 34, 34)' || mainQaybta.style.backgroundColor === '#222222') {
        mainQaybta.style.backgroundColor = ''; // Wuxuu ku celinayaa midabkaagii caadiga ahaa
    } else {
        mainQaybta.style.backgroundColor = '#222222'; // Wuxuu u beddelayaa madow
        mainQaybta.style.color = 'white';
    }
});
