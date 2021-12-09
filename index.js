function navbarIsContactTrue(){
    let guest = document.getElementById("contact-form");
    contact.style.display = "block";
    program_list.style.display = "none";
}
function navbarIsContactFalse(){
    let guest = document.getElementById("contact-form");
    contact.style.display = "none";
    program_list.style.display = "block";
}
function showContact() {
  let contact = document.getElementById("contact-form");
  let program_list = document.getElementById("program-list");
  contact.style.display = "block";
  program_list.style.display = "none";
}
function showHome() {
  let contact = document.getElementById("contact-form");
  let program_list = document.getElementById("program-list");
  contact.style.display = "none";
  program_list.style.display = "block";
}
function contactUs(event) {
  event.preventDefault();
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1").value;
}

main();
