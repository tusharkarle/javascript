// data types
// 1... Primitive Datatypes --> String , numbers , boolean , null , undefined and symbol
// 2.. Reference data type  -->Arrays , objects , functions and date


// primitive data type
// string

let name = "tushar";
console.log("the string is " + name);
// typeof() operator return the datatype of var

console.log("data type of str is " + (typeof(name)));

// numbers
let marks = 34;
console.log("type of marks is " + typeof(marks));

// boolean
let isDriver = true;
console.log("data type of isDriver is " + typeof(isDriver));

// null
let nullVar = null;
console.log("data type of null is " + typeof(nullVar)); //it gives bogus return value as object but it is primitive data type

// undefined
let undef = undefined;
console.log("data type of undef is " + typeof undef); //it can work this way also


// reference data type
// javascrit is dyanamically typed language we dont need to declare variables as int , float or arr

let myarr = [1, 2, 3, 4, true, "hello"];
console.log("data type of myarr " + typeof(myarr)); // it gives output as object


// objects literal

let stMarks = {
    harry: 10,
    shubham: 22,
    rohan: 55,
}
console.log(stMarks);
console.log("datatype of stMarks is " + typeof(stMarks));


// functions

function setMarks() {

}
console.log("data type of setmarks() is " + typeof(setMarks));