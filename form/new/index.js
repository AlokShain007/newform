
function phonenumber() {
  const countrySelect = document.getElementById("country-select");
  const phoneInput = document.getElementById("phone-input");
  const codeInput = document.getElementById("code-input");

  countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;
    let countryCode = "";
    var maxLength = "";

    switch (selectedCountry) {
      case "india":
        countryCode = "+91";
        phoneInput.setAttribute("maxlength", "10");
        phoneInput.setAttribute("minlength", "10");
        break;
      case "nepal":
        countryCode = "+977";
        phoneInput.setAttribute("maxlength", "13");
        phoneInput.setAttribute("minlength", "12");
        break;
      default:
        codeInput.value = "";
        return;
    }

    codeInput.value = countryCode;
    phoneInput.value = "";
    phoneInput.placeholder = "Enter your phone number";

    phoneInput.focus();
  });

  phoneInput.addEventListener("input", () => {
    const selectedCountry = countrySelect.value;
    const phoneNumber = phoneInput.value;
    const regex = getRegexForCountry(selectedCountry);

    if (phoneNumber.match(regex)) {
      phoneInput.setCustomValidity("");
      phonenumberb = true;
    } else {
      phoneInput.setCustomValidity(
        "Please enter a valid phone number for your selected  country."
      );
    }
  });

  function getRegexForCountry(countryCode) {
    switch (countryCode) {
      case "india":
        return /^[6789]\d{9}$/gm;
      default:
        return /.*/;
    }
  }
}
