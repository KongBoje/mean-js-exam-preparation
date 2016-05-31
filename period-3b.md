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

## Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
Mongoose is an ORM-like tool for MongoDB. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
Mongoose adds another layer of robustness on top of MongoDB. Write less code, easier to read code (object modeling) and schema validation.
MongoDB is schema-less and Mongoose adds schemas. This might seem counterintuitive at first... but Real life data has (often) structure and (often) types.

## Explain the benefits from using Mongoose, and provide an example involving all CRUD operations.
Refer to the above question.
- [Model](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/models/model.client.js)
- [Routes](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/routes/clients.js)
- [Server](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/app.js)
- [Angular](https://github.com/ERPedersen/school-meanJS/blob/extra-clientkeeper-project/public/controllers/home.js)




