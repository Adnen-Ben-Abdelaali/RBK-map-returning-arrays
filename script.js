/* Writing the map() function */
function each(collection, func) {
    if(Array.isArray(collection)) {
      for(let i = 0; i < collection.length; i++) {
          func(collection[i], i);
      }
    }else {
      for(let key in collection) {
        func(collection[key], key);
      }
    }
}

function map(array, funct) {
  let acc = new Array();
  each(array, function(element, index) {
    acc.push(funct(element, index));
  });
  return acc;
}
/***************************************************************/
/*
2.Given the function abs that computes the absolute value,
 finish the invocation of map that should compute the absolute value
  of each number in its array argument.

 function abs(x) {
       if (x >= 0) {
             return x;
       }
       return -x;
 }
       map([1, -2, 37, -100, -8, 5], ???);
       // => [1, 2, 37, 100, 8, 5]
*/

let mapAbs = map([1, -2, 37, -100, -8, 5], function abs(x) {
  if(x < 0) {
    x *= -1;
    return x;
  }
  return x;
});
/*******************************************************/
/*
3.We're going to write a function maximums that, given
an array of arrays of numbers as an argument, returns
a new array containing the maximum number of each inner array.
 That's a bit of a mouthful, so let's break it down:

 // our argument would look like this:
 var sampleInput = [ // it's an array
 [1, 3, 2], // of arrays of numbers
 [4, 23, 100],
 [7, 6, 3, -2]
 ];
 // and we want to be able to use maximums to do this:
 maximums(sampleInput); // => [3, 100, 7]

 Part One: Let's start by writing a function max that,
  when given an array of numbers computes the maximum number
  in that array.

 You will want to use each for this.

 function max(numbers) {

       // YOUR CODE HERE

 }

 max([1, 3, 2]); // => 3

 max([4, 23, 100]); // => 100
*/
function max(array) {
  let maximum = array[0];
  each(array, function(element, index) {
    if(maximum < element) {
      maximum = element;
    }
  });
  return maximum;
}
