let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";
  button.removeEventListener('click', showFortune); // stops showFortune eventhandler after the first click.

  //add your code here

}

button.addEventListener('click', showFortune);
/* Remove event listener stops the event target from listening for an event when it no longer needs to fire.
it takes two arguments, the event type and the event handler function. */

