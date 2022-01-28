let readMore = document.getElementById('read-more'); //event target saved in variable
let moreInfo = document.getElementById('more-info'); 

// Write your code here:
function showInfo() { // event handler function setup
  moreInfo.style.display = 'block';
}
readMore.addEventListener('click', showInfo); //addEventListener takes two arguments, (event name, event handler function)