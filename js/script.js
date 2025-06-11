function validateForm() {
  var name = document.forms["message-form"]["full-name"].value;
  var date = document.forms["message-form"]["birth-date"].value;
  var gender = document.forms["message-form"]["gender"].value;
  var messages = document.forms["message-form"]["messages"].value;

  if (name == "" || date == "" || gender == "" || messages == "") {
    alert("Input tidak boleh kosong");
    return false;
  }

  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-birth-date").innerText = date;
  document.getElementById("sender-gender").innerText = gender;
  document.getElementById("sender-messages").innerText = messages;
  return false;
} 

let indexBanner = 0;

showBanner();

/// Increment index
function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    // DOM Banner
    const listImage = document.getElementsByClassName("about-img");

    // Reset index
    if (indexBanner > listImage.length - 1) {
        indexBanner = 0;
    }

    /// Looping to hide all banner
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }

    listImage[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);