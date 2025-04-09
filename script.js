function sendMail(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_3kxo3a2", "EmailJS_Template", params)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");

      // Clear the form after successful submission
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      console.log("FAILED...", error);
      alert("Failed to send message. Please try again.");
    });
}