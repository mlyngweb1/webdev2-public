// our default array of dreams
const dreams = [
  'Find and count some sheep',
  'Climb a really tall snowy mountain',
  'Wash the dishes'
];

// define variables that reference elements on our page
let dreamsList = document.getElementById('dreamsul');//unordered list
let dreamsForm = document.getElementById('adddream');//form
let dreamInput = dreamsForm.elements['dream'];//form text box element

// a function that creates a list item for a given dream
function appendNewDream(dream) {
  let newListItem = document.createElement('li');//create a new list item
  newListItem.innerHTML = dream; //set text of new list item to dream
  dreamsList.appendChild(newListItem); //add list item to the unordered list
}

function pushnewdream(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form
  dreamInput.value = '';
  dreamInput.focus();
};

// iterate through every dream and add it to our page
dreams.forEach( function(currentdream) {
  appendNewDream(currentdream);
});


dreamsForm.addEventListener('submit', pushnewdream, false);

