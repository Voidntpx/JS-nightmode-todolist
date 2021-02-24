function active(){
    word.classList.remove('cred');
    word.classList.add('cblue');

    buttday.classList.remove('hidden');
    buttnight.classList.add('hidden');
    head.classList.add('cwhite');
    body.classList.add('cblack');
    below.classList.add('cwhite');
    
    
}

function unactive(){
    word.classList.remove('cblue');
    word.classList.add('cred');
    buttnight.classList.remove('hidden');
    buttday.classList.add('hidden');
    head.classList.remove('cwhite');
    body.classList.remove('cblack');
    below.classList.remove('cwhite');
}

const word = document.querySelector('#word');
const buttnight = document.querySelector('#b1');
const buttday = document.querySelector('#b2');
const head = document.querySelector('#header');
const below = document.querySelector('#belowhead');
const body = document.querySelector('#body');
