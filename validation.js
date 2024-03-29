document.addEventListener('DOMContentLoaded', function() {
  var emailInput = document.getElementById('email');
  var emailError = document.getElementById('email-error');

  emailInput.addEventListener('input', function () {
      var emailValue = emailInput.value.trim(); // Trim whitespace from the input

      // Check if the input is empty or not a valid email
      if (emailValue === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
          emailError.style.display = 'block'; // Show error message
          emailInput.setAttribute('aria-invalid', 'true');
      } else {
          emailError.style.display = 'none'; // Hide error message
          emailInput.setAttribute('aria-invalid', 'false');
      }
  });
});
