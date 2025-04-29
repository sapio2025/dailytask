
var password = prompt("Enter password:");
if (password !== "yourpassword") {
  document.write("Access Denied");
  window.location.href = "https://google.com";
}
