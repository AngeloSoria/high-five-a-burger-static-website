
function redirectToCheckOut(){
    window.location.href = "../HTML/CheckOutModule.html"
}

function redirectToEditItem(item_name){
    if (item_name == "item-double-decker"){
        window.location.href = "../HTML/Item_DoubleDecker.html";
    }
}

function myBagRemoveItem(item_name){
    var getAnswer;
    if(item_name == "item-double-decker"){
        getAnswer = confirm("Are you sure removing this item Double Decker?");
    }

    if (getAnswer == true){
        alert("NOTICE: \n > Static Website, Item not removed from MyBag.");
    }
}

var mainBody = document.body;
var MyBagModule = document.getElementById("my-bag-main-modal");

function OpenMyBagModule(){
    if(MyBagModule){
        mainBody.className += "bodyModalActive";

        MyBagModule.className = MyBagModule.className.replace(" modalClose", "");
        setTimeout(() => {
            MyBagModule.className = MyBagModule.className.replace(" fadeOut", " fadeIn");
        }, 100);
    }
}

function CloseMyBagModule(){
    if(MyBagModule){
        
        
        MyBagModule.className = MyBagModule.className.replace(" fadeIn", " fadeOut");

        setTimeout(() => {
            MyBagModule.className += " modalClose";
            mainBody.className = mainBody.className.replace("bodyModalActive", "");
        }, 500);
    }
}
