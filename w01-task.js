// 🔍 Part 1 error: The variable 'userName' is declared as a constant and cannot be reassigned.
const userName = "Moroni";
console.log(`Username: ${userName}`);
// userName = "Moronihah"; // This line is causing the error. Comment it out to prevent the error.
console.log(`Username: ${userName}`);

// 🔍 Part 2 error: 'DateTime' is not defined. Assuming you're using the 'Date' object, you should instantiate it like this:
const currentDateAndTime = new Date();
console.log(`It is now ${currentDateAndTime}`);

// 🔍 Part 3 error: 'total' function is being called before it's declared. Move the function declaration above the call.
function total(...theNumbers) {
    let sum = 0;
    for (let aNumber of theNumbers) {
        sum += aNumber * 1; 
    }
    return sum
}

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);