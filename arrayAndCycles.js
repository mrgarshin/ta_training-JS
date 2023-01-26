//1 Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
//2 Given an array of car manufacturers, convert the array to a string and back to an array
//3 Given an array of the names of your friends, add the words hello to each element of the array
//4 Convert numeric array to Boolean
//5 Sort the array [1,6,7,8,3,4,5,6] in descending order
//6 Filter array [1,6,7,8,3,4,5,6] by value> 3
//7 Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
//8 Implement a loop that will print the number 'a' until it is less than 10
//9 Implement a loop that prints prime numbers to the console
//10 Implement a loop that prints odd numbers to the console

//1 Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
const moviesArr = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Il buono, il brutto, il cattivo'];
const iterator = function(array) {
    for (let el of array) {
      console.log(el);
    }
}

//2 Given an array of car manufacturers, convert the array to a string and back to an array
const carsArr = ['BWM', 'Mercedes', 'Audi', 'Porsche'];
const convertor = function(array) {
  return array.toString().split(',');
}

//3 Given an array of the names of your friends, add the words hello to each element of the array
const friendsArray = ['John', 'Bon', 'Peter'];
const addHello = function(array) {
  const helloFriendsArray = [];
  for (let i = 0; i <array.length; i++) {
    helloFriendsArray[i] = `Hello, ${array[i]}`;
  }
  return helloFriendsArray;
}
//console.log(addHello(friendsArray));

//4 Convert numeric array to Boolean

const numericArray = [0,1,-6,7,-8,3,0,5,6];
const convertToBoolean = function(array) {
  const newNumericArray = [];
  for (let i = 0; i < numericArray.length; i++) {
    newNumericArray[i] = Boolean(numericArray[i])
  }
  return newNumericArray;
}
//console.log(convertToBoolean(numericArray));

//5 Sort the array [1,6,7,8,3,4,5,6] in descending order
const descSortingArray = function(array) {
    return array.sort((a, b) => b-a);
}
//console.log(descSortingArray([1,6,7,8,3,4,5,6]));

//6 Filter array [1,6,7,8,3,4,5,6] by value> 3
const filter = function(array, value) {
  return array.filter(el => el > value)
}
//console.log(filter([1,6,7,8,3,4,5,6], 3))

//7 Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
const outputIndex = function(array, number) {
  return array.indexOf(number)
}

//console.log(outputIndex([1,2,3,4,5,6,7,8,12], 4))


//8 Implement a loop that will print the number 'a' until it is less than 10
const reducer = function(a) {
  while (a >= 10) {
    console.log(a)
    a--;
  }
}

//9 Implement a loop that prints prime numbers to the console
const primeNumbers = function(finalNumber) {
  function determPrime(argument) {
    for (let i = 2; i <= Math.sqrt(argument);i++) {
      if (argument % i === 0) {
        return false;
      } 
    }
    return argument > 1; 
  }
  for (let i = 1; i <= finalNumber; i++) {
    if(determPrime(i)) {
      console.log(i);
    }
  }
}

//10 Implement a loop that prints odd numbers to the console
const oddPrinter = function(finalNumber) {
  for (let i = 1; i <= finalNumber; i++) {
    if(i%2 === 0) {
      console.log(i);
    }
  }
}
