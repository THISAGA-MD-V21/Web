document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-response").innerText = "Message sent! (Simulation)";
});
