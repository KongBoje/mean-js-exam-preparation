## Why would you consider a Scripting Language as JavaScript as your Backend Platform.
- It's fast and easy to set up a working network application with Node.js
- You can use the same language in the front-end and back-end.

## Explain, using a relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations

- [Model](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/models/model.client.js)
- [Routes](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/routes/clients.js)
- [Server](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/app.js)
- [Angular](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/public/controllers/home.js)

## Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.

Testing the indexOf method on an array with 3 values:
```javascript
var assert = require('chai').assert;
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
```

Working with hooks:
```javascript
describe('hooks', function() {

  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
```


## Explain, using relevant examples, concepts related to the testing a REST-API using Node/JavaScript + relevant package

For the tests I have used chai and a testing module called "supertest", which makes it easy to test asynchronous code.
- [Test](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/test/test.routes.clients.js)

## Explain, using relevant examples, different ways to mock out databases, HTTP requests etc.
I use a development database instead of mocking the database. It saves a lot of trouble, and is a lot faster.

There are several modules for mocking HTTP requests. One is `supertest`:
- [Mocking GET requests](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/test/test.routes.clients.js#L24)
- [Mocking POST requests](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/test/test.routes.clients.js#L197)
- [Mocking PUT requests](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/test/test.routes.clients.js#L293)
- [Mocking DELETE requests](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/test/test.routes.clients.js#L382)
