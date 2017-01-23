//add a 'splinter' function. The function should take in 2 numbers as arguments,
 //multiply those numbers, and save the result to a locally scoped variable//
  //'z'. Next, create an array that stores the first argument, second argument,//
  //and z. Return that array.

//Try testing this by console logging the splinter function, passing in 1 and 2.//

function splinter(a,b) {
  var z = a * b;
  var array = [a, b, z];
  return array;
}
