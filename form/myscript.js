let fnameb = false;
//let mname=false;
let lnameb = false;
let emailb = false;
let passwordb = false;
let cpasswordb = false;
let phonenumberb = false;
let addressb = false;
let stateb = false;
let zipcodeb = false;
let usernameb = false;
let cityb = false;

function validateform() {
  if (fnameb === false) {
    alert("Invalid first name");
    return false;
  }
  if (lnameb === false) {
    alert("Invalid last name");
    return false;
  }
  if (emailb === false) {
    alert("Invalid email");
    return false;
  }
  if (passwordb === false) {
    alert("Invalid password");
    return false;
  }
  if (cpasswordb === false) {
    alert("Invalid confirm password");
    return false;
  }
  if (phonenumberb === false) {
    alert("Invalid phone number");
    return false;
  }
  if (addressb === false) {
    alert("Invalid address");
    return false;
  }
  if (stateb === false) {
    alert("Invalid state");
    return false;
  }
  if (zipcodeb === false) {
    alert("Invalid zip code");
    return false;
  }
  if (usernameb === false) {
    alert("Invalid username");
    return false;
  }
  if (cityb === false) {
    alert("Invalid city");
    return false;
  }

  alert("Form submitted successfully");
  return true;
}

const firstName = document.querySelector("#name1");

function validateFirstName() {
  let firstNameValue = firstName.value;
  let reg = /^[A-Za-z]{2,20}$/gm;
  let error = document.querySelector("#n11");

  if (reg.test(firstNameValue)) {
    error.innerHTML = "";
    fnameb = true;
  } else {
    error.innerHTML = '<span class="red">Invalid first name</span>';
  }
}

const lastName = document.querySelector("#name3");

function validateLastName() {
  let lastNameValue = lastName.value;
  let reg = /^[A-Za-z]{2,20}$/gm;
  let error = document.querySelector("#n13");

  if (reg.test(lastNameValue)) {
    error.innerHTML = "";
    lnameb = true;
  } else {
    error.innerHTML = '<span class="red">Invalid last name</span>';
  }
}

const email = document.querySelector("#email");

function validateEmail() {
  let emailValue = email.value;
  let reg = /^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b$/gm;
  let error = document.querySelector("#n14");
  let myArr = emailValue.split(".");

  if (myArr[myArr.length - 1] === myArr[myArr.length - 2]) {
    error.innerHTML = '<span class="red">Invalid email address</span>';
  } else if (reg.test(emailValue)) {
    error.innerHTML = "";
    emailb = true;
  } else {
    error.innerHTML = '<span class="red">Invalid email address</span>';
  }
}




let address = document.querySelector("#address");

function validateAddress() {
  let addressValue = address.value;
  let error = document.querySelector("#n17");

  if (addressValue.trim() === "") {
    error.innerHTML = '<span class="red">Address is required</span>';
  } else {
    error.innerHTML = "";
    addressb = true;
  }
}

let state = document.querySelector("#state");

function validateState() {
  let stateValue = state.value;
  let error = document.querySelector("#n19");

  if (stateValue.trim() === "") {
    error.innerHTML = '<span class="red">State is required</span>';
  } else {
    error.innerHTML = "";
    stateb = true;
  }
}

let zipCode = document.querySelector("#zip");

function validateZipCode() {
  let zipCodeValue = zipCode.value;
  let reg = /^\d{5}$/gm;
  let error = document.querySelector("#n20");

  if (reg.test(zipCodeValue)) {
    error.innerHTML = "";
    zipcodeb = true;
  } else {
    error.innerHTML = '<span class="red">Invalid zip code</span>';
  }
}

let userName = document.querySelector("#username");

function validateUsername() {
  let userNameValue = userName.value;
  let reg = /^[A-Za-z0-9_]{4,20}$/gm;
  let error = document.querySelector("#n22");

  if (reg.test(userNameValue)) {
    error.innerHTML = "";
    usernameb = true;
  } else {
    error.innerHTML = '<span class="red">Invalid username</span>';
  }
}

let city = document.querySelector("#city");

function validateCity() {
  let cityValue = city.value;
  let error = document.querySelector("#n23");

  if (cityValue.trim() === "") {
    error.innerHTML = '<span class="red">City is required</span>';
  } else {
    error.innerHTML = "";
    cityb = true;
  }
}

let password=document.querySelector("#password");
function validatePassword() {
  let passwordValue = password.value;
  let error = document.document.querySelector("#23");
  if()
}

firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);
phoneNumber.addEventListener("input", validatePhoneNumber);
address.addEventListener("input", validateAddress);
state.addEventListener("input", validateState);
zipCode.addEventListener("input", validateZipCode);
userName.addEventListener("input", validateUsername);
city.addEventListener("input", validateCity);


function updatePhoneCode() {
  var country = document.getElementById("country").value;
  var phoneCodeInput = document.getElementById("phoneCode");
  var phoneInput = document.getElementById("phone");

  if (country === "India") {
    phoneCodeInput.value = "+91";
    phoneInput.maxLength = 10;
  } else if (country === "UK") {
    phoneCodeInput.value = "+44";
    phoneInput.maxLength = 11;
  } else if (country === "Australia") {
    phoneCodeInput.value = "+61";
    phoneInput.maxLength = 9;
  } else {
    phoneCodeInput.value = "";
    phoneInput.maxLength = 15; 
  }
}
