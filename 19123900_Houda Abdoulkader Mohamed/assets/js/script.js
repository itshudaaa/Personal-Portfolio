// Smooth Scroll for Navigation Links
let navLinks = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (event) {
    event.preventDefault();

    let targetId = this.getAttribute("href");
    let targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile menu if open
    let navMenu = document.getElementById("navLinks");
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
    }
  });
}

// Toggle Hamburger Menu 
let menuToggle = document.getElementById("menuToggle");
let navMenu = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

// Contact Form Validation
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting for real

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Basic email format check (accepts .com, .net, .my, etc.)
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if fields are empty
  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
    return;
  }

  // Validate email pattern
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Simulate form submission
  alert("Message sent! ✅ Thank you, " + name + ". I will get back to you soon.");
  contactForm.reset(); // Clear the form
});


document.addEventListener("DOMContentLoaded", function () {
  let typed = new Typed("#typed-text", {
    strings: ["Aspiring SE", "Designer", "Tech Enthusiast"],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: "_"
  });
});
