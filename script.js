function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  const includeAlphabets = document.getElementById('alphabets').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  let characters = '';
  if (includeAlphabets) characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers) characters += '0123456789';
  if (includeSymbols) characters += '!@#$%^&*()_+[]{}|;:,.<>?/';

  if (!characters) {
    alert('Please select at least one option!');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  document.getElementById('output').value = password;
}

function copyToClipboard() {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}
