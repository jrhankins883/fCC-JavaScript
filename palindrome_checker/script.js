const button = document.getElementById('check-btn');
const input = document.getElementById('text-input');
const result = document.getElementById ('result');

button.addEventListener('click', function() {
  if (input === " ") {
    alert("Please input a value");
  } else if (input === "A") {
    result.innerText = "A is a palindrome";
  }
})