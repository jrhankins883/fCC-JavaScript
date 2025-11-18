let fortune1 = "You will get to see another planet one day!";
const fortune2 = "You will get to swim in the middle of the ocean one day (for fun).";
const fortune3 = "You will see a portal to another dimension in your lifetime.";
const fortune4 = "You will not go through the portal because you will make the smart decision.";
const fortune5 = "You will marry the love of your life and experience these things together.";

let randomNumber = Math.floor(Math.random() * 5) + 1;
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune)

/* Testing */