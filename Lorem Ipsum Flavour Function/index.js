// dom elements
const buttons = document.querySelectorAll('button')
const textarea = document.querySelector('textarea')
const output = document.querySelector('.output')

// flavours
const flavours = {
  ninja: ['dojo', 'shogun', 'shinobi', 'samuri', 'shuriken'],
  pokemon: ['pika', 'pokeball', 'pokedex', 'evolve', 'ash', 'gym'],
  space: ['universe', 'galaxy', 'telescope', 'comet', 'stars'],
}

// functions
const flavourize = (inputText, flavour) => {

  // get the length of current flavour, so we can then use math.Random to take randon word from flavour array
  const flavourLength = flavours[flavour].length;

  // convert inputText into array, so we can replace every third word with a random word from the flavours array
  const inputTextAsArr = inputText.split(' ');

  inputTextAsArr.forEach((text, index) => {

    // create a custom index as I want to start from 1 and not 0;
    const currentIndex = index + 1;

    // get every third word, so we can replace it with a random word from flavours
    if (currentIndex % 3 === 0) {

      // generate an index randomly, which we will use to get a random word from flavours array
      const randomIndex = Math.floor(Math.random() * flavourLength);
      // replace every third word with a random word from the current flavour
      inputTextAsArr[index] = flavours[flavour][randomIndex];
    }
  })

  // get final text so we can output it on the page
  const flavouredText = inputTextAsArr.join(' ');
  // pass it to the updateOutput function
  updateOutput(flavouredText);
}

const updateOutput = (text) => {
  output.textContent = text;
}

// event listener
buttons.forEach(b => {
  b.addEventListener('click', (e) => {

    // prevent default browser behavior (stop refresh)
    e.preventDefault();

    // get current flavour
    const flavour = b.dataset.flavour;

    // get input from user (text)
    const userInput = textarea.value;

    flavourize(userInput, flavour);
  })
})

