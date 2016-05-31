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
Every JavaScript object has a prototype. The prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

#### Example (Creating a prototype):
```javascript
  function Person(firstName, lastName, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  
  var person1 = new Person("Luke", "Skywalker", 26);
  var person2 = new Person("Darth", "Vader", 48);
  var person3 = new Person("Master", "Yoda", 900);
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
  });
```

#### Example 2 (Map):
Creates a new array with the values modified by the callback function
```javascript
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // This will produce an array with [1,2,3,4,5,6,7,8,9,10]
  var filtered = numbers.map(function (number) {
      return number++;
  });
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
### Node.js:
Node.js is an event based, asynchronous I/O server side platform that runs on Google's V8 JavaScript Engine for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

#### What it's NOT
- Node.js is not a JavaScript framework.
- Node.js' V8 wrappers are not made in JavaScript but C.
- Node.js is not multi-threaded. It runs in a single thread with callback concept.

#### What it IS:
- Node.js is a server side platform which can execute JavaScript.
- Node.js is an open source platform to make real time network applications
- Node.js provides asynchronous, event driven I/O APIs.
- Node.js runs a single threaded event based loop, so all executions become non-blocking.

### Pros & Cons
#### Pros:
- Asynchronous event driven IO helps concurrent request handling.
- Provides the possibility to use the same language on both the server and client side.
- Allows you to use NPM - the Node Package Manager.
- Has an activate and vibrant community, with lots of free-to-use open source modules.

#### Cons:
- Dealing with relational databases are a pain.
- Nested callbacks can create confusion.
- Requires understanding of somewhat advanced JavaScript.
- Not suited for CPU-intensive tasks.

### NPM
NPM is a package manager for Node.js with hundreds of thousands of packages, which you can include in your Node.js based projects. Using NPM can really speed up the process when building applications in Node.js. NPM allows Node.js to be lightweight, because you only include the features that you need, thus avoiding a bloated server side platform.

## Provide examples of user defined reusable modules implemented in Node.js
person.js
```javascript
    function Person(name, age) {
        var name = name;
        var age = age;

        return {
            setName: function(value) {
                name = value;
            },
            setAge: function(value) {
                age = value;
            },
            getInfo: function() {
                return {
                    name: name,
                    age: age
                }
            }
        };
    }

    module.exports = Person;
```
main.js
```javascript
    var Person = require('person.js');
    var person1 = Person("Luke Skywalker", 26);
    console.log(person1.getInfo);
```
