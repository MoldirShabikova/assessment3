let randomBtn = document.querySelector("#random");
let text = document.getElementById("text");

let arr = [
  "Asian",
  "Cidercade Austin",
  "The Melting Pot",
  "Roaring Fork",
  "Barley Swine",
];

randomBtn.addEventListener(
  "click",
  (getRandom = () => {
    let random = Math.floor(Math.random() * arr.length);
    text.innerHTML = arr[random];

    return random;
  })
);
