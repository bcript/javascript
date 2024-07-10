let ages = [12, 13, 14, 15, 16];
for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
}
let ages_length = ages.length;
while (ages_length >= 0) {
    console.log(ages[ages_length]);
    ages_length--;
}

// area of circle
let radius = prompt('Radius in cm: ');
let area_circle = Math.PI * (radius ** 2);
console.log('Area of circle: ' + area_circle +'cm^2');

// Arrays 
let num = [123, 456, 789];
let schools = ['RI', 'ASR', 'EJC', 'ACJC'];

console.log(schools.length);
schools.push('TMJC');
schools.push('HCI');
console.log(schools);
schools.pop(); // gets rid of stuff at the end
console.log(schools);

// Object (;ike dictionaries in python)
let person = {
    name: 'Jun Xiong',
    age: 17,
    isStudent: true
}
// retrieving values from the dictionary
console.log(person['name']);
console.log(person.name);

console.log(cube(123));
