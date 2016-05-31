## Why would you consider a Scripting Language as JavaScript as your Backend Platform.
- It's fast and easy to set up a working network application with Node.js
- You can use the same language in the front-end and back-end.

## Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat

### Pros
- If done right, you can make very responsive network applications.
- Allows the use of web sockets, data streaming and fast file uploads.
- It is easy to set up a REST API with generators like Yeoman or a custom Boilerplate project.
- It is efficient at handling thousands of concurrent requests (For example - a chat application).
- It is very simple to implement server middleware, that will be executed between all requests.

### Cons
- Java is good at handling CPU heavy tasks, Node.JS + Express is not
- Java integrates well with relational databases like MySQL, Node.JS + Express does not.
- Java as oppposed to Node.JS + Express is a strictly typed language which provides a certain security.
- 500 errors in Node.JS and Express will crash the entire application, Java will not.

## Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.
You can do this in two ways:

#### Solution 1 (Program it):
Node.js does not come with mutlithreading out of the box, but it is possible to program it, however this is not something we have done in class.

#### Solution 2 (Multiple instances)
My preferable solution is to run several instances of Node.JS on one or more machines, and put a load balancer in front of it. The load balancer will balance the load of incoming requests, thus achieving a multicore solution.

## Explain, using relevant examples, the Express concept; middleware.
Middleware functions are functions that you bind to the express instance and works as a way to configure/add functionality between requests:

- **Application level middleware**: Mount to all requests or specific endpoints to define routes.
- **Router-level middleware**: Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
- **Error-handling middleware**: Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):
- **Third-party middleware**: Add functionality.

Middleware is executed sequentially. Therefore the order of the middleware is important. If we for example wanted to use the bodyParser to retrieve the body of our request as JSON, we would need to put it before we use it.


```javascript
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

app.use(bodyParser.json());

router.post('/', function (req, res) {
    res.send(req.body);
});
```

## Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.
To enable the use of the session we have to require the module `express-session`. This module was earlier integrated into Express.js but was removed to make the framework more lightweight:
```javascript
var session = require('express-session');
```

We enable the session with the following middleware:
```javascript
app.use(session({
    secret: '50ac41d0f8eff9365213',
    saveUninitialized: false,
    resave: true
}));
```

To retrieve the session, we can do the following on the `req` object, and also add properties to it:
```javascript
    var session = req.session;
    session.username = "emil";
```

A cookie consent has to be implemented on the site, if the cookie is used to track user behaviour.
