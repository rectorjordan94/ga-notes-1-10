[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# An Introduction to Mongoose

As you saw in the previous talk, MongoDB is extremely flexible - if you want, you can store data of literally any structure in a collection, even if you haven't defined that structure beforehand.

However, this flexibility has a weakness: since you can enter data in _**any arbitrary format**_, and there's no built-in validation to permit/reject new documents, there's no assurance that the documents in a collection will be consistent in any way.

Fortunately, there's a tool called Mongoose that will help to address these problems.

## Prerequisites

- [MongoDB](https://git.generalassemb.ly/sei-ec-remote/mongoDbIntro)

## Objectives

By the end of this talk, developers should be able to:

- Access and manipulate a MongoDB database from a Javascript program by using Mongoose.
- Combine multiple Mongoose operations by using Javascript Promises.
- Validate data for storage in MongoDB by setting up Mongoose validations.

## Preparation

1. Fork and clone this repository
2. Create a new branch, `training`, for your work.
3. Checkout to the `training` branch.
4. Install dependencies with `npm install`.

## Mongoose Object-Document Mapper

Mongoose is an Object-Document Mapper

What does that mean?

Mongoose allows us to represent documents in MongoDB using JavaScript objects.

Additionally, because Mongoose fits in between our JS code and MongoDB, it's able to add some limitations on how MongoDB gets used, so that there's greater consistency in our data.

The core elements of Mongoose are:

- [Documents](http://mongoosejs.com/docs/documents.html), JavaScript objects
  that map to Documents in MongoDB.
- [Models](http://mongoosejs.com/docs/models.html), which are Constructor
  functions that generate new Documents.
- [Schemas](https://mongoosejs.com/docs/guide.html#schemas), which specify the properties
  that the Models give to their respective Documents.

### Code Along: Mongoose Schemas

Everything in Mongoose starts with a Schema. Think of the Schema as a set of rules for a document to follow. Let's create our first schema. Inside of `models/person.js` we want to create a schema that has the following fields:

- firstName - string
- lastName - string

```js
// require the mongoose library
const mongoose = require('mongoose')

// extract the Schema constructor from mongoose
const Schema = mongoose.Schema

const personSchema = new Schema({
	// field name will be `firstName` and the data type this value this will be expecting is a string
	firstName: String,
	// field name will be `lastName` and the data type this value this will be expecting is a string
	lastName: String,
})
```

#### Mongoose Schema: Validation

We can add a little more validation behind our schema. Let's require that documents have a `firstName` and `lastName` field. Also let's add another field called `shirtColor` and use an `enum` to enforce only being able to select from certain values.

```js
const personSchema = new Schema({
	// field name will be `firstName`
	firstName: {
		// data type of this value will be expecting a string
		type: String,
		// a value must be passed in
		required: true,
	},
	// field name will be `lastName`
	lastName: {
		// data type of this value will be expecting a string
		type: String,
		// a value must be passed in
		required: true,
	},
	// field name will be `shirtColor`
	shirtColor: {
		// data type of this value will be expecting a string
		type: String,
		// a value must be passed in
		required: true,
        // the value MUST be one of these options
		enum: ['blue', 'yellow', 'red', 'Not Starfleet'],
	},
})
```

### Mongoose Model

After we have a Schema that has all of our rules that we want for a document we can now create a Model.  Inside of `models/person.js` after our `personSchema`:

```js
// naming of models by convention is capitized
// using the `mongoose.model` method to create a model
    // 'Person' - first argument passed in is the model name. The collection name will be the pluralization of this string. Since we are passing in Person the collection name will be people.
    // personSchema - second argument passed in is the schema we will use for this model
const Person = mongoose.model('Person', personSchema)

// export your model to be used elsewhere in your code
module.exports = Person
```

### Lab: Schema and Model - Place

Let's practice the above learnings. Inside of `models/place.js` create a schema and export a model.

The following fields should be strings and required:

- name
- country

## CRUD - Mongoose

Now that we have a Model to use we need to test it. Just like yesterday in our MongoDB lesson our database interactions are most likely going to be a CRUD action. We are going to be using Node to interact with Mongoose and MongoDB.

### Code Along: Create - Person

Since we are going to be using Node to run these files we will need to handle the connection when we run the file. Inside of `scripts/people/create.js`:

```js
// requrie mongoose in file so we can use the mongoose built in methods
const mongoose = require('mongoose')

// connect mongoose to your mongo database, the one we're using today is called mongose-crud
mongoose.connect('mongodb://localhost/mongoose-crud', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

// save connection to the database in the variable 'db', for easy reference later.
const db = mongoose.connection
```

Once the above is done we can handle what to do once the database is `open`. Back inside of `scripts/people/create.js` and under the code we have already done:

```js
// require Person model
const Person = require('../../models/person')

// For the purposes of this lesson we'll be getting our input from the command line, so let's set that up now.
const firstNameUserInput = process.argv[2]
const lastNameUserInput = process.argv[3]
const shirtColorInput = process.argv[4]

// open connection to db
db.once('open', function () {
	// accept data from the terminal input
	// we'll use our previously defined variables to accept the info and save a new Person document to mongodb
	// create a Person
	Person.create({
		firstName: firstNameUserInput,
		lastName: lastNameUserInput,
		shirtColor: shirtColorInput
	})
		// here we'll print success or failure
		.then(console.log)
		.catch(console.error)
		// lastly, we'll close connection to the db
		.finally(() => db.close())
})
```

We can test this with:

- `node scripts/people/create.js 'Kathryn' 'Janeway' 'red'`
- `node scripts/people/create.js 'Tom' 'Paris' 'red'`

### Lab: Create - Place

Let's practice the above learnings. 

Inside of `scripts/place/create.js`:

- Create connection between MongoDB and Mongoose
- Open connection to database
- Intake user infromation via command line
- Succefully run the file and be able to create a single place

Remember to test this file you will need to run it with Node and values need to be passed in via command line.

### Read - People

There are two ways to do the action of `read`. One is to get _all_ the collections documents and the other is to get a _single_ document. These 2 actions are classified as `index` or `show`.

#### Code Along: Index - People

The `index` action is the action of retreive _all_ documents from a collection. Inside of `scripts/people/index.js`, make sure to bring over the boilerplate connection code from `create`:

```js
// open connection to db
db.once('open', function () {
	// using the .find() model method we search through the database to find all the documents in a collection
	Person.find()
		// if the above was a success results are passed to the first .then
    // people - naming the results being passed to .then so we can use it in the function scope
		.then((people) => {
			// printing all documents to the console
            console.log(people)
		})
		// if there was an error send it to the console
		.catch(console.error)
		// no matter if the above passed or failed close the database connection
		.finally(() => db.close())
})
```

We can test this with:

- `node scripts/people/index.js`

#### Lab: Index - Place

Let's practice the above learnings. 

Inside of `scripts/place/index.js`:

- Create connection between MongoDB and Mongoose
- Open connection to database
- Succefully run the file and be able to see all `Place` documents in the console

Remember to test this file you will need to run it with Node.

#### Code Along: Show - Person

Let's now finish our `read` actions with `show`. `show` is the action of retrieving a single item from the database. Inside of `scripts/people/show.js`:

```js
// open connection to db
db.once('open', function () {
	// since `id`s are unquie to a single document we can use that to search the collection for a single document
    // using the model method .findById and passing in the `id` we want to search for
	Person.findById(userInputId)
		// if the above was a success results are passed to the first .then
		// person - naming the results being passed to .then so we can use it in the function scope
		.then((person) => {
			// printing the found person to the console
			console.log(person)
		})
		// if there was an error send it to the console
		.catch(console.error)
		// no matter if the above passed or failed close the database connection
		.finally(() => db.close())
})
```

We can test this with:

- `node scripts/people/show.js <insert id here>`

#### Lab: Show - Place

Let's practice the above learnings. 

Inside of `scripts/place/show.js`:

- Create connection between MongoDB and Mongoose
- Open connection to database
- Succefully run the file and be able to see a single `Place` document in the console

Remember to test this file you will need to run it with Node and values need to be passed in via command line.

### Code Along: Update - Person

Now that we can create, and read documents let's update some. Inside of `scripts/people/update.js`:

```js
// we have to intake values from the command line
// we will need and `id` to search for a document to change
const userInputId = process.argv[2]
// we will want to select a field we want to change
const userInputKey = process.argv[3]
// we will need a new value
const userInputValue = process.argv[4]

// open connection to db
db.once('open', function () {
    // first find a document, we don't want to modify all documents we want to modify one
    // pass in the `id` to search for
	Person.findById(userInputId)
		// if the above was a success results are passed to the first .then
		// person - naming the results being passed to .then so we can use it in the function scope
		.then((person) => {
			// the type of document that is returned is just an object
			// since it's an object we can use object syntax with it
			// using bracket notaion select the field and modify the value
			person[userInputKey] = userInputValue

			// using document middleware we want to save the changes we made on the document
			// YOU MUST DO THIS TO SUCCESSFULLY SAVE CHANGES
			return person.save()
		})
		//  since the updated person is being returned on the line above we can name it here and use it in the function scope
		.then((person) => {
			// printing person to the console
			console.log(person)
		})
		// if there was an error send it to the console
		.catch(console.error)
		// no matter if the above passed or failed close the database connection
		.finally(() => db.close())
})
```

We can test this with:

- `node scripts/people/update.js <insert id here> shirtColor yellow`

### Lab: Update - Place

Let's practice the above learnings. 

Inside of `scripts/place/update.js`:

- Create connection between MongoDB and Mongoose
- Open connection to database
- Succefully run the file and be able to see a single updated `Place` document in the console

Remember to test this file you will need to run it with Node and values need to be passed in via command line.

### Code Along: Delete - Person

And finally we will want to remove documents from our database. Inside of `scripts/people/delete.js`:

```js
// we have to intake values from the command line
// we will need and `id` to search for a document to change
const userInputId = process.argv[2]

// open connection to the db
db.once('open', function () {
	// first find a document, we don't want to delete all documents we want to delete one
	// pass in the `id` to search for
	Person.findById(userInputId)
		// if the above was a success results are passed to the first .then
		// person - naming the results being passed to .then so we can use it in the function scope
		.then((person) => {
			// using the document middleware to remove the found document
			return person.deleteOne()
		})
		//  since the updated person is being returned on the line above we can name it here and use it in the function scope
		.then((person) => {
			// printing removed person to the console
			console.log(person)
		})
		// if there was an error send it to the console
		.catch(console.error)
		// no matter if the above passed or failed close the database connection
		.finally(() => db.close())
})
```

We can test this with:

- `node scripts/people/delete.js <insert id here>`

### Lab: Delete - Place

Let's practice the above learnings. 

Inside of `scripts/place/delete.js`:

- Create connection between MongoDB and Mongoose
- Open connection to database
- Succefully run the file and be able to see a single deleted `Place` document in the console

Remember to test this file you will need to run it with Node and values need to be passed in via command line.

## Bonus: Virtuals and Validations

### Mongoose Virtuals

Mongoose virtuals are a simple way of interacting with your data without having to save anything else to your database. Let's add a virtual to our `personSchema` and use it in our `show` function.

Inside your `models/person.js` after your schema but before your model:

```js
// using the .virtual schema method
// `nameAndSection` - a meaningful name to call this virtual, you can call this anyting you want
// using the .get virtual method so we can return a value
// passing in a function so our  .get  knows what to return
personSchema.virtual('nameAndSection').get(function () {
	// starting off as not starfleet
	let section = 'Not Starfleet'
	// if a red shirt
	if (this.shirtColor === 'red') {
		// they are in command
		section = 'Command'
		// if yellow shirt
	} else if(this.shirtColor === 'yellow') {
		// they are in engineering
		section = 'Engineering'
		// if they are a blue shirt
	} else if (this.shirtColor === 'blue') {
		// they are in science
		section = 'Science'
	}
	// returning a string of name and section
	return `My name is ${this.firstName} and I'm in ${section}`
})
```

Now that we have a virtual we can use let's use it in `scripts/people/show.js`:

```js
.then((person) => {
			// printing the found person to the console using the virtual
			console.log(person.nameAndSection)
		})
```

And now when we run the `show` file with Node we can see the name and section of that found person.

### Mongoose Setters

Sometimes users will input information that is not wrong but might be in the wrong format. Either all capitalized or lower case or just all over the place. It would be nice to scrub their input especially when we have a `enum` that is looking for an all lowercase value. 

Inside of `models/person.js` let's create a function that will intake a string, transform it to all lowercase, then return the transformed string:

```js
// naming the function a meaningful name
// must name a param here, mongoose will be passing this function the users input
const transformUserInput = function (str) {
	// using built in JavaScript function to transform string to lowercase and returning it
	return str.toLowerCase()
}
```

And now on the field `shirtColor`:

```js
// field name will be `shirtColor`
	shirtColor: {
		// data type of this value will be expecting a string
		type: String,
		// a value must be passed in
		required: true,
		// the value MUST be one of these options
		enum: ['blue', 'yellow', 'red', 'Not Starfleet'],
		// use the field name `set` and set the value to be the function
		set: transformUserInput,
	},
```

## Additional Resources

Guides:

- [Mongoose Flags to Avoid Deprecated Behavior](https://mongoosejs.com/docs/deprecations.html): Discusses `useNewUrlParser` and  `useUnifiedTopology` flags
- [Mongoose Schema Guide](https://mongoosejs.com/docs/guide.html#schemas)
- [Mongoose Connection Guide](https://mongoosejs.com/docs/connections.html#connections)
- [Mongoose Moodel Guide](https://mongoosejs.com/docs/models.html)
- [Mongoose Validation Guide](https://mongoosejs.com/docs/validation.html)
- [Mongoose Middleware](https://mongoosejs.com/docs/middleware.html#types-of-middleware)

API: 

- [new Schema](https://mongoosejs.com/docs/api/schema.html#schema_Schema)
- [mongoose.model()](https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-model)
- [Model.create()](https://mongoosejs.com/docs/api/model.html#model_Model-create)
- [Model.find()](https://mongoosejs.com/docs/api/model.html#model_Model-find) 
- [Model.findById()](https://mongoosejs.com/docs/api/model.html#model_Model-findById)
  - [.save()](https://mongoosejs.com/docs/api/model.html#model_Model-save)
  - [.deleteOne()](https://mongoosejs.com/docs/api/model.html#model_Model-deleteOne)
- [Mongoose Virtuals](https://mongoosejs.com/docs/api/schema.html#schema_Schema-virtual)
  - [Virtualtype](https://mongoosejs.com/docs/api/virtualtype.html)
  - [.get()](https://mongoosejs.com/docs/api/virtualtype.html#virtualtype_VirtualType-get)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
