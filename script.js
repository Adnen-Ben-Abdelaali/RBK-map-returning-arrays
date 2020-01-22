/**** Implemented an forEach() clone named each()
that is fully functionnal ***/
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
/*****************************************************/
/*
1.Using our updated version of each, write the following
 function: values: accepts an object as a parameter, and
 outputs an array of the object's values
 */
 function values(object) {
   let outputArray = new Array();
   each(object, function(element, index) {
     outputArray.push(element);
   });
   return outputArray;
}
/*************************************/
/*
1.Using our updated version of each, write the following
function: keys: accepts an object as a parameter, and outputs
an array of the object's keys.
*/
function keys(object) {
  let outputArray = new Array();
  each(object, function(element, index) {
    outputArray.push(index);
  });
  return outputArray;
}
/*******************************************************/
/*
2.Write a function called keysLongerThan that accepts two parameters
 -- an object and a number -- and returns a new object with
 only the key/value pairs in the input object whose keys are longer
  than the numeric argument, e.g.:

 keysLongerThan({name: 'Annyeong', age: 25, favoriteColor: 'blue'}, 3);
 // => {name: 'Annyeong', favoriteColor: 'blue'}
 keysLongerThan({name: 'Annyeong', age: 25, favoriteColor: 'blue'}, 4);
 // => {favoriteColor: 'blue'}

Make sure to use the new version of each for this.
*/
function keysLongerThan(object, number) {
    let outputObj = new Object();
    each(object, function(element, index) {
      if(index.length > number) {
        outputObj[index] = element;
      }
    });
    return outputObj;
}
/**********************************************************/
/*
3.Write a function called incrementValues
that accepts an object as a parameter, and outputs an object
 with all of its numeric values incremented by one.
 You'll want to use the updated version of each for this, and
  you will need to check the type of each value
  to determine whether or not it should be incremented.
   HINT: Try entering the following expressions in to your console:

 typeof 'hello'; // => 'string'
 typeof 1;       // => 'number'
 typeof true;    // => 'boolean'
*/
function incrementValues(object) {
  let outputObj = new Object();
  each(object, function(element, index) {
      if(typeof element === "number") {
          outputObj[index] = element + 1;
      }else {
        outputObj[index] = element;
      }

  });
  return outputObj;
}
/*********************************************/
/*
5.Write a function called oddEvenArray that accepts an object
as parameter and return array of numbers of the key values
of the object ( you need to arrange the new array, odd numbers
 will be at the beginning of the array, then the even numbers
  will be at the end of the array)

 function oddEvenArray(object){
       //your code is here
 }
 oddEvenArray({a:3,b:5 ,c: 4 ,d: 1, e:10, f:12 ,g:56 ,h:44 ,i:32});
  // ==> [3,5,1,4,10,12,56,44,32]
  Extra challenge:

 return the odd numbers ordered Ascending and the even numbers descending

 oddEvenArray({a:3,b:5 ,c: 4 ,d: 1, e:10, f:12 ,g:56 ,h:44 ,i:32});
  // ==> [1,3,5,56,44,32,12,10,4]
*/
function oddEvenArray(object) {
  let outputArray = new Array();
  let permute = true;
  let firstEvenIndex = 0;
  each(object, function(element, index) {
    outputArray.push(element);
  });
/* sorting the array to divide seperate the odd and the even elements */
  while(permute === true) {
    permute = false;
    let exchange = 0;
    for(let i = 0; i < outputArray.length - 1; i++) {
      if( (outputArray[i] % 2 === 0) && (outputArray[i + 1] % 2 !== 0) ) {
          exchange = outputArray[i];
          outputArray[i] = outputArray[i + 1];
          outputArray[i + 1] = exchange;
          permute = true;
      }
    }
  }
  console.log("outputArray = " + outputArray);
  /* Identifying the index of the first even element in the outputArray */
  for(let i = 0; i < outputArray.length; i++) {
      if(outputArray[i] % 2 === 0) {
          firstEvenIndex = i;
          console.log('first even element : ' + outputArray[i]);
        break;
      }
  }
  /* sorting the odd numbers ascendingly */
  permute = true;
  while(permute  === true) {
    permute = false;
    let exchange = 0;
    for(let i = 0; i < firstEvenIndex - 1; i++) {
        if(outputArray[i] > outputArray[i + 1]) {
            exchange = outputArray[i];
            outputArray[i] = outputArray[i + 1];
            outputArray[i + 1] = exchange;
            permute = true;
        }
    }
  }
  console.log("outputArray = " + outputArray);
  /* sorting the even numbers descendingly */
  permute = true;
  while(permute === true) {
    permute = false;
    let exchange = 0;
    for(let i = firstEvenIndex; i < outputArray.length - 1; i++) {
      if(outputArray[i] < outputArray[i + 1]) {
          exchange = outputArray[i];
          outputArray[i] = outputArray[i + 1];
          outputArray[i + 1] = exchange;
          permute = true;
      }
    }
  }
  return outputArray;
}
/*************************************************************************/
/*
6.Write a function called isPrimeArray that accepts an object as parameter
 and return array of prime numbers in the object

 function isPrime(object){
       //your code is here
}
 isPrime({a:3,b:5 ,c: 4 ,d: 1, e:10, f:12 ,g:56 ,h:44 ,i:32}); // ==> [3,5,1]
*/
function isPrime(object) {
  let outputArray = new Array();
  each(object, function(element, index) {
    let elementPrime = true;
    for(let i = 2; i < element - 1; i++) {
        if(element % i === 0) {
            elementPrime = false;
            break;
        }
    }
    if(elementPrime === true) {
        outputArray.push(element);
    }
  });
  return outputArray;
}
/******************************************************************/
/*
4.Write a function called objectToArrayOrArrayToObject that takes an array
 or an object and transforms any array or object within the array or object
  into an object or array.

 objectToArrayOrArrayToObject(coll){
       ...
 }
 var ex = {ages: [23, 44, {min: 1, max: 2}], people: {height: 'tall', eye_color: 'brown'}};
 objectToArrayOrArrayToObject(ex);
 // {ages: {0: 23, 1: 44, 2: [1, 2]} people: ['tall', 'brown']}
*/
/*
function arrToObjOrObjToArr(variable){
  each(variable,function(value,index){
    if(typeof value === 'object'){
      if(Array.isArray(value)){
        variable[index] = arrayToObject(value);
      }else{
        variable[index] = objectToArray(value);
     }
    }else{
      variable[index]=value;
    }
  })
  return variable;
}

function objectToArray(obj){
  var array=[];
  each(obj,function(value){
    if(typeof value === 'object'){
      if(Array.isArray(value)){
        array.push(arrayToObject(value));
      }else{
        array.push(objectToArray(value));
      }
    }else{
      array.push(value);
    }
  })
  return array;
}

function arrayToObject(array){
  var obj={};
  each(array,function(value,index){
    if (typeof value === 'object'){
      if(Array.isArray(value)){
        obj[index]=arrayToObject(value);
      }else{
        obj[index]=objectToArray(value);
      }
    }else{
      obj[index]=value;
    }
  })
  return obj;
}
