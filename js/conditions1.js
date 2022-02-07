console.log("hello world to the conditional statements");

let age = 45;

if (age > 18) {
    console.log("young");
} else if (age == 18) {
    console.log("age is 18");
} else {
    console.log("child");
}

let doesDrive = true;

if (doesDrive && age > 18) {
    console.log("you can drive")
} else {
    console.log("you cannot drive")
}



console.log(age == 45 ? 'age is 45' :
    'age is not 45');


switch (age) {

    case 18:
        console.log("18 is age");
        break;

    case 45:
        console.log("age is 45");
        break;

    default:
        console.log("default case");
        break;
}