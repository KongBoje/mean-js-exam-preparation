## Explain, generally, what is meant by a NoSQL database.
A NoSQL (originally referring to "non SQL" or "non relational") database provides a mechanism for storage and retrieval of data which is modeled in means other than the tabular relations used in relational databases. NoSQL databases are increasingly used in big data and real-time web applications.

## Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

### Pros:
- Simplicity of design. (data does not have to be normalized. Just save everything you need, in a document, for a specific domain.)
- Some operations faster in NoSQL. (especially when your data needs are "non-relationel in nature - you typically store and request data from the same domain)
- Simpler "horizontal" scaling to clusters of machines. (Just add another machine to extend storage space. Speed will be almost constant)

### Cons:
- Compromise consistency in favor of availability
- No dedicated noSQL-language like SQL and lack of standardized interfaces (it's easier to design an ORM if you have this).
- Huge previous investments in existing relational databases.
- Mostly lacking ACID (Atomicity, Consistency, Isolation, Durability)

## Explain how databases like MongoDB and redis would be classified in the NoSQL world

### Mongo DB
Is a document oriented database. Documents are independent units which makes performance better (data is read contiguously off disk) and makes it easier to distribute data across multiple servers while preserving its locality.
Application logic is easier to write. No need to translate between objects in your application and SQL queries, you can just turn the object model directly into a document. (sure, but you have ORM with SQL)
Unstructured data can be stored easily, since a document contains whatever keys and values the application logic requires.

### Redis
Redis is an open source, in-memory data structure store, used as database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Basically key/value storage.
Redis typically holds the whole dataset in memory, and saves to disk every two seconds.

## Explain, using relevant examples, the strategy for querying MongoDB (all CRUD operations)

### Create operations
```javascript
db.users.insertOne(
    {
     name: "Emil",
     age: "26"
    }
);
```
```javascript
db.users.insertMany([
    {
     name: "Anna",
     age: "27"
    },
    {
     name: "Ole",
     age: "26"
    }
]);
```

### Read operations
```javascript
db.users.find({name: "Emil"})
    .limit(5)                       // Optional
    .order({'name':'ascending'});   // Optional
```

### Update operations
```javascript
db.users.updateOne({name: "Emil"}, {age: "27"});
```
```javascript
db.users.updateMany({age: "26"}, {age: "27"});
```

### Delete operations
```javascript
db.users.deleteOne({name: "Emil"});
```
```javascript
db.users.deleteMany([{age: "26"}]);
```

## Demonstrate, using a REST-API, how to perform all CRUD operations on a MongoDB
Using Mongoose: [CRUD Operations](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/models/model.client.js)


