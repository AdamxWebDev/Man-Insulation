const mobileMenuButton = document.getElementById("MENU_BUTTON");
const mobileNavBlock = document.getElementById('HIDDEN_NAV');
const menuClose = document.getElementById('MENU_CLOSE');

const myFunction = () => {
    if (mobileNavBlock.style.display === "none") {
        mobileNavBlock.style.display = "block";
    } else {
        mobileNavBlock.style.display = "none";
    }
}

mobileMenuButton.onclick = myFunction;
menuClose.onclick = myFunction;