



const menuItems = document.getElementById("menu-items");

menuItems.style.maxHeight = "0px";

function toggleMenu(){
    
    if(menuItems.style.maxHeight == "0px"){

        menuItems.style.maxHeight = "200px";

    }else{
        menuItems.style.maxHeight = "0px";

    }

}

// js for product gallery

let productImg = document.getElementById("productImg")
let smallImg = document.getElementsByClassName("small-img")

function imageChange(x){
    productImg.src = smallImg[x].src
}

// js for toggle Form 

        const loginForm = document.getElementById("loginForm")
        const regForm = document.getElementById("regForm")
        const Indicator = document.getElementById("Indicator")
        
        function register(){
            regForm.style.transform = "translateX(0px)"
            loginForm.style.transform = "translateX(0px)"
            Indicator.style.transform = "translateX(100px)"
        }

        function login(){
            regForm.style.transform = "translateX(300px)"
            loginForm.style.transform = "translateX(300px)"
            Indicator.style.transform = "translateX(0px)"
        }


    