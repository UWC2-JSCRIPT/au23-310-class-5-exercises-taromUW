// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const mainH = document.getElementsByTagName("main")[0];
const paragraph = mainH.getElementsByTagName("p");
lastP = paragraph[paragraph.length-1];

const a = document.createElement("a");
a.textContent = 'Buy Now!';
a.id = 'cta'

lastP.parentNode.insertBefore(a, lastP.nextSibling);

// Access (read) the data-color attribute of the <img>,
// log to the console
const img = document.querySelector('img');
console.log(img.dataset.color);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const firstUl = document.getElementsByTagName("ul")[0];
const thirdLi = firstUl.getElementsByTagName("li")[2];
thirdLi.className = 'highlight';

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let removedEl = mainH.removeChild(lastP);