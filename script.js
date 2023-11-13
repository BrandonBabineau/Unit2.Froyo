/// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. 
///They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
///When they view the browser console, they observe an object listing how many of each flavor they have ordered. 
///In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

const userInputString = prompt(
    "Enter froyo flavors:", "vanilla, vanilla, vanilla, strawberry, coffee, coffee");

const flavor = ["vanilla", "strawberry", "coffee"];

function mapOrder(elements) {
    const map = {};
    for (let i = 0; i < elements.length; i++) {
        if (map[elements[i]]) {
            map[elements[i]]++;
        } else {
            map[elements[i]] = 1;
        }
    }
    return map;
}
const userFlavors = userInputString.split(',').map(flavor => flavor.trim());{
const flavorCounts = mapOrder(userFlavors);
console.log(flavorCounts);}
