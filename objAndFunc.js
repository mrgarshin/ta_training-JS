//+Create a car object, add a color property to it with the value equals 'black'
//+Change the color property of the car object to 'green'
//+Add the power property to the car object, which is a function and displays the engine power to the console
//+Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
//+Write a function for calculating the type of argument and type output to the console
//Write a function that determines whether a number is prime or not

const { fchown } = require("fs-extra");

//create a car object
const car = {
  color: 'black',
}

//change the color to 'green'
car.color = 'green';

//add the power prop and etc..
car.power = function(engine) {
  console.log(`Engine power of this car: ${engine}`)
}

//Result of adding pears and apples to the warehouse
const addingFruits = function(pearsCount, applesCount) {
  return pearsCount+applesCount;
}

//Name form payment terminal


//What type of argument is it?
const typeOfArg = function(argument) {
  console.log(typeof(argument));
}

//Determine prime or not
function determPrime(argument) {
  for (let i = 2; i <= Math.sqrt(argument);i++) {
    if (argument % i === 0) {
      return false;
    } 
  }
  return argument > 1; 
}
