window.onload = init;

// Function called when page loaded
function init(){
    generateFooter();
}

// Appends current year to the page footer of copyright
function generateFooter(){
    var copyrightParagraph = document.getElementById("copyright");
    var currentYear = document.createTextNode(new Date().getFullYear());
    copyrightParagraph.appendChild(currentYear);
}

///////////////////////////////////////////////////////////
/*
    DROPDOWN MENU FOR MOBILE SCREENS
*/

// Get Menu button
var openButton = document.getElementById("menu-btn");
openButton.addEventListener("click", toggleMenu);

// Set initial State
document.getElementById("menu-page").style.opacity = 0;
document.getElementById("menu-page").style.height = 0;
document.getElementById("menu-page").style.overflow = "hidden";

// Toggle Menu
function toggleMenu(){
    var menu = document.getElementById("menu-page");
    var header = document.getElementById("header-mobile");
    var main = document.getElementById("main");
    var footer = document.getElementById("footer-content");

    // Open Menu, turn button to close button
    if(menu.style.opacity == 0){
        var style = window.getComputedStyle(document.documentElement).getPropertyValue('--siteBackground');
        header.style.backgroundColor = (style);
  
        menu.style.height = window.innerHeight * 0.90 + "px";
        menu.style.opacity = 1;
       
        main.style.display = "none";
        footer.style.display = "none";

        console.log("Open Menu");
    }
    // Close Menu, turn button to open button
    else if((menu.style.opacity == 1)) {
        var style = window.getComputedStyle(document.documentElement).getPropertyValue('--siteHeader');
        header.style.backgroundColor = (style);

        main.style.display = "block";
        footer.style.display = "flex";
        
        menu.style.opacity = 0;
        menu.style.height = 0;
        menu.style.overflow= "hidden";
        console.log("Close Menu");
    }
}
