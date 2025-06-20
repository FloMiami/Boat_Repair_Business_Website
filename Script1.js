// JavaScript source code
// makes sure the script only runs  after the HTML is loaded
// this prevents errors that might occur if the script tries to access elements that aren't yet in the DOM

document.addEventListener("DOMContentLoaded", function() {

// 1) get reference to the HTML elements

//Selects all input elements that have the 'name' attribute set to 'service'
// This returns a NodeList (similar to an array) of all matching elements

const serviceInputs = document.querySelectorAll("input[name='service']");

// Selects the paragraph element that has the Id "total quoate"
// this is where the total quote will be displayed
 
const totalQuote = document.getElementById("totalQuote");

/** 
 * 2. define the function to calculate the total quote
 * this function has the core logic
 * iterates through the checkboxes
 * Adds up the values of the selected services
 * applies the 10% discount if all three services are selected
 * updates the displayed total
 */

function calculateTotal() {
    let total = 0; // initialize total to 0
    let selectedServices = 0; // counter for selected services

// loop through each service input
serviceInputs.forEach(function(checkbox) {
    // check if current checkbox is selected by user
    if (checkbox.checked) {
        // add the value of the selected service to total
        total += parseFloat(checkbox.value);
        selectedServices++; // increment the counter for selected services
        }
    });

 // 3. apply discount logic 

// if  all three services are selected, apply a 10% discount
// multiply total by 0.9 is the same as applying a 10% discount
    if (selectedServices === 3) {
        total *= 0.9; // apply 10% discount
  }

  //4. update the displayed total

  // update the text content of the totalQuote element
  // template literal is used to format the total as a currency string
  // toFixed(2) ensures the total is displayed with two decimal places
    totalQuote.textContent = `Total Quote: $${total.toFixed(2)}`;
}

// 5. Set up event listeners for interactivity 

// loop through each service input and add an event listener
serviceInputs.forEach(function(checkbox) {
    // add an event listener to each checkbox.
    //The 'change' event fires when the checkbox's checked state changes.
    // When the 'change' event occurs, the 'calculatequote' function is called
    checkbox.addEventListener("change", calculateTotal);
});

// 6. Initial calculation on page load

// call the calculatequote function once the script first loads/
// this ensures that the total is 0
// displayed immediately when the page loads
calculateTotal();
});
