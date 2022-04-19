const animation1Timer = setTimeout(animation1Hider, 2900);

function animation1Hider() {
    var animation1 = document.getElementById("animation1");
    animation1.classList.add("displayNone");
}