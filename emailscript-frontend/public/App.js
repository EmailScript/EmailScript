// App.js

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");

  // Render the UI
  root.innerHTML = `
    <div class="container">
      <h1>Email Validator</h1>
      <input type="email" id="emailInput" placeholder="Enter your email" />
      <button id="submitBtn">Submit</button>
      <div id="messageOutput"></div>
      <div id="jsonOutput"></div>
    </div>
  `;

  const emailInput = document.getElementById("emailInput");
  const submitBtn = document.getElementById("submitBtn");
  const messageOutput = document.getElementById("messageOutput");
  const jsonOutput = document.getElementById("jsonOutput");

  // Submit button click handler
  submitBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      showMessage("Valid email submitted!", "success");
      showJSON(email );

      // Optional: Send to backend
      /*
      fetch("https://your-api-endpoint.com/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Server response:", data);
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
      */
    } else {
      showMessage("Invalid email format. Please try again.", "error");
      showJSON({});
    }
  });

  // Validate email with corrected regex
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Show success or error message
  function showMessage(message, type) {
    messageOutput.textContent = message;
    messageOutput.className = type;
  }

  // Display email as JSON
  function showJSON(data) {
    jsonOutput.textContent = JSON.stringify(data, null, 2);
  }
});
