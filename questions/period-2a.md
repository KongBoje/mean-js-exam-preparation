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

## Compare, using relevant examples, the express strategy toward (server side) templating with the one you used with Java on second semester.
Node.JS and Express uses templating engines like Handlebars, Jade and EJS. Java uses templating engines like JSP and JSF. Java was never made to be suitable for web applications, and JSP is often seen as a makeshift solution.

Java: Model --> Controller --> Servlet --> JSP

Express.js: Model --> Controller/Router --> Handlebars/Jade/EJS

#### Example 1 (Passing variables to a view in Express)
Node.js + Express.js:
```javascript
router.get('/dashboard', isLoggedIn, function (req, res) {
    res.render('dashboard', {
        title: 'Dashboard',
        subtitle: 'Welcome to the dashboard'
    });
});
```
Java + JSP
```java
protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        RequestDispatcher rd = null;
        HttpSession session = request.getSession();
        session.setMaxInactiveInterval(30 * 60);

        session.setAttribute("title", "Dashboard");
        session.setAttribute("subtitle", "Welcome to the dashboard");
        rd = request.getRequestDispatcher("dashboard.jsp");
        rd.forward(request, response);

}
```

#### Example 2 (Retrieving a session variable on the front end with Handlebars)
Node.js + Express.js:
```html
<h1>{{title}}</h1>
<h2>{{subtitle}}</h2>
```
Java + JSP
```jsp
<h1><%= session.getAttribute("title"); %></h1>
<h2><%= session.getAttribute("subtitle"); %></h2>
```

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

