let first = document.body.firstChild; // assigns first child element of body to variable first
first.innerHTML = 'I am the child!'; // changes inner html of first child element to string value

first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!';
//changes parent node of first child element of body innerHTML to string value