let email = "kubrickjcroft@gmail.com"

function maskEmail(email) {
  const [user, domain] = email.split("@");
  const masked = user[0] + "*".repeat(user.length - 2) + user.slice(-1);
  return `${masked}@${domain}`;
}

console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))