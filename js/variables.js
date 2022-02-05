// VARIABLES
//  var , let , const

var name = 'tushar';
console.log(name);

var channel;
// channel = "code with harry";
console.log(channel);

var no = 33;
console.log(no);


// we can change the var
no = 19;
console.log("no =", no);


/* rules for javascript variables
    1 .. cannot start with numbers
    2.. can start with letter , numbers , _ and $
    3 .. are case sensitive
*/

var city = "delhi";
console.log(city);


// const --- constant variable ie cannot be changed
const ownersname = "tusharkarle";
console.log(ownersname);

//if we try to change the const variable
// ownersname = "rushi";  will give error



// let has block level scope ie inside the { }


{
    let city = "tushar";
    city = "ahmednagar"; //this city will be only inside the block
    console.log("inside the block =", city);
}


console.log("outside the block = ", city);


// in the const variable we can add the elements but cannot declare or initialize it again

const arr1 = [1, 2, 3, 4];
arr1.push(5);
console.log(arr1); //that is we cann add elemtbu cannot assign again using =


arr1 = [2, 4, 4]; //we cannot assign to the const but we can add the elements



/* most common programmning case types
        1.. camelCase
        2.. Kebab-case
        3.. snake_case
        4.. PascalCase
 */