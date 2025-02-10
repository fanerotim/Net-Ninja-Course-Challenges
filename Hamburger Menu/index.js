// get nav button
const navButton = document.querySelector('.menu-button');

//get navigation container 
const navContainer = document.querySelector('.navigation-container');

//get line of button
const lineElement = document.querySelector('.line');
console.log(lineElement);
// add event listener to nav button to toggle open / close state of menu
navButton.addEventListener('click', () => {
    
    const isOpen = navContainer.classList.contains('open');
    
    if (!isOpen) {
        navContainer.classList.add('open');
        lineElement.classList.add('open')
        // disable page scroll when menu is open
        document.body.style.overflow = 'hidden'
        // navButton.textContent = 'x'
    } else {
        navContainer.classList.remove('open');
        lineElement.classList.remove('open')
        // enable page scroll when menu is closed
        document.body.style.overflow = 'auto'

        // navButton.textContent = '≡'

    }
})