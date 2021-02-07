let backdrop = document.querySelector('.backdrop'); //all styles in js style are inline styles
let planButton = document.querySelectorAll('.plan button');
let modal = document.querySelector('.modal');
for(let i =0 ; i < planButton.length ; i++){
    planButton[i].addEventListener('click', ()=>{

        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}


