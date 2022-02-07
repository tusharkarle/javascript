console.log("We will study Arrays in JavaScript");

let marks = [1, 2, 3, 4, 5];

const mixstr = ["strings", 1, 4, [2, 4]];
console.log(mixstr);


const arr = new Array(1, 2, 4, 5, [3, 4]);
console.log(arr);


console.log(arr[4]);

console.log(arr.length);

console.log(Array.isArray(arr));

arr[0] = "harry";
console.log(arr);

let arrelement = arr[2];
console.log("element is ", arrelement);


let value = marks.indexOf(4);
console.log(value);

console.log(marks);

marks.push(7);

marks.unshift(1009); //insert at beginning
console.log(marks);

marks.pop();
console.log(marks);

marks.shift(); //pop from front
console.log(marks);

//remove in range
// marks.splice(1, 3); // splice(start_index , no_of_next_element_to_be_removed)
// console.log(marks);

marks.reverse();
console.log(marks);


let marks2 = [7, 8, 9];
marks = marks.concat(marks2);
console.log(marks);

marks.sort();
console.log(marks);



//objects
let myobj = {
    "first name": "tushar",
    channel: "codewithharry",
    isActive: true,
    marks: [1, 5, 7, 8],
};
console.log(myobj);
console.log(myobj['channel']);
console.log(myobj.channel);