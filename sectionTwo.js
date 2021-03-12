'use strict';

let hasDriversLicense = false;
const passTest = true;

// With strict mode if we do a mistake, like missing letter, in console prints
// an error which says ReferenceError: hasDriverLicense is not defined

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

// Strict mode also has reserved words which you cannot use. If you write one
// of them you will get an error like: Unexpected strict mode reserved word.

// const interface = 'Audio';
// const private = 534;

// FUNCTIONS

function logger() {
    console.log('This is first JS function');
}

// calling / running / invoking function
logger();
logger();

function fruitProccesor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProccesor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProccesor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// FUNCTION DECLARATIONS VS EXPRESSIONS
// Function Declaration:

function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1995);
console.log(age1);

// When function is stored to a variable it calls anonymous function or expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1996);
console.log(age2);

// ARROW FUNCTIONS

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1986, 'Abraomas'));
console.log(yearsUntilRetirement(1995, 'Grevukas'));

// FUNCTION CALLING OTHER FUNCTION

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProccesor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitProccesor(4, 5));


// FUNCTION REVIEW

const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement1 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        console.log(`${firstName} has already retired `)
    }
}

console.log(yearsUntilRetirement1(1986, 'Abraomas'));
console.log(yearsUntilRetirement1(1995, 'Grevukas'));


// ARRAYS

// 1st way to create an array
const friends = ['Arnoldas', 'Linas', 'Lukas', 'Nikta'];
console.log(friends);

// 2nd way to create an array
const years = new Array(1995, 1986, 1954, 2002);

// there we will get one name from array
console.log(friends[0]);

// Exact elements of an array
console.log(friends.length);

// There will get the last element of an array
console.log(friends[friends.length - 1]);

// Replacing an array element
friends[2] = 'Evita';
console.log(friends);

// Arrays can hold different types at the same time. It can hold a variable also
// Array can hold an other array in array.

const firstName = 'Arnoldas';
const personalInfo = [firstName, 'Grevas', 2021 - 1995, 'coach', friends];
console.log(personalInfo);

// EXERCISE OF AN ARRAY
const calculateAge = function (birthYear) {
    return 2021 - birthYear;
}
const year = [1990, 1986, 2019, 1995];

const calculatedAge = calculateAge(year[0]);
const calculatedAge1 = calculateAge(year[1]);
const calculatedAge2 = calculateAge(year[year.length - 1]);
console.log(calculatedAge, calculatedAge1, calculatedAge2);

// Or store into one variable

const ages = [calculateAge(year[0]), calculateAge(year[1]), calculateAge(year[year.length - 1])];
console.log(ages);

// BASIC ARRAY OPERATIONS (METHODS)
// This will add element to the end of an array
const girlsILike = ['Bingailė', 'Evita', 'Justina'];
girlsILike.push('Enrika');
console.log(girlsILike);

// This will add an element to the beggining of the array.
girlsILike.unshift('Raminta');
console.log(girlsILike);

// This will remove element from an array
girlsILike.pop(); // Removes the last element
girlsILike.shift(); // Removes the first element

// 1. In which position certains element is in the array
// 2. Or can check if entered element is in the array or not.
console.log(girlsILike.indexOf('Bingailė')); // 1
console.log(girlsILike.includes('Raminta')); // 2

// OBJECTS

const arnoldasInfo = {
    firstName: 'Arnoldas',
    lastName: 'Grevas',
    age: 2021 - 1995,
    job: 'coach',
    friends: ['Tomas', 'Jonas', 'Rytis']
};
console.log(arnoldasInfo)

// Dot VS Bracket Notation

console.log(arnoldasInfo.lastName);
console.log(arnoldasInfo['lastName']);

const nameKey = 'Name';
console.log(arnoldasInfo['first' + nameKey]);
console.log(arnoldasInfo['last' + nameKey]);

/* const interestedIn = prompt('What do you want to know about Arnoldas? Choose between firtName, lastName, age, job and friends');

if (arnoldasInfo[interestedIn]) {
    console.log(arnoldasInfo[interestedIn]);
} else {
    console.log('Wrong answer! hoose between firtName, lastName, age, job and friends')
} */

