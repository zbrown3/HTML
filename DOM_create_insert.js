let paragraph = document.createElement('p'); // Example creates a new paragraph element
 
paragraph.id = 'info';  // gives the element an id
 
paragraph.innerHTML = 'The text inside the paragraph'; //adds text to the new element's .innerHTML
 
document.body.appendChild(paragraph); //appends it to the body of the document


let newDestination = document.createElement('li');
newDestination.id = 'oaxaca';
newDestination.innerHTML = 'Oaxaca, Mexico';
document.getElementById('more-destinations').appendChild(newDestination); //adds new element by element id.

