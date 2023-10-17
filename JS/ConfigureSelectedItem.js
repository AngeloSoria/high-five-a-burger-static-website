
function EditModal(xIcon, xName, xPrice){
    var itemIcon = document.getElementById("selectedIconImage");
    var itemName = document.querySelector("#selectedName");
    var itemPrice = document.querySelector("#selected-price");

    itemIcon.src = xIcon;
    itemName.innerHTML = xName;
    itemPrice.innerHTML = xPrice;
}


var Icon, Name, Price;
function ConfigureSelectedItemModal(selectedItem){

    if (selectedItem == "item-single-decker"){
        Icon = "../Images/MenuItems/Burgers/SingleDecker.png";
        Name = "Single Decker";
        Price = 90;

        EditModal(Icon, Name, Price);
    }
    else if (selectedItem == "item-double-decker"){
        Icon = "../Images/MenuItems/Burgers/DoubleDecker.png";
        Name = "Double Decker";
        Price = 135;

        EditModal(Icon, Name, Price);
    }
    else if (selectedItem == "item-cheesy-cheese-footlong"){
        Icon = "../Images/MenuItems/Footlongs/CheesyCheeseFootlong.png";
        Name = "Cheesy Cheese Footlong";
        Price = 65;

        EditModal(Icon, Name, Price);
    }
    else if (selectedItem == "item-duo-overload"){
        Icon = "../Images/MenuItems/Footlongs/DuoOverload.png";
        Name = "Duo Overload";
        Price = 125;

        EditModal(Icon, Name, Price);
    }
    else if (selectedItem == "item-footlong-overload"){
        Icon = "../Images/MenuItems/Footlongs/FootlongOverload.png";
        Name = "Footlong Overload";
        Price = 125;

        EditModal(Icon, Name, Price);
    }
    else if (selectedItem == "item-single-overload"){
        Icon = "../Images/MenuItems/Footlongs/SingleOverload.png";
        Name = "Single Overload";
        Price = 65;

        EditModal(Icon, Name, Price);
    }
    else if (selectedItem == "item-cheesy-cheese-fries"){
        Icon = "../Images/MenuItems/Fries/CheesyCheeseFries.png";
        Name = "Cheesy Cheese Fries";
        Price = 50;

        EditModal(Icon, Name, Price);
    }
    else if (selectedItem == "item-fries-overload"){
        Icon = "../Images/MenuItems/Fries/FriesOverload.png";
        Name = "Fries Overload";
        Price = 119;

        EditModal(Icon, Name, Price);
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} 

function calculatePrice(Quantity){
    var itemPrice = document.querySelector("#selected-price");
    var calculate = Price * Quantity
    itemPrice.innerHTML = numberWithCommas(calculate);
}

function configureQuantity(getType){
    var itemQuantity = document.getElementById("selectedQuantity");
    var quan = parseInt(itemQuantity.value, 10);
    quan = isNaN(quan) ? 0 : quan;

    if (getType === "min"){
        if (itemQuantity.value > 1) {
            quan--;
            itemQuantity.value = quan;
        }
    }
    else if(getType === "add"){
        quan++;
        itemQuantity.value = quan;
    }

    calculatePrice(itemQuantity.value);
}

function selectItemReset(){
    var itemQuantity = document.getElementById("selectedQuantity");
    var itemPrice = document.querySelector("#selected-price");
    itemQuantity.value = 1;
    itemPrice.innerHTML = 0.00;
}





//FOR POPUP MODAL
var mainBody = document.body;
var SelectedItemModal = document.getElementById("selected-item-main-modal");
var NotificationModal = document.getElementById("notification-main-modal");
var NotificationOption = document.getElementById("modal-notification-content-options");

//NOTIFICATIONS IMAGE AND TEXT
var notifIcon = document.getElementById("modal-notification-content-icon");
var notifText = document.getElementById("modal-notification-content-title-text");
//Images
var loadingImage = "../Images/Icons/GIF/Dual-Ring-Icon-Maroon.png";
var checkImage = "../Images/Icons/GIF/Check-Icon-Green.png";


function OpenNotificationModal(){
    if(NotificationModal){
        mainBody.className += "bodyModalActive";

        //SELECTED ITEM MODAL CLOSE
        SelectedItemModal.className = SelectedItemModal.className.replace(" fadeIn", " fadeOut");

        setTimeout(() => {
            SelectedItemModal.className += " modalClose";
            mainBody.className = mainBody.className.replace("bodyModalActive", "");

            selectItemReset();
        }, 500);

        ///////////

        NotificationModal.className = NotificationModal.className.replace(" modalClose", "");
        setTimeout(() => {
            NotificationModal.className = NotificationModal.className.replace(" fadeOut", " fadeIn");
        }, 100);

        //wait(2 seconds) til change icon and text
        setTimeout(() =>{
            notifIcon.className = notifIcon.className.replace(" icon-animation-spinning", " icon-animation-popup");
            notifIcon.src = checkImage;
            notifText.innerHTML = "Item added to My Bag Successfully!";
            
            //Wait 1 seconds
            setTimeout(() =>{
                NotificationOption.className = NotificationOption.className.replace(" modal-notification-options-disabled", "");
            }, 1500);
        }, 2000);
        
        
    }
}

function CloseNotificationModal(){
    if(NotificationModal){
        NotificationModal.className = NotificationModal.className.replace(" fadeIn", " fadeOut");

        setTimeout(() => {
            notifIcon.className = notifIcon.className.replace(" icon-animation-popup", " icon-animation-spinning");
            NotificationModal.className += " modalClose";
            mainBody.className = mainBody.className.replace("bodyModalActive", "");
        }, 500);

        //wait(2 seconds) til change icon and text
        setTimeout(() =>{
            notifIcon.src = loadingImage;
            notifText.innerHTML = "Processing...";
            NotificationOption.className += "  modal-notification-options-disabled";

            setTimeout(() => {
                window.location.href = "../HTML/MenuModule.html";
            }, 500);
            

        }, 500);
    }
}

