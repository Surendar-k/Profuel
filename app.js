document.getElementById("navbar").innerHTML = `
    <a href="./index.html">Home</a>
    <a href="./service.html">Services</a>
    <a href="./about.html">About US</a>
    <a href="./contact.html">Contact</a>
`;
document.getElementById("footer").innerHTML = `
    <p>&copy; 2025 My Website. All rights reserved.</p>
`;
document.getElementById("contact-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    alert("Error submitting form. Please try again later.");
  }
});