## Explain the use of: "use strict"
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
Strict mode helps out in a couple ways:

- It catches some common coding bloopers, throwing exceptions.
- It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
- It disables features that are confusing or poorly thought out.

#### Example
You can apply strict-mode to the entire file:
```javascript
"use strict";
x = 3.14;       // This will cause an error (x is not defined)
```
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
