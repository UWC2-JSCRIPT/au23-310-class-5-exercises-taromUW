// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const headEl = document.querySelector('h2');
headEl.innerHTML = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
const list = document.querySelectorAll(".rain,.sun");
list.forEach(function(item) {
    item.style.color = 'orange'
});

// Change the class of the second <li> from to "sun" to "cloudy"
list[2].className = 'cloudy';