const form = document.getElementById("form");
const prenomInput: HTMLInputElement = document.getElementById("prenomInput") as HTMLInputElement;
const emailInput: HTMLInputElement = document.getElementById("emailInput") as HTMLInputElement;
const passwordInput: HTMLInputElement = document.getElementById("passwordInput") as HTMLInputElement;
const repeatPasswordInput: HTMLInputElement = document.getElementById("repeatPasswordInput") as HTMLInputElement;

form!.addEventListener("submit", (e) => {
  e.preventDefault();
  validateAllFields();
});

function validateAllFields() {
  let isValid = true;

  if (prenomInput) {
    isValid = validateField(prenomInput, "Le prénom est requis") && isValid;
  }
  isValid = validateField(emailInput, "L'email est requis") && isValid;
  isValid =
    validateField(passwordInput, "Le mot de passe est requis") && isValid;

  if (repeatPasswordInput) {
    isValid =
      validateField(
        repeatPasswordInput,
        "La confirmation du mot de passe est requise"
      ) && isValid;
    if (passwordInput.value !== repeatPasswordInput.value) {
      showError(repeatPasswordInput, "Les mots de passe ne correspondent pas");
      isValid = false;
    }
  }

  if (passwordInput!.value.length < 8) {
    showError(
      passwordInput,
      "Le mot de passe doit contenir au moins 8 caractères"
    );
    isValid = false;
  }

  if (isValid) {
    if (prenomInput) {
      localStorage.setItem("prenom", prenomInput.value);
    }
    window.location.href = "index.html";
  }
}

function validateField(input: HTMLInputElement, errorMessage: string) {
  if (input.value.trim() === "") {
    showError(input, errorMessage);
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

function showError(input: HTMLInputElement, errorMessage: string) {
  const parentElement = input.parentElement;
  parentElement!.classList.remove("success");
  parentElement!.classList.add("error");

  let errorElement = parentElement!.querySelector(".validation-message");
  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = "validation-message";
    parentElement!.appendChild(errorElement);
  }
  errorElement.innerHTML = `<i class="fa-regular fa-circle-xmark"></i> ${errorMessage}`;
}

function showSuccess(input: HTMLInputElement) {
  const parentElement = input.parentElement;
  parentElement!.classList.remove("error");
  parentElement!.classList.add("success");

  let messageElement = parentElement!.querySelector(".validation-message");
  if (messageElement) {
    messageElement.textContent = "";
  }
}

function clearValidation(input: HTMLInputElement) {
  const parentElement = input.parentElement;
  parentElement!.classList.remove("error", "success");

  const messageElement = parentElement!.querySelector(".validation-message");
  if (messageElement) {
    messageElement.remove();
  }
}

const allInputs = [
  prenomInput,
  emailInput,
  passwordInput,
  repeatPasswordInput,
].filter((input) => input !== null);

allInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    validateField(input, `Le champ ${input.name} est requis`);
  });

  input.addEventListener("input", () => {
    clearValidation(input);
  });
});
