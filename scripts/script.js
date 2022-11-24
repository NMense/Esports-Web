const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.1.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


// Join Button
function click() {
    const joinbtn = document.getElementById('joinbtn');

    joinbtn.style.backgroundColor = 'white';
    joinbtn.style.color = '#860111';
};