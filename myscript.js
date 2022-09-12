// function theme(){
//     document.querySelector("#theme").classList.toggle("dark");
// }

var click = 0;

function checkclick() {
    
    if ( click % 2 == 0 ){
        Dtheme();
    }
    else{
        Ltheme();
    }
    click++;
}

function Dtheme() {
    // document.querySelector("button.middle-container").classList.toggle("theme");

    var element = document.body;
    element.style.backgroundColor = "black";
    element.style.color = "white";

    // element.getElementById(image).style.border = "1";
    // element.getElementsById(image).style.borderColor = "white"
    // document.getElementById(image).style.border = "1";
    // document.getElementById(image).style.borderColor = "white";
}

function Ltheme() {
    var element = document.body;
    element.style.backgroundColor = "White";
    element.style.color = "#40514E";
 }

// //  function theme(){
// //     var Top = document.getElementsByClassName(top);
// //     Top.style.backgroundColor = "#100F0F";
// //     Top.style.color = "white";
// //  }