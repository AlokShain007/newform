
    function validateForm() {
      var fullname = document.getElementById("fullname").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      var dob = document.getElementById("dob").value;
      var address = document.getElementById("address").value;
      var city = document.getElementById("city").value;
      var state = document.getElementById("state").value;
      var zip = document.getElementById("zip").value;
      var country = document.getElementById("country").value;
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var confirm_password = document.getElementById("confirm_password").value;

      var nameRegex = /^[a-zA-Z\s]+$/;
      var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var phoneRegex = /^\d{10}$/;
      var zipRegex = /^\d{5}$/;
      var usernameRegex = /^[a-zA-Z0-9_]+$/;

      if (!fullname.match(nameRegex)) {
        alert("Please enter a valid full name.");
        return false;
      }

      if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return false;
      }

      if (!phone.match(phoneRegex)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
      }

      if (dob === "") {
        alert("Please select a date of birth.");
        return false;
      }

      if (address === "") {
        alert("Please enter your address.");
        return false;
      }

      if (city === "") {
        alert("Please enter your city.");
        return false;
      }

      if (state === "") {
        alert("Please enter your state.");
        return false;
      }

      if (!zip.match(zipRegex)) {
        alert("Please enter a valid 5-digit zip code.");
        return false;
      }

      if (country === "") {
        alert("Please enter your country.");
        return false;
      }

      if (!username.match(usernameRegex)) {
        alert("Please enter a valid username. (Only letters, numbers, and underscores are allowed)");
        return false;
      }

      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
      }

      if (password !== confirm_password) {
        alert("Passwords do not match.");
        return false;
      }
    }

