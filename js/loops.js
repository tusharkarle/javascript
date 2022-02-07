console.log("welcome to loops");

// general loop
//      for , while , do while

/* for (let i = 0; i < 10; i++) {
    console.log(i);
} */

/* 
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
} */


let j = 0;
do {
    if (j == 5) {
        j++;
        break;

    }
    console.log(j);
    j++;
}
while (j < 10);

console.log(11 > 10 ? "hello" : "no")


let arr = [1, 2, 3, 4, 5];

// basic way

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



// for each 


arr.forEach(function(element) {
    console.log(element);
});

arr.forEach(function(element, index, array) {
    console.log(element, index, array)
})

// to access the elements in the obj
let obj = {
    name: "tushar",
    age: 10,
    os: "windows",
}

for (let key in obj) {
    console.log(`The key is ${key} and the object is ${obj[key]}`);
}