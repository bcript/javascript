// Strings
let firstName = 'Andrew';
let lastName = 'Tay';
let fullName = firstName + ' ' + lastName;

// getting length
let nameLength = fullName.length;
console.log(fullName + ", Length =", + nameLength);

// indexing
let language = 'JavaScript';
console.log(language[0])
console.log(language.substring(2, 5)) // ranges in string, similar to
// string[2:5]

// uppercase
console.log(language.toUpperCase());

// if...else
console.log('=================IF ELSE=================')
let age = 20;
if (age <= 12) {
    console.log('Hello kid!');
}
// if: wrap with brackets, no semicolons, use {}
else if (age <= 18) {
    console.log('Hello teen!')
}
else {
    console.log('Hello adult!')
}

// For loop
console.log('=================FOR LOOPS=================')
let fruits = ['orange', 'apple', 'pear', 'watermelon'];

// for i in range(len(fruits))
 for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
 }
 
 // for fruit in fruits
 for (let fruit of fruits) {
     console.log(fruit);
 }
 
// While loop
console.log('=================WHILE LOOPS=================')
let counter = 10;
while (counter > 0) {
    console.log(counter)
    counter--; // decrease value by 1
}
console.log('Happy New Year!')

