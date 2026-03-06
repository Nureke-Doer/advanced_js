var appStatus = "active";
var userData = { name: "Nureke" };

function validateAndSave() {
  if (userData.name !== "") {
    console.log("Saving...");
    setTimeout("console.log('Done!')", 1000);
  }
}

function updateProfile() {
  if (userData.name !== "") {
    console.log("Updating profile...");
  }
}