//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value, 10);
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  if (isNaN(delay) || delay < 0) {
    outputDiv.innerHTML = "Please enter a valid delay in milliseconds.";
    return;
  }
  const delayPromise = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delayPromise(delay);
  outputDiv.innerHTML = text || "No text provided.";
});