//element
let eventKeyText = document.querySelector("#eventKey");
let eventLocationText = document.querySelector("#eventLocation");
let eventWhice = document.querySelector("#eventWhice");
let eventCode = document.querySelector("#eventCode");
let keypressText = document.querySelector("#keypress");

window.addEventListener("keydown", function (e){
    console.log(e.which)
    //add press key and wird keys
    keypressText.innerHTML = e.which;
    eventKeyText.innerHTML = e.key;
    eventLocationText.innerHTML = e.location;
    eventWhice.innerHTML = e.which;
    eventCode.innerHTML = e.code;
});


//add Press any key to get the JavaScript event keycode at start 
//add style for text