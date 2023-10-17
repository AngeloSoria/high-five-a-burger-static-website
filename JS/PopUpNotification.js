
//FOR POPUP MODAL
var mainBody = document.body;
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

        setTimeout(() => {
            mainBody.className = mainBody.className.replace("bodyModalActive", "");
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

