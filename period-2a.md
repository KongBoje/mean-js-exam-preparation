## Java vs JavaScript
#### Key differences
- Java is an OOP programming language while Java Script is an OOP scripting language.
- Java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only.
- Java is a statically typed language; JavaScript is dynamic.
- Java is class-based; JavaScript is prototype-based.
- Java constructors are special functions that can only be called at object creation; JavaScript "constructors" are just standard functions
- Java requires all non-block statements to end with a semicolon; JavaScript inserts semicolons at the ends of certain lines.
- Java uses block-based scoping; JavaScript uses function-based scoping.
- Java has an implicit this scope for non-static methods, and implicit class scope; JavaScript has implicit global scope.

## Function Closures and the JavaScript Module Pattern
...

## JavaScript Prototyping
...

## User defined callback functions
In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves. They can be stored in variables, passed as arguments to functions, created within functions, and returned from functions.

#### Example 1 (Filter):
Creates a new array including elements where the callback function returns a number and omits the ones where it returns false.
```javascript
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // This will produce an array with [5,6,7,8,9]
  var filtered = numbers.filter(function (number) {
      if (number > 4)
        return number;
  }
```

#### Example 2 (Map):
Creates a new array with the values modified by the callback function
```javascript
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // This will produce an array with [1,2,3,4,5,6,7,8,9,10]
  var filtered = numbers.map(function (number) {
      return number++;
  }
```

#### Example 3 (Custom function):
```javascript
  var names = ["Luke Skywalker", "Darth Vader", "Obi-Wan"];
  
  function sayHi(name) {
    console.log('Hi ' + name);
  }
  
  (function(arr) {
    arr.forEach(function(name) {
      sayHi(name);
    });
  })(names);
```

## Explain generally about node.js and NPM.
...

## Provide examples of user defined reusable modules implemented in Node.js
...
