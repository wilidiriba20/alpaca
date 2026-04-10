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
let nose = ["nose"];
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
  image.src = `alpaca/${type}/${item}.png`;
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

document.getElementById("download").addEventListener("click", function () {
  var container = document.getElementsByClassName("alpaca-image")[0];
  html2canvas(container, {
    allowTaint: true,
  }).then(function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.jpg";
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
  });
});
document.getElementById("random").addEventListener("click", function () {
  let random_backgrounds =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  image_change("backgrounds", random_backgrounds);
  let random_hair = hair[Math.floor(Math.random() * hair.length)];
  image_change("hair", random_hair);
  let random_ears = ears[Math.floor(Math.random() * ears.length)];
  image_change("ears", random_ears);
  let random_eyes = eyes[Math.floor(Math.random() * eyes.length)];
  image_change("eyes", random_eyes);
  let random_leg = leg[Math.floor(Math.random() * leg.length)];
  image_change("leg", random_leg);
  let random_mouth = mouth[Math.floor(Math.random() * mouth.length)];
  image_change("mouth", random_mouth);
  let random_neck = neck[Math.floor(Math.random() * neck.length)];
  image_change("neck", random_neck);
  let random_accessories =
    accessories[Math.floor(Math.random() * accessories.length)];
  image_change("accessories", random_accessories);
});
