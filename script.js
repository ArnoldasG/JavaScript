/* let js = 'amazing';

console.log(40 + 8 + 24 - 10);
console.log("Jonas");

// Declaring a variable
let teacherName = 'Jonas'; // firstName - variablem 'Jonas' - value;
console.log(teacherName);

let myFirstJob = "Coder";
let myCurrentJob = "Nothing"

console.log(myFirstJob);

let country = "Lithuania";
let continent = "Europe";
let population = 2700308;

console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof "Penis");
console.log(typeof 44);

// when we want to change variable value we dont need to type let again
// ant now we gonna use dynamic typing and change from boolean to String
javascriptIsFun = "YES"
console.log(typeof javascriptIsFun);

// this process calls mutate variable. When you can age variable
// to another variable. And at this point is the best to use let.
let age = 35;
age = 31;

const ageArnoldas = 2021 - 1995;
const ageLinas = 15 + 10;
console.log(ageArnoldas, ageLinas);

console.log(ageArnoldas * 2, ageArnoldas / 10, 2 ** 3);
// 2 ** 3 menas 2 to the power of 3 = 2 * 2 * 2;

const myName = 'Arnoldas';
const mylastName = 'Grevas';

// Assignment operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100;
x++; // x = x + 1;
x--;// x = x - 1;

console.log(ageArnoldas > ageLinas);
console.log('Is Arnoldas is older than 18: ', ageArnoldas >= 18);

let nowDate = 2020;

// Here we use operator precedence. JavaScript automatically first
// does the substractions ant later comparition precedence table.
console.log(nowDate - ageArnoldas > nowDate - ageLinas);

let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);

const myFirstName = 'Arnoldas';
const job = 'coach';
const birthYear = 1995;
const year = 2021;
const arnoldas = "I'm " + myFirstName + ', a ' + (year -
    birthYear) + ' years old ' + job + '!';
console.log(arnoldas)

// The same example how to add strings using backtics.

const arnoldasNew = `I'm ${myFirstName}, a ${year - birthYear} year old ${job}`;
console.log(arnoldasNew)

console.log('String with \n\
multiple \n\
lines');

// Or you can write in multiple lines using backtics

console.log(`String
multiple
lines`)

const legalAge = 15;

if (legalAge >= 18) {
    console.log(`Enrika can start driving license`);
} else {
    const yearsLeft = 18 - legalAge;
    console.log(`Enrika is too young. Wait another ${yearsLeft} years`);
}

const yearOfBirth = 1991;
let century;

if (yearOfBirth <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log('The century is: ' + century);


//type Conversion

const inputYear = 1995;
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// If we try to convert from String to Number and inside a
// stringe is any word you will get NaN - Not a Number
console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('I am ' + 25 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * 2);
console.log('23' > '18');



// 5 falsy values:  0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''))


// EXAMPLE IF/ELSE - TRUE

const money = 100;

if (money) {
    console.log("Don't spend it all.")
} else {
    console.log('You should get a job!')
}

// EXAMPLE IF/ELSE - FALSE
// BECAUSE HEIGHT IS NOT DEFINED AND UNDEFINED IS FALSE.


let height;

if (height) {
    console.log("Height is defined - good.")
} else {
    console.log('Please define a height.')
}


const age = '18';

// === don't use type coercion
if (age === 18) console.log('You just became an adult (strict)');
// == use type coercion. But try not to use this method because it could
// cause many bugs in the code. Always use === even if you need coercion.
if (age == 18) console.log('You just became an adult (loose');

const favourite = Number(prompt("What's your favourite number?"));
console.log("Your favourite number is: " + favourite);

if (favourite === 23) {
    console.log('Gratz! 23 is an amazing number');
} else if (favourite == 7) {
    console.log('7 is also great number')
} else {
    console.log('Your number is shity.')
}

if (favourite !== 23) console.log('Why not 23?')


// SWITCH statement

const day = 'sunday';

switch (day) {
    case 'monday':
        console.log('Badest day in week');
        break;
    case 'tuesday':
        console.log('Second badest day in a week');
        break;
    case 'wednesday':
        console.log('Not a bad day');
        break;
    case 'thursday':
        console.log('One day till weekend');
        break;
    case 'friday':
        console.log('Last day at work. Weekend!');
        break;
    case 'saturday':
        console.log('Party! Lets dance till morning.')
        break;
    case 'sunday':
        console.log('Tommorow you got to go the work. Ciuhinkis');
        break;
    default:
        console.log('GG you dong know week days');
}


 // statements and expressions

3 + 4;
1991;
true && false & !false;

if (23 > 10) {
    const str = '23 is bigger';
}

console.log(`I'm ${2037 - 1991} years old.`);

*/

// Ternary operator

const age = 25;
age >= 18 ? console.log('I like to drink wine 🍷 ')
    : console.log('I like to drink water 💦');

// But much more used as follows:
const drink = age >= 18 ? 'wine 🍷' : 'water 💦';
console.log(drink);

console.log(`I like to drink ${age} >= 18 ? 'wine 🍷' : 'water 💦'1`);