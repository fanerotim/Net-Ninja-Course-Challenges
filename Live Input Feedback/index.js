const inputElement = document.getElementById('email');

const tickElement = document.querySelector('.tick');

inputElement.addEventListener('keyup', (e) => {
    const inputValue = inputElement.value;

    if (inputValue === 'petar@abv.bg') {
        tickElement.classList.add('valid');
        inputElement.classList.add('valid-email');
    } else {
        tickElement.classList.remove('valid');
        inputElement.classList.remove('valid-email');
    }
})
