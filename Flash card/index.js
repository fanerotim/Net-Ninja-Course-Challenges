const card = document.querySelector('.card');
const front = document.querySelector('.front');
const back = document.querySelector('.back');

card.addEventListener('click', (e) => {
    
    const curFace = e.target.getAttribute('class');

    // if check that adds/ removes the rotate class on card
    if (curFace == 'front') {
        e.currentTarget.classList.add('rotate')
    } else {
        e.currentTarget.classList.remove('rotate')
    }
})