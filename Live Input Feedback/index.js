const inputElement = document.getElementById('email');

const tickElement = document.querySelector('.tick');

const emailRegEx = /^\w{1,}[.|_]?\w{1,}@[gmail|yahoo|abv]+\.(bg|com|net|org|dev)+$/

inputElement.addEventListener('keyup', (e) => {
    const inputValue = inputElement.value;

    const hasMatched = inputValue.match(emailRegEx);

    if (hasMatched) {
        tickElement.classList.add('valid');
        inputElement.classList.add('valid-email');
    } else {
        tickElement.classList.remove('valid');
        inputElement.classList.remove('valid-email');
    }
})
