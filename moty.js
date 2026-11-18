document.addEventListener("DOMContentLoaded", () => {
  console.log("Website loaded and main.js is connected!");

  // Dynamic footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Interactive button on Home page
  const actionBtn = document.getElementById("action-btn");
  if (actionBtn) {
    actionBtn.addEventListener("click", () => {
      alert("JavaScript is working!");
    });
  }

  // Basic form handler on Contact page
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been submitted.");
      contactForm.reset();
    });
  }
});