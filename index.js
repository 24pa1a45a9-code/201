// Select form and inputs
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dobInput = document.getElementById("dob");

// Helper functions
function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function calculateAge(dobString) {
  const dob = new Date(dobString);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

// Form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page reload

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const dob = dobInput.value;

  let errors = [];

  if (name === "") {
    errors.push("Name is required.");
  }

  if (!isEmailValid(email)) {
    errors.push("Enter a valid email.");
  }

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters.");
  }

  if (!dob) {
    errors.push("Date of birth is required.");
  } else if (calculateAge(dob) < 13) {
    errors.push("You must be at least 13 years old.");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }

  // If valid, show data (for demo)
  const userData = {
    name: name,
    email: email,
    password: "***REDACTED***", // never expose password
    dob: dob,
  };

  console.log("Registration Successful:", userData);
  alert("✅ Registration successful! Check console for data.");
  
  form.reset(); // clear fields
});
