window.addEventListener('DOMContentLoaded',init,false);
function init() {
    var buttons = document.getElementsByTagName("button");
var button = buttons[0];
button.addEventListener('click',show_hide,false);
}

function show_hide(){
    var p1 = document.getElementByClass("interactive")
    if (p1.style.display != 'none') {
        p1.style.display = "none";
        }else{
            p1.style.display = 'block';
        }}
