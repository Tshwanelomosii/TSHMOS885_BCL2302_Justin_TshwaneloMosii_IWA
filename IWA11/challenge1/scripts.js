


const order1 = document.querySelector('[data-key="order1"]');
const order1Biscuits = order1.querySelector('.biscuits .count');
const order1Donuts = order1.querySelector('.donuts .count');
const order1Pancakes = order1.querySelector('.pancakes .count');
const order1Status = order1.querySelector('.status dd');

order1Biscuits.textContent = order1.getAttribute('data-biscuits');
order1Donuts.textContent = order1.getAttribute('data-donuts');
order1Pancakes.textContent = order1.getAttribute('data-pancakes');
order1Status.textContent = order1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const order2 = document.querySelector('[data-key="order2"]');
const order2Biscuits = order2.querySelector('.biscuits .count');
const order2Donuts = order2.querySelector('.donuts .count');
const order2Pancakes = order2.querySelector('.pancakes .count');
const order2Status = order2.querySelector('.status dd');

order2Biscuits.textContent = order2.getAttribute('data-biscuits');
order2Donuts.textContent = order2.getAttribute('data-donuts');
order2Pancakes.textContent = order2.getAttribute('data-pancakes');
order2Status.textContent = order2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

const order3 = document.querySelector('[data-key="order3"]');
const order3Biscuits = order3.querySelector('.biscuits .count');
const order3Donuts = order3.querySelector('.donuts .count');
const order3Pancakes = order3.querySelector('.pancakes .count');
const order3Status = order3.querySelector('.status dd');

order3Biscuits.textContent = order3.getAttribute('data-biscuits');
order3Donuts.textContent = order3.getAttribute('data-donuts');
order3Pancakes.textContent = order3.getAttribute('data-pancakes');
order3Status.textContent = order3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending';

//There are a few issues with the code in script.js. First, the variable names cannot start with a number. Second, the document() method is not a valid method. To interact with the DOM and retrieve elements, we need to use the document.querySelector() method. Lastly, we cannot use the assignment operator (=) to retrieve values from the data attributes. We need to use the getAttribute() method instead.
// This code correctly selects the appropriate elements and updates their text content with the values from the data attributes. We first use the document.querySelector() method to select the appropriate dl element based on its data-key attribute. Then we use querySelector() again to select the specific dd element where we want to update the text content. Finally, we use getAttribute() to retrieve the value from the appropriate data attribute and update the text content accordingly. We also use a ternary operator to check whether the data-delivered attribute is true or false and display the appropriate status message.


