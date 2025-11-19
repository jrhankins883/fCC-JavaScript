let email = "kubrickjcroft@gmail.com"

function maskEmail(email) {
  const [user, domain] = email.split("@");
  const masked = user[0] + "*".repeat(user.length - 1);
  return `${masked}@${domain}`;
}

maskEmail(email);
console.log(email);
maskEmail("apple.pie@example.com")
console.log(email)