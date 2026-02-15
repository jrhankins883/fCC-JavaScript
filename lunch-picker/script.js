let lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`)
  return arr;
}
addLunchToEnd(lunches, "Tacos")

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`)
  return arr;
}
addLunchToStart(lunches, "Sushi")

function removeLastLunch(arr) {
  let items = arr.pop();
  if (items !== undefined) {
    console.log(`${items} removed from the end of the lunch menu.`)
  } else {
    console.log("No lunches to remove.")
  }
  return arr;
}
removeLastLunch(lunches)

function removeFirstLunch(arr) {
  let items = arr.shift();
  if (items !== undefined) {
    console.log(`${items} removed from the start of the lunch menu.`)
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}
removeFirstLunch(lunches)

function getRandomLunch(arr) {
  let random = Math.floor(Math.random() * arr.length);
  if (random) {
    console.log(`Randomly selected lunch: ${random}`)
  } else {
    console.log("No lunches available.")
  }
  return arr;
}
getRandomLunch(lunches)