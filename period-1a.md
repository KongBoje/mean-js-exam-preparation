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

## Explain the use of: "use strict":
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
Strict mode helps out in a couple ways:

- It catches some common coding bloopers, throwing exceptions.
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
- It disables features that are confusing or poorly thought out.

#### Example 1
You can apply strict-mode to the entire file:
```javascript
"use strict";
x = 3.14;       // This will cause an error (x is not defined)
```

#### Example 2
You can use it in a specific function scope:
```javascript
// Non-strict code...

(function(){
  "use strict";
  x = 3.14;       // This will cause an error (x is not defined)
  // Strict code...
})();

// Non-strict code... 
```

## Variable/function-Hoisting
At runtime the compiler will move variable declarations and function declarations to the top of the document.

#### Example 1:
The javascript engine will automatically hoist the function declaration to the top:
```javascript
foo(); // The function is called before it is declared
function foo() {} // This function is moved to the top of the document on runtime
```
This is what it is going to look like at runtime:
```javascript
function foo() {}
foo();
```

#### Example 2:
Only the declaration is hoisted, and not the assignment:
```javascript
foo();
var foo = function () {};
```
This is what it is going to look like at runtime:
```javascript
var foo;
foo();  // TypeError: undefined is not a function
foo = function () {};
```

## `this` in JavaScript and how it differs from what we know from Java/.net.
A function's `this` keyword behaves a little differently in JavaScript compared to other languages.
In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

#### Example 1 (Global Context):
In the global execution context (outside of any function), this refers to the global object, whether in strict mode or not.
```javascript
console.log(this.document === document); // true

// In web browsers, the window object is also the global object:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

## Immediately-Invoked Function Expressions (IIFE)
An immediately invoked function is a function that is called immediately after it is declared.

#### Example 1:
WordPress disables the use of `$` for sequrity reasons when working with jQuery.:
```javascript
(function($) {

  $(document).ready() { // code... };
  
})(jQuery);
```
You can also use it as a shorter way of writing consolidated code, and immediately executing it.

## Use the Debugger to explain about the basic "things" all objects inherits from object
Do a live example of this:
```javascript
var a = {};
var b = [];
var c = true;
var d = "Hello World";
var e = 123;
var f = new Date();
console.log("Add a breakpoint on me")
```

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
