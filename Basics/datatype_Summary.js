// Primitive 

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Primitive Datatype CallbyValue

const string = "Gurudutt";
const number = 123456;
const score = false;
const value = null;
let weather;

const id = Symbol('123') // Symbol is used to create Unique Value;
const anotherId = Symbol('1234');
console.log(id === anotherId);

const BigNumber = 123456789n;

// CallByReference or Reference(Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman","naagraj","Arihant"]; // Array;

let PersonalDetails = {
    id : 123,
    name : "Gurudutt Jangid",
    age: 22,
} //Object
