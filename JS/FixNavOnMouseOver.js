function onHover(IdentifyStart){

    if(IdentifyStart == "NavLinkStart_Home"){
        document.getElementById("NavLink_Home").style.backgroundColor = "maroon";
        document.getElementById("NavLinkButton_Home").style.color = "white";
    }

    if(IdentifyStart == "NavLinkStart_Menu"){
        document.getElementById("NavLink_Menu").style.backgroundColor = "maroon";
        document.getElementById("NavLinkButton_Menu").style.color = "white";
    }

    if(IdentifyStart == "NavLinkStart_MyBag"){
        document.getElementById("NavLink_MyBag").style.backgroundColor = "maroon";
        document.getElementById("NavLinkButton_MyBag").style.color = "white";
    }

    if(IdentifyStart == "NavLinkStart_OrderTracker"){
        document.getElementById("NavLink_OrderTracker").style.backgroundColor = "maroon";
        document.getElementById("NavLinkButton_OrderTracker").style.color = "white";
    }

    if(IdentifyStart == "NavLinkStart_Hotlines"){
        document.getElementById("NavLink_Hotlines").style.backgroundColor = "maroon";
        document.getElementById("NavLinkButton_Hotlines").style.color = "white";
    }

    if(IdentifyStart == "NavLinkStart_LogIn"){
        document.getElementById("NavLink_LogIn").style.backgroundColor = "maroon";
        document.getElementById("NavLinkButton_LogIn").style.color = "white";
    }
    
}

function onStopHover(IdentifyEnd){
    if(IdentifyEnd == "NavLinkEnd_Home"){
        document.getElementById("NavLink_Home").style.backgroundColor = "transparent";
        document.getElementById("NavLinkButton_Home").style.color = "black";
    }

    if(IdentifyEnd == "NavLinkEnd_Menu"){
        document.getElementById("NavLink_Menu").style.backgroundColor = "transparent";
        document.getElementById("NavLinkButton_Menu").style.color = "black";
    }
    
    if(IdentifyEnd == "NavLinkEnd_MyBag"){
        document.getElementById("NavLink_MyBag").style.backgroundColor = "transparent";
        document.getElementById("NavLinkButton_MyBag").style.color = "black";
    }

    if(IdentifyEnd == "NavLinkEnd_OrderTracker"){
        document.getElementById("NavLink_OrderTracker").style.backgroundColor = "transparent";
        document.getElementById("NavLinkButton_OrderTracker").style.color = "black";
    }

    if(IdentifyEnd == "NavLinkEnd_Hotlines"){
        document.getElementById("NavLink_Hotlines").style.backgroundColor = "transparent";
        document.getElementById("NavLinkButton_Hotlines").style.color = "black";
    }

    if(IdentifyEnd == "NavLinkEnd_LogIn"){
        document.getElementById("NavLink_LogIn").style.backgroundColor = "transparent";
        document.getElementById("NavLinkButton_LogIn").style.color = "black";
    }
}

