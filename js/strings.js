// // strings


// const nameUser = "tushar";
// const greetings = "Good morning";
// console.log(greetings + " " + name);


// let html = "<h1> This is Heading</h1>" +
//     "<h2> This is heading 2 </h2>";

// html = html.concat("this", name);
// console.log(html);


// console.log(html.length);
// console.log(name.toUpperCase());
// console.log(greetings.toLowerCase());

// console.log(name[1]);


// console.log(html.lastIndexOf("</"));


// console.log(html.charAt(10));

// console.log(html.endsWith("this"));

// console.log(html.includes("this"));


// console.log(html.substring(1, 5));


// console.log(html.slice(0, 5));

// console.log(html.split(" "));

// console.log(html.replace("This", "it"));




// template literals


//   `` is different feom '' its  ...toward left side    ``

let fruit1 = `orange \``;
let fruit2 = `Apple`;

let myText = `Hello ${fruit1} 
        <h1> I love ${fruit2}</h1> `;

console.log(myText);

document.body.innerHTML = myText;