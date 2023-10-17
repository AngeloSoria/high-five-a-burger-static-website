var mainBody = document.body;
var loginModule = document.getElementById("Log-In-Main-Modal");

function OpenLogInModule(){
    if(loginModule){
        mainBody.className += "bodyModalActive";

        
        loginModule.className = loginModule.className.replace(" modalClose", "");
        setTimeout(() => {
            loginModule.className = loginModule.className.replace(" fadeOut", " fadeIn");
        }, 100);
    }
}

function CloseLogInModule(){
    if(loginModule){
        
        
        loginModule.className = loginModule.className.replace(" fadeIn", " fadeOut");

        setTimeout(() => {
            loginModule.className += " modalClose";
            mainBody.className = mainBody.className.replace("bodyModalActive", "");
        }, 500);
    }
}