//Task1 random item from array
let btnRandom = document.querySelector('button');
//replace "result" with the item from the array 
let result = document.querySelector('h3');

//fruits is my array with 8 items
let fruits = ['Apple', 'Orange', 'Lemon', 'Mango', 'Watermelon', 'Papaya', 'Lime', 'Pear'];
//the function to create a random number 
function getRandomNumber(min, max) {
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
};
//When the button is clicked, get the random number and display the item from the array over the "result" 
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, fruits.length-1);
    result.innerText = fruits[index];
}); 