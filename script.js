// Check if the user has a nickname stored in LocalStorage
if (!localStorage.getItem("nickname")) {
    // If not, generate a random nickname
    localStorage.setItem("nickname", "User " + Math.floor(Math.random() * 1000));
  }
  
  // Get the form, input, and display elements
  const form = document.querySelector("form");
  const input = document.querySelector("#message");
  const display = document.querySelector("#display");
  
  // Listen for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the message and nickname
    const message = input.value;
    const nickname = localStorage.getItem("nickname");
  
    // Clear the input field
    input.value = "";
  
    // Add the message to the display
    display.innerHTML += `<p><strong>${nickname}:</strong> ${message}</p>`;
  });
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the message and nickname
    const message = input.value;
    const nickname = localStorage.getItem("nickname");
  
    // Clear the input field
    input.value = "";
  
    // Add the message to the display
    display.innerHTML += `<p><strong>${nickname}:</strong> ${message}</p>`;
  
    // Change the background color of the chat interface
    document.querySelector("#chat").style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
  });
  