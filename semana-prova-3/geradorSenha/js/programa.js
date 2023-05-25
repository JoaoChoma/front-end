const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()-=_+[]{}|;:,.<>?";

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  let chars = "";
  let password = "";

  if (includeUppercase) {
    chars += uppercaseChars;
  }
  if (includeLowercase) {
    chars += lowercaseChars;
  }
  if (includeNumbers) {
    chars += numberChars;
  }
  if (includeSymbols) {
    chars += symbolChars;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
  alert("Senha copiada para a área de transferência!");
}
