// Section 1. Challenge 1.

let mass;
let height;

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);
let isMarkBMIBiggerThanJohn = markBMI > johnBMI;
console.log(isMarkBMIBiggerThanJohn);

// Section 1. Challenge 2

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is: ${markBMI} and John's BMI is:
    ${johnBMI}. So Mark's BMI is bigger than John's.`)
} else {
    console.log(`Mark's BMI is: ${markBMI} and John's BMI is:
    ${johnBMI}. So John's BMI is bigger than Mark's.`)

}

// Section 1. Challenge 3 

const dolphinsFirstGame = 96;
const dolphinsSecondGame = 108;
const dolphinsThirdGame = 89;

const koalasFirstGame = 88;
const koalasSecondGame = 91;
const koalasThirdGame = 110;

const dolphinsAverage = (dolphinsFirstGame + dolphinsSecondGame +
    dolphinsThirdGame) / 3;

const koalasAverage = (koalasFirstGame + koalasSecondGame + koalasThirdGame) / 3;

console.log('Dolphins average points: ' + dolphinsAverage);
console.log('Koalas average points: ' + koalasAverage);

if (dolphinsAverage > koalasAverage) {
    console.log('The winner is Dolphins');
} else if (dolphinsAverage < koalasAverage) {
    console.log('The winner is Koalas')
} else {
    console.log('Equal. Both have the same average points')
}

const dolphinsBonusFirstGame = 97;
const dolphinsBonusSecondGame = 112;
const dolphinsBonusThirdGame = 101;

const koalasBonusFirstGame = 109;
const koalasBonusSecondGame = 95;
const koalasBonusThirdGame = 123;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('The winners are Dolphins');
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log('The winners are Koalas')
} else if (dolphinsAverage === koalasAverage && dolphinsAverage > 100 && koalasAverage < 100) {
    console.log('The winners are Dolphins. Because Average is bigger than 100')
} else if (dolphinsAverage === koalasAverage && koalasAverage > 100 && dolphinsAverage < 100) {
    console.log('The winners are Koalas. Because average is bigger than 100')
} else {
    console.log('Equal')
}

// Section 1. Challenge 4

let receiptSum = 275;

const tip = receiptSum >= 50 && receiptSum <= 300 ? receiptSum * (15 / 100)
    : receiptSum * (20 / 100);

console.log(`The bill was ${receiptSum}, the tip was ${tip}, and the total value ${receiptSum + tip}`);

// SECTION 2. Challenge 1.



const calcAverage = (a, b, c) => (a + b + c) / 3;

// DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`The winners are Dolphins with ${avgDolphins} average VS ${avgKoalas} average;`);
    } else if (2 * avgDolphins <= avgKoalas) {
        console.log(`The winners are Koalas with ${avgKoalas} average VS ${avgDolphins} average`);
    } else {
        console.log('No team wins..')
    }
}
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

// SECTION 2. Challenge 2.

/* function calcTip(bill) {
    if (bill <= 300 && bill >= 50) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
} */

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
// Bonus 
const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]),
bills[2] + calcTip(bills[2])];
console.log(total);

// SECTION 2. Challenge 3
console.log('SECTION 2. Challenge 3')
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

}
mark.calcBMI();
john.calcBMI();


if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})`)
} else {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})`)
}

// SECTION 2. Challenge 4


/* 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉 */




const finalBills = [22, 195, 176, 440, 37, 105, 10, 1100, 86, 52];
const finalTips = [];
const finalTotals = [];

function calcTip(bill) {
    if (bill <= 300 && bill >= 50) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

for (let i = 0; i < finalBills.length; i++) {
    const tipsAfterBills = calcTip(finalBills[i]);
    finalTips.push(tipsAfterBills);
}

//const totalAfterBills = finalBills + finalTips;
for (let a = 0; a < finalTips.length; a++) {

    finalTotals.push(finalBills[a] + finalTips[a])

}
console.log(finalBills);
console.log(finalTips);
console.log(finalTotals);


function calcAverages(arr) {
    arr = [];
    let sum = 0;
    for (i = 0; i < arr.length; i++) {

    }
}
console.log('BONUS');
console.log(calcAverages(10));
