//your JS code here. If required.
function calculateDOMLevel(elementId) {
  // Get the target element by id
  var targetElement = document.getElementById(elementId);

  if (targetElement) {
    var domLevel = 0;

    // Loop through parent elements until the root html element is reached
    while (targetElement.parentElement) {
      targetElement = targetElement.parentElement;
      domLevel++;
    }

    // Display the calculated DOM level in an alert dialog
    alert("The level of the element is: " + domLevel);
  } 
}

// Call the function with the id of the target element
calculateDOMLevel('level');