// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const table = document.querySelector('table');

table.addEventListener('click', (event) => {
  const cell = event.target;
  if (cell.tagName.toLowerCase() === 'td') {
    cell.textContent = `${event.clientX}, ${event.clientY}`;
  }
});