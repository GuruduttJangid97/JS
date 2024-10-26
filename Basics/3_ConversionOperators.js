let score = null;

console.log(typeof score);
console.log(typeof (score));

let intNumber = Number(score);
console.log(typeof intNumber);
console.log(intNumber);

// "33" String => 33 Number Conversion Done;
// "33abc" AlphaNumberic => Produce, {NAN}, Conversion Done but Not in Number
// True => 1; false => 0;

let value = 1;
let booleanValue = Boolean(value);
console.log(booleanValue);

// 1 => True; 0=> False;
// "" => False;
// "Gurudutt" =>true

console.log("1" + 2); // Produce 12
console.log(1 + "2"); // Produce 12
console.log("1" + 2 + 2); // Produce 122
console.log(1 + 2 + "2"); // Produce 32

console.log(+true); // Produce 1
// console.log(true+); // Unexcpted Token Error
console.log(+""); //String by this + Produce 0

let gamecounter = 100;
gamecounter++;
console.log(gamecounter);