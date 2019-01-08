var hotItems = document.querySelectorAll('li.hot'); // Store NodeList in array
if (hotItems.length > 0) {                          // If it contains items

  for (i in hotItems) {       // Loop through each item
    hotItems[i].className = 'cool';         // Change value of class attribute
  }

}