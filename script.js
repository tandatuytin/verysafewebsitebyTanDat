alert("PLEASE READ THIS: Before going into this website, click okay to continue")
alert("To make sure that you're safe, I'll introduce to the person who made this website, he's Nguyen Dinh Tan Dat, your classmates right?")
alert("You see? This is not a virus")
alert("Now we proceed to the website... Thank you for reading this :D")
let heading = document.getElementById()
let duration = 0.3
let label = document.getElementById("hovering_open")
label.style.opacity = "0";
function hovering(){
    label.style.animationName = "hovering"
    label.style.animationDuration = duration + "s";
    label.style.animationFillMode = "forwards";
}

function unhovering(){
    label.style.animationName = "unhovering"
    label.style.animationDuration = duration + "s";
    label.style.animationFillMode = "forwards";
}
