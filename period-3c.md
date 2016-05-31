## Explain, generally, what is meant by a NoSQL database.
A NoSQL (originally referring to "non SQL" or "non relational") database provides a mechanism for storage and retrieval of data which is modeled in means other than the tabular relations used in relational databases. NoSQL databases are increasingly used in big data and real-time web applications.

## Explain how databases like MongoDB and redis would be classified in the NoSQL world

### Mongo DB
Is a document oriented database. Documents are independent units which makes performance better (data is read contiguously off disk) and makes it easier to distribute data across multiple servers while preserving its locality.
Application logic is easier to write. No need to translate between objects in your application and SQL queries, you can just turn the object model directly into a document. (sure, but you have ORM with SQL)
Unstructured data can be stored easily, since a document contains whatever keys and values the application logic requires.

### Redis
Redis is an open source, in-memory data structure store, used as database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Basically key/value storage.
Redis typically holds the whole dataset in memory, and saves to disk every two seconds.

## Explain, using a relevant example, how redis (or a similar data store) can increase scalability (drastic) for a server, using server side sessions

![alt text](http://i.imgur.com/usM134B.png "Logo Title Text 1")