// How to use dot and bracket notation to add new properties to the object

arnoldasInfo.location = 'Lithuania';
arnoldasInfo['facebook'] = 'Arniis';
console.log(arnoldasInfo);

// Challenge - "Arnoldas likes 3 girls, and his favourite girl is called Justina"

console.log(`${arnoldasInfo.firstName} likes ${girlsILike.length} girls and his favourite
girl is called ${girlsILike[2]}`);

// OBJECT METHODS

const objectAbout = {
    firstName: 'Arnoldas',
    lastName: 'Grevas',
    birthAge: 1995,
    job: 'coach',
    friends: ['Tomas', 'Jonas', 'Rytis'],
    hasDriverLicense: true,


    // any function that is attached to the object is called METHOD
    // function expression - SOLUTION 1
    // calAge: function (birthYear) {
    //    return 2021 - birthYear;
    // }

    //  console.log(objectAbout.calAge(1995));

    // function expression - SOLUTION 2
    // calAge: function () {
    // console.log(this);
    //   return 2021 - this.age;
    // }

    // console.log(objectAbout.calAge());


    // function expression - SOLUTION 3 - BEST
    calAge: function () {
        this.myBirthAge = 2021 - this.birthAge;
        return this.myBirthAge;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.birthAge} years old ${objectAbout.job}, and he has 
        ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

objectAbout.calAge();
console.log(objectAbout.myBirthAge);

console.log(objectAbout.getSummary());

// THE FOR LOOP

console.log('💌 THE FOR LOOP 💌')

for (let i = 4; i <= 10; i++) {
    console.log(`Lifting weigths repetition ${i} 🏋️‍♀️`);
}

const arnoldasArray = [
    'Arnoldas',
    'Grevas',
    2021 - 1995,
    'coach',
    ['Raminta', 'Bingailė', 'Justina']
];
const types = [];

for (let a = 0; a < arnoldasArray.length; a++) {
    // Reading from arnoldas array
    console.log(arnoldasArray[a], typeof arnoldasArray[a]);

    // Filling types in array
    // types[i] = typeof arnoldasArray[i];
    types.push(typeof arnoldasArray[a]); // BEST
}

// We will calculate how many years are old of given years and put them in
// new array. 
const anyYears = [1995, 2008, 1991, 1986];
const ageOfYears = [];

for (let x = 0; x < anyYears.length; x++) {
    ageOfYears.push(2021 - anyYears[x]);
}
console.log(ageOfYears);

// Two important statements - continue and break
console.log('--- CONTINUE STATEMENT ---')
for (let a = 0; a < arnoldasArray.length; a++) {
    if (typeof arnoldasArray[a] !== 'string') continue;

    console.log(arnoldasArray[a], typeof arnoldasArray[a]);
}
console.log('--- BREAK STATEMENT ---')
// After first number was found loop breaks.
for (let a = 0; a < arnoldasArray.length; a++) {
    if (typeof arnoldasArray[a] == 'number') break;

    console.log(arnoldasArray[a], typeof arnoldasArray[a]);
}
// BACKWARD LOOP
console.log('BACKWARD LOOP')

const random = [
    'Arnoldas',
    'Grevas',
    2021 - 1995,
    'coach',
    ['MacBook', 'AOC', 'iOS']
];

for (let i = random.length - 1; i >= 0; i--) {
    console.log(random[i]);
}

// LOOP INSIDE A LOOP

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`------- Starting exercise ------- ${excercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep} `);
    }
}

// WHILE LOOP
console.log('WHILE LOOP');

let lesson = 1;
while (lesson <= 4) {
    console.log(`Printing while lesson ${lesson}`);
    lesson++;
}
// Math.trunc removes decimal part (.4244)
let dice = Math.trunc(Math.random() * 6) + 1;

// Loopas suksis tol kol iškris skaičius 6
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6) console.log('Loop is about to end...')
}
