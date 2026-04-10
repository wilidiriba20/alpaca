let hair = ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"];
let ears = ["default", "tilt-backward", "tilt-forward"];
let eyes = ["angry", "default", "naughty", "panda", "smart", "star"];
let leg = [
    "bubble-tea",
    "cookie",
    "default",
    "game-console",
    "tilt-backward",
    "tilt-forward",
];
let mouth = ["astonished", "default", "eating", "laugh", "tongue"];
let neck = ["bend-backward", "bend-forward", "default", "thick"];
let accessories = ["earings", "flower", "glasses", "headphone"];
let backgrounds = [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow60",
    "yellow70",
];

let buttonGroup = document.getElementsByClassName("button-group");
let buttons = Array.from(document.getElementsByTagName("button"));

function image_change(type, item) {
    let image = document.getElementsByClassName(type)[0];
    image.src = `../alpaca/${type}/${item}.png`;
}

function buttonscreate(type) {
    let arr = [];

    if (type === "hair") arr = hair;
    else if (type === "ears") arr = ears;
    else if (type === "eyes") arr = eyes;
    else if (type === "leg") arr = leg;
    else if (type === "mouth") arr = mouth;
    else if (type === "neck") arr = neck;
    else if (type === "accessories") arr = accessories;
    else if (type === "backgrounds") arr = backgrounds;

    buttonGroup[1].innerHTML = "";

    arr.forEach((item) => {
        let button = document.createElement("button");
        button.innerText = item;
        button.addEventListener("click", function () {
            image_change(type, item);
        });
        buttonGroup[1].appendChild(button);
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        buttonscreate(event.target.id);
    });
});
