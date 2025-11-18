
opennav = document.getElementsByClassName('navclass');
closednav = document.getElementsByClassName('nav_closed');
navbutton = document.getElementById('toggleBtn');
nav = document.getElementById('nav');
divbutton = document.getElementById('div1');

button1 = document.getElementById('button1');
button2 = document.getElementById('button2');
button3 = document.getElementById('button3');


opacity = 'off';
state = 'closed';


divbuttons = document.getElementById('divbuttons');
github = document.getElementById('imgdiv');










navbutton.addEventListener('click', function(){
    nav.classList.toggle('nav_closed');


    if(state == 'closed'){
        divbuttons.style.opacity = "100"
        github.style.opacity = "100";
        state = 'open';
    }else{

        divbuttons.style.opacity = "0";
        github.style.opacity = "0";
        state = 'open';
    }


});

