function hexColorGen() {
    let str = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++) {
        color += str[Math.floor(Math.random() * 16)];
    }
    return color;
}

function bgRandom() {
    let color = hexColorGen();
    document.body.style.backgroundColor = color;
    document.getElementById("header").textContent = color;
}

function bgCustom() {
    let color = document.getElementById("input").value;
    document.body.style.backgroundColor = color;
    document.getElementById("header").textContent = color;
    if(color == "") {
        document.getElementById("header").textContent = "#FFFFFF";
    }
}