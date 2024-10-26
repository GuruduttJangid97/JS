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