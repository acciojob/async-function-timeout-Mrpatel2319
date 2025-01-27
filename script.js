//your JS code here. If required.
// Function to introduce a delay using a Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to handle form submission
async function displayMessage() {
  const textInput = document.getElementById("text").value; // Get text input value
  const delayInput = parseInt(document.getElementById("delay").value); // Get delay input value
  const outputDiv = document.getElementById("output"); // Get output div

  // Validate input
  if (!textInput || isNaN(delayInput) || delayInput < 0) {
    outputDiv.textContent = "Please provide valid text and a positive delay value.";
    return;
  }

  // Clear the output div and introduce delay
  outputDiv.textContent = "Waiting...";
  await delay(delayInput);

  // Display the user-provided text after the delay
  outputDiv.textContent = textInput;
}

// Add event listener to the button
document.getElementById("btn").addEventListener("click", displayMessage);
