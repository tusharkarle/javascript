console.log("Welcome to conversion");

let myVar;
myVar = String(34);

console.log(myVar, typeof(myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));


let date = String(new Date());
console.log(date, (typeof date));

let arr = String([1, 2, 3, 4, 5]);
console.log(arr, (typeof arr));



// Using toString()

let i = 190;
console.log(i.toString(), (typeof i.toString()));

// Number ---> used to convert the number string into number

let str1 = Number("34");
console.log(str1, (typeof str1))

let str2 = Number(false);
console.log(str2, (typeof str2));

str3 = Number([1, 2, 3, 4, 5]);
console.log(str3); //it will return NaN IF there is problem in converting to int



// to get the int with defined number of decimals
//      number.toFixed()

let numb = Number("34.098");
console.log(numb.toFixed(0));




// type coercion

let mystr = "698";
let mynum = 34;

console.log(mystr + mynum, typeof(mystr + mynum)); //it will take this as string and concatenate

// but we can add these using the Number function

console.log(Number(mystr) + mynum);