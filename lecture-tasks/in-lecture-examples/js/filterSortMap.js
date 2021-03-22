const collection = [2, 6, 3, 8, 1, 9, 4, 7, 5, 10];
const word = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const fruits = ["Apple", "Pear", "Banana"];
const items = [
    { name: 'Egg', value: 21 },
    { name: 'Saw', value: 37 },
    { name: 'Antique', value: 45 },
    { name: 'Tire', value: -12 },
    { name: 'Magnet', value: 13 },
    { name: 'Zeros', value: 37 }
];
//return all the words with more than six characters 
const moreThanSixChar = word.filter(word => word.length > 6);
console.log(moreThanSixChar);

//return all numbers less than five 
const lessThanFive = collection.filter(number => {
    return number < 5;
});
console.log(lessThanFive)

//return every second word of a collection of words
const everySecond = word.filter((word, idx) => idx % 2 == 0);
console.log(everySecond);

// Every third word
const everyThird = collection.filter((number, idx) => idx % 3 == 0);
console.log(everyThird);

//return Fruits with five characters or more
const fruitsWithFiveChar = fruits.filter(e => e.length > 5);
console.log(fruitsWithFiveChar);

//sorting numbers in array with .sort()
//sorts first digit in acending order (nith the whole number, just the first one)
console.log(collection);
const sortedNumbers = collection.sort();
console.log(sortedNumbers);

//sorts all number in ascending order 
const orderedSort = collection.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else return 0;
});
console.log(orderedSort);
//shorter way to say the same thing as the sort above
const shortAsc = collection.sort((a, b) => a - b);
console.log(shortAsc);

function stringSort(a, b) {
    if (a.substring(1) < b.substring(1)) {
        return -1;
    } else if (a.substring(1) > b.substring(1)) {
        return 1;
    } else return 0;
}
console.log(fruits.sort(stringSort));

//sort objects 
//By value 
const objSortValue = items.sort((a, b) => a.value - b.value);
console.log(objSortValue);

// by name 
const objSortName = items.sort(function (a, b) {
    let nameA = a.name.toUpperCase(); //just to ignore lower/uppercase
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1
    } else if (nameA > nameB) {
        return 1
    } else return 0

});
console.log(objSortName);

//Map examples

const toCaptitalize = fruits.map(e => e.toUpperCase());
console.log(toCaptitalize);

//return value of the collection times 2
const multipliedByTwo = collection.map(e => e * 2);

function l(element) {
    console.log(element)
}
l(multipliedByTwo)

// ex with json

fetch('studenter.json')
    .then(res => res.json()) //decode json
    .then(students => {
        l(students);

        //Show only students of BWU
        const studBwu = students.filter(e => e.forkortelse == "BWU");
        l(studBwu)

        //see all students sorted by first name 
        const studSortFirstName = students.sort(sortFirstName);
        l(studSortFirstName)

        const filtersort = students.filter(e => e.forkortelse == 'BWU').sort(sortFirstName);
        l(filtersort)

        //Example where the value of a property is changed, and its collection 
        /*
        l(students.map(e => {
            e.forkortelse = e.forkortelse.toUpperCase()
            return e
        }))
        */
        // Solution for bad practice
        l(students.map(e => {
            return {

                ...e,
                forkortelse: e.forkortelse.toLowerCase()
            }
        }))
        l(students)
    })

function sortFirstName(a, b) {
    if (a.fornavn < b.fornavn) {
        return 1;
    } else if (a.fornavn > b.fornavn) {
        return -1;
    } else return 0;
}