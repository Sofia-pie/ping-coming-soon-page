const inputField = document.querySelector(".form__input");
const submitButton = document.querySelector(".form__button");
const message = document.querySelector(".message");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = inputField.value;
  if (inputValue === "") {
    inputField.classList.add("error");
    message.textContent = "Whoops! It looks like you forgot to add your email";
    message.classList.add("error-text");
    message.classList.remove("hidden");
  } else if (validateEmail(inputValue)) {
    inputField.classList.add("succes");
    message.textContent = "Succes!";
    message.classList.add("succes-text");
    message.classList.remove("hidden");
  } else {
    inputField.classList.add("error");
    message.textContent = "Please provide a valid email address";
    message.classList.add("error-text");
    message.classList.remove("hidden");
  }
});

function validateEmail(email) {
  var pattern =
    /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  if (pattern.test(email)) {
    return true;
  } else {
    return false;
  }
}
