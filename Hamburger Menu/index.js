// get nav button
const navButton = document.querySelector('.menu-button');

//get navigation container 
const navContainer = document.querySelector('.navigation-container');

// add event listener to nav button to toggle open / close state of menu
navButton.addEventListener('click', () => {
    
    const isOpen = navContainer.classList.contains('open');
    
    if (!isOpen) {
        navContainer.classList.add('open');
        // disable page scroll when menu is open
        document.body.style.overflow = 'hidden'
    } else {
        navContainer.classList.remove('open');
        // enable page scroll when menu is closed
        document.body.style.overflow = 'auto'
    }
})