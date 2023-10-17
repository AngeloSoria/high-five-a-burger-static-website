var inputBox = document.getElementById("register-mobile-number");



var invalidChars = ['e','+','-','.'];
inputBox.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
});