// If an li element is clicked, toggle the class "done" on the <li>
const list = document.querySelector('ul');
list.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
  }
}, false);

// If a delete link is clicked, delete the li element / remove from the DOM
//Delete the li element
function deleteToDoList(){
  const deleteElement = document.getElementsByClassName("delete");
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].onclick = function(e) {
      //console.log("try deleting")
      const pEl = this.parentElement;
      pEl.style.display = "none";
    }
  }
}


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>
  console.log(text)

  //only add item when the text is not empty
  if (text != '') {
    //Creating a new element for the new item
    const spanNewItem = document.createElement("SPAN");
    const newli = document.createElement("li");
    const newtextnode = document.createTextNode(text);
    spanNewItem.appendChild(newtextnode);

    //Creating a new element for the delete button and add it to the new item
    const ancDelete = document.createElement("a");
    ancDelete.setAttribute("class", "delete")
    ancDelete.innerText = "Delete";
    newli.append(spanNewItem, ancDelete);
    const ulist = document.querySelector('ul');
    ulist.appendChild(newli)
    console.log(ulist)
    deleteToDoList();
  }
};

const addlist = document.querySelectorAll('a');
addlist[1].addEventListener("click", addListItem); 
