var svgs = document.getElementsByTagName("svg"),
    origviewbox = svgs[0].getAttribute("viewBox"),
    overwatch = window.matchMedia("(min-width: 801px)"),
    overtext = window.matchMedia("(max-width: 800px)"),
    overcircle = window.matchMedia("(max-width: 500px)");

function boxChange(coords) {
    for (var i = 0; i < svgs.length; i++) {
        svgs[i].setAttribute("viewBox", coords);
    }
}

window.onresize = function () {
    if (overtext.matches) {
        boxChange("0 140 350 200");
    }
    if (overcircle.matches) {
        boxChange("100 0 150 140");
    }
    if (overwatch.matches) {
        boxChange(origviewbox);
    }
}