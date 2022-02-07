function switchOff(){
    document.getElementById("bulbImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent ="Swtiched Off";
    document.getElementById("offButton").style.backgroundColor ="#cbd2d9";
    document.getElementById("onButton").style.backgroundColor ="#22c55e";
}
function switchOn(){
    document.getElementById("bulbImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent ="Switched On";
    document.getElementById("onButton").style.backgroundColor ="#cbd2d9";
    document.getElementById("offButton").style.backgroundColor ="#22c55e";
}