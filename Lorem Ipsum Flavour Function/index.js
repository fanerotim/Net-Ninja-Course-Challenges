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
  console.log('input text: ', inputText.toUpperCase());
  console.log('flavour: ', flavour.toUpperCase());
}

const updateOutput = (text) => {

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

