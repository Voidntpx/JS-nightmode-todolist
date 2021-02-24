function active(){

    h1.innerHTML=("GOOD NIGHT");
    h2.innerHTML=("This is night time!");
    word.classList.remove('cred');
    word.classList.add('cblue');
    buttday.classList.remove('hidden');
    buttnight.classList.add('hidden');
    head.classList.add('cwhite');
    body.classList.add('cblack');
    below.classList.add('cwhite');
    
    
}

function unactive(){
    h1.innerHTML=("GOOD MORNING");
    h2.innerHTML=("This is day time!");
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
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");