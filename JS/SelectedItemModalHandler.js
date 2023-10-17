var mainBody = document.body;
var SelectedItemModal = document.getElementById("selected-item-main-modal");

function OpenSelectedModal(){
    if(SelectedItemModal){
        mainBody.className += "bodyModalActive";

        SelectedItemModal.className = SelectedItemModal.className.replace(" modalClose", "");
        setTimeout(() => {
            SelectedItemModal.className = SelectedItemModal.className.replace(" fadeOut", " fadeIn");
        }, 100);
    }
}

function CloseSelectedModal(){
    if(SelectedItemModal){
        SelectedItemModal.className = SelectedItemModal.className.replace(" fadeIn", " fadeOut");

        setTimeout(() => {
            SelectedItemModal.className += " modalClose";
            mainBody.className = mainBody.className.replace("bodyModalActive", "");
        }, 500);
    }
}

// Validate Input

var inputBox = document.querySelector("#selectedQuantity");

var invalidChars = ['e','+','-','.'];

inputBox.addEventListener("keydown", function(e) {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
});