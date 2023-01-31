// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'

try {
  console.log(a);
  let a = 3;
} catch (error) {
  console.log('‘let must be declared’ before use')
}

let task = 1/0;
try {
  if(task === Number) {
    console.log(task)
  } else {
    throw new SyntaxError('Division on zero') 
  }
}
  catch (error) {
    console.log('cannot be divided by zero');
} 