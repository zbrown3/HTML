let element = document.getElementById('interact');
element.onclick = function() { element.style.backgroundColor = 'blue' };
//onclick property allows you to assign a function to run on a click event on an element.


let element = document.querySelector("button");

function turnButtonRed () {
    element.style.backgroundColor = "red";
    element.style.color = "white";
    element.innerHTML = "Red Button"; 
}

element.onclick = turnButtonRed;
