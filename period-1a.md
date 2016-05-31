## Explain the use of: "use strict"
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


