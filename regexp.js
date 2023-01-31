// Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const str = 'ahb acb aeb aeeb adcb axeb';
const regExp1 = /a.b/g;
//console.log(str.match(regExp1))

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const string = '2 + 3 223 2223';
const regExp2 = /.\s.\s./g;
//console.log(string.match(regExp2))

// Get the day, month and year of the current date and output it to the console separately
const date = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
//console.log(`Today is: ${date.getDate()}st of ${month[date.getMonth()]} ${date.getFullYear()} `)