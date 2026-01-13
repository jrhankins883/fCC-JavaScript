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
  let item = arr;
  if (item.pop === "Toast") {
    console.log(`${item} removed from the end of the lunch menu.`)
  } else {
    console.log("No lunches to remove.")
  }
}
removeLastLunch(lunches, "Toast")

function removeFirstLunch(arr) {
  if (arr.shift === true) {
    console.log(`${arr} removed from the start of the lunch menu.`)
  } else if (arr.length === 0) {
      console.log("No lunches to remove");
  }
}
removeFirstLunch(lunches, "Salad")

function getRandomLunch(arr) {

}