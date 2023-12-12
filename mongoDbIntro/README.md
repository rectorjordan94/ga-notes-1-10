[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# An Introduction to MongoDB

## Objectives

By the end of this, developers should be able to:

- Interact with MongoDB databases and collections using the MongoDB shell.
- Create, Read, Update, and Delete documents in MongoDB collections using the
  MongoDB shell.

## Preparation

1. Fork and clone this repository.
2. Create a new branch, `training`, for your work.
3. Checkout to the `training` branch.

## Introduction

MongoDB is a document-oriented NoSQL database. Instead of the traditional SQL database that has rows and columns MongoDB stores data in documents that hold key value pairs. These documents end up looking a lot alike to JavaScript Ojbects but they are actually stored as BSON.

BSON is similar to JSON, but JSON can only store strings, BSON can store an exanded data type which makes it perfect for MongoDB.

### Terminology

| **MongoDB Term** | **MongoDB Definition**           |
|:-----------------|:---------------------------------|
| [document](https://www.mongodb.com/docs/manual/core/document/) | A record in a MongoDB collection and the basic unit of data in MongoDB. Documents are analogous to JSON objects but exist in the database in a more type-rich format known as BSON.|
| [field](https://docs.mongodb.com/manual/core/document/#document-structure) | A name-value pair in a document. A document has zero or more fields. Fields are analogous to columns in relational databases. |
| [collection](https://www.mongodb.com/docs/manual/core/databases-and-collections/#collections) | A grouping of MongoDB documents. A collection is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose. |
| [database](https://www.mongodb.com/docs/manual/core/databases-and-collections/#databases) | A physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases. |

>**_NOTE_**: All definitions above came from the [MongoDB Glossary](https://www.mongodb.com/docs/manual/reference/glossary/)

## Code Along: Create a Database

We will be using the MongoDB Shell `mongosh` to interact with our database. This shell is a fully functional JavaScript and Node repl as well.

To enter the repl you will need to use the command `mongosh` in your terminal.

In your terminal use the command `mongosh mongo-crud`. This command does two things. First if there is not a `mongo-crud` database it creates it, then the shell moves us into that database so we can interact with it.

## CRUD: Create, Read, Update, and Delete

CRUD operations are the base of interations with a database. Let's dive into each:

### Create

Creating and inserting a new document to a colletion. You can insert a single document or multiple.

For extra examples see [Insert Documents](https://www.mongodb.com/docs/mongodb-shell/crud/insert/#std-label-mongosh-insert)

### Read

Retrieves the document or documents from the database. You can specify what you want to be retrieved.

For extra examples see [Query Documents](https://www.mongodb.com/docs/mongodb-shell/crud/read/#std-label-mongosh-read)

### Update

Modifies an exisiting document in a collection. Like read you can specify which document is going to be modified.

For extra examples see [Update Documents](https://www.mongodb.com/docs/mongodb-shell/crud/update/#std-label-mongosh-update)

### Delete

Removes a document from a collection. Like read and update you can specify which document is going to be removed.

For extra examples see [Delete Documents](https://www.mongodb.com/docs/mongodb-shell/crud/delete/#std-label-mongosh-delete)

## Code Along: Create - People

We are going to be working inside the `mongo-crud` database.

Using [`.insertOne`](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/) let's create a single document, inside `scripts/create/people.js`:

```js
// using built in `connect` method from MongoDB to connect to our `mongo-crud` database
const db = connect('mongodb://localhost/mongo-crud')

//  creating a Plan Old JavaScript Oject (POJO) that will respresent a document
const person = {
    lastName: 'Sisko',
    firstName: 'Ben',
}

// db -  the database we connected to (mongo-crud)
// people - collection we want to work with
// insertOne - MongoDB method used to insert a single document
db.people.insertOne(person)
```

Now that we have the above in our JavaScript file let's load it into MongoDB. In your terminal:

- At this repositories root directory use the command `mongosh mongo-crud`
- In the `mongosh` shell load the JavaScript file `load("./scripts/create/people.js")`

If this was successful you will see a `true` if this failed you will see a `false` with an error.

Using [`.insertMany`](https://www.mongodb.com/docs/manual/reference/method/db.collection.insertMany/) let's create multiple documents, inside `scripts/create/people.js`:

```js
// create an array of Plain Old JavaScript Objects (POJO)
const people = [
	{
		lastName: 'Dax',
		firstName: 'Jadzia',
	},
	{
		lastName: "O'Brien",
		firstName: 'Miles',
	},
	{
		lastName: 'Bashir',
		firstName: 'Julian',
	},
]

// db -  the database we connected to (mongo-crud)
// people - collection we want to work with
// insertMany  - MongoDB method used to insert multiple documents
db.people.insertMany(people)
```

Since we have already loaded this file into MongoDB we can rerun this file with the command `mongosh -f scripts/create/people.js`

>**_NOTE_**: For more information about writing scripts in MongoDB visit the documentation [here](https://www.mongodb.com/docs/mongodb-shell/write-scripts/)

## Lab: Create - Doctors and Ingredients

Doctor documents should have the following fields:

- specialty
- firstName
- lastName

In your `scripts/create/doctors.js`:

- Using the fields above create a single doctor document
- Using the fields above create multiple doctor documents

Ingredient documents should have the following fields:

- name
- unit

In your `scripts/create/ingredients.js`:

- Using the fields above create a single ingredients document
- Using the fields above create multiple ingredients documents

Remember to test you need to:

- At this repositories root directory use the command `mongosh mongo-crud`
- In the `mongosh` shell load the JavaScript file `load("./scripts/create/people.js")` (change path to file when needed)
- To rerun a file once loaded, make sure you are NOT in the `mongosh` shell, and use the command `mongosh -f scripts/create/people.js` (change path to file when needed)

## Code Along: Read - People

Using [`.find()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/) let's query all documents in the `people` collection:

```js
// using built in `connect` method from MongoDB to connect to our `mongo-crud` database
const db = connect('mongodb://localhost/mongo-crud')

// db -  the database we connected to (mongo-crud)
// people - collection we want to work with
// .find - MongoDB method used to query a collection, with nothing passed in it will give us back all documents in the `people` collection
const allPeople = db.people.find()

// have to console.log it or we will not see the results once the file is ran
console.log(allPeople)
```

Load this file into the shell:

- At this repositories root directory use the command `mongosh mongo-crud`
- In the `mongosh` shell load the JavaScript file `load("./scripts/read/people.js")`

Again using [`.find()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/) we can pass in a filter to retrieve specific documents:

```js
// db -  the database we connected to (mongo-crud)
// people - collection we want to work with
// .find - MongoDB method used to query a collection, we can pass in a filter that will check all of our documents in the collection and return the documents that match that filter
const bashir  = db.people.find({ lastName: 'Bashir' })

// have to console.log it or we will not see the results once the file is ran
console.log(bashir)
```

To rerun this file once loaded:

- Make sure you are NOT in the `mongosh` shell, and use the command `mongosh -f scripts/read/people.js`

## Lab: Read - Doctor and Ingredients

Doctors collection:

In your `scripts/read/doctors.js`:

- Query for all the documents in the `doctors` collection
- Query for all the documents that have a particular `specialty`

Ingredients collection:

In your `scripts/read/ingredients.js`:

- Query for all the documents in the `ingredients` collection
- Query for all the documents that have a particular `unit`

Remember to test you need to:

- At this repositories root directory use the command `mongosh mongo-crud`
- In the `mongosh` shell load the JavaScript file `load("./scripts/read/people.js")` (change path to file when needed)
- To rerun a file once loaded, make sure you are NOT in the `mongosh` shell, and use the command `mongosh -f scripts/read/people.js` (change path to file when needed)

## Code Along: Update - People

Using [`.updateOne()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/) let's update a single document:

```js
// using built in `connect` method from MongoDB to connect to our `mongo-crud` database
const db = connect('mongodb://localhost/mongo-crud')

// db -  the database we connected to (mongo-crud)
// people - collection we want to work with
// .updateOne - MongoDB method to update a single document
    // filter - the first argument passed in is the filter used to find a document. If the filter matches multiple documents it will return the first one.
    // update - the second argument passed in is the update that we want to do on a document. Using `$set` we change the value of the `lastName` field
db.people.updateOne({ lastName: 'Dax' }, {
    $set: {
        firstName: 'Ezri'
    }
})

// have to console.log it or we will not see the results once the file is ran
const chiefScienceOfficer = db.people.find({ lastName: 'Dax' })

console.log(chiefScienceOfficer)
```

Load this file into the shell:

- At this repositories root directory use the command `mongosh mongo-crud`
- In the `mongosh` shell load the JavaScript file `load("./scripts/update/people.js")`

Using [`.updateMany()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateMany/) we can add a new field to all of our people documents:

```js
// db -  the database we connected to (mongo-crud)
// people - collection we want to work with
// .updateMany - MongoDB method to update a single document
    // filter - the first argument passed in is the filter used to find all documents matching that filter. If you want to match everything in the collections you can pass in an empty object.
    // update - the second argument passed in is the update that we want to do on all documents. Using `$set` we add a new field called `show` and assign that value to be `DS9`
db.people.updateMany({}, {
    $set: {
        show: 'DS9'
    }
})

// have to console.log it or we will not see the results once the file is ran
const all = db.people.find()

console.log(all)
```

To rerun this file once loaded:

- Make sure you are NOT in the `mongosh` shell, and use the command `mongosh -f scripts/update/people.js`

>**_NOTE_**: For a full list of all MongoDB update operators you can visit the docs [here](https://www.mongodb.com/docs/manual/reference/operator/update/#update-operators-1).

## Lab: Update - Doctor and Ingredients

Doctors collection:

In your `scripts/update/doctors.js`:

- Update a single document in the `doctors` collection
- Update all documents field `specialty` to the value of `General Practice`

Ingredients collection:

In your `scripts/update/ingredients.js`:

- Update a single document in the `ingredients` collection
- Update all documents field `unit` to the value of `tbs`

Remember to test you need to:

- At this repositories root directory use the command `mongosh mongo-crud`
- In the `mongosh` shell load the JavaScript file `load("./scripts/update/people.js")` (change path to file when needed)
- To rerun a file once loaded, make sure you are NOT in the `mongosh` shell, and use the command `mongosh -f scripts/update/people.js` (change path to file when needed)

## Code Along: Delete - People

Using [`.deleteOne()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/) we can remove a single document:

```js
// using built in `connect` method from MongoDB to connect to our `mongo-crud` database
const db = connect('mongodb://localhost/mongo-crud')

// db -  the database we connected to (mongo-crud)
// people - collection we want to work with
// .deleteOne - MongoDB method we use to remove a single document from a collection. We pass in a filter that will check all of our documents in the collection and return the documents that match that filter. If more than one document matches that filter the first one is returned.
db.people.deleteOne({ lastName: 'Bashir' })

// have to console.log it or we will not see the results once the file is ran
const allPeople = db.people.find()
console.log(allPeople)
```

Load this file into the shell:

- At this repositories root directory use the command `mongosh mongo-crud`
- In the `mongosh` shell load the JavaScript file `load("./scripts/delete/people.js")`

Using [`.deleteMany()`](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteMany/) we can remove multiple documents from a collection:

```js
// db -  the database we connected to (mongo-crud)
// people - collection we want to work with
// .deleteMany - MongoDB method we use to remove multiple documents from a collection. We pass in a filter that will check all the documents in our collection and return all douments that match that filter.
db.people.deleteMany({ show: 'DS9' })

// have to console.log it or we will not see the results once the file is ran
const allPeople = db.people.find()

console.log(allPeople)
```

To rerun this file once loaded:

- Make sure you are NOT in the `mongosh` shell, and use the command `mongosh -f scripts/delete/people.js`

## Lab: Delete - Doctor and Ingredients

Doctors collection:

In your `scripts/delete/doctors.js`:

- Delete a single document in the `doctors` collection
- Delete all documents that have a `specialty` of `General Practice`

Ingredients collection:

In your `scripts/delete/ingredients.js`:

- Delete a single document in the `ingredients` collection
- Delete all documents that have a `unit` of `tbs`

Remember to test you need to:

- At this repositories root directory use the command `mongosh mongo-crud`
- In the `mongosh` shell load the JavaScript file `load("./scripts/delete/people.js")` (change path to file when needed)
- To rerun a file once loaded, make sure you are NOT in the `mongosh` shell, and use the command `mongosh -f scripts/delete/people.js` (change path to file when needed)

## Additional resources

- [BSON Types](https://docs.mongodb.org/manual/reference/bson-types/)
- [Data Model Examples and Patterns](https://docs.mongodb.com/manual/applications/data-models/)
- [Building with Patterns](https://www.mongodb.com/blog/post/building-with-patterns-a-summary)
- [Update Operators](https://www.mongodb.com/docs/manual/reference/operator/update/#update-operators-1)
- [MongoDB Shell](https://www.mongodb.com/docs/mongodb-shell/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
