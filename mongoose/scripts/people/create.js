// need to import(require) mongoose
const mongoose = require('mongoose')

// these files are scripts that are meant to run one at a time
// this means that we need to connect to our database every time a file opens
// this also means, at the end of our script, we should disconnect form the db every time
// this line connects to the mongo db
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// save our connection to a variable we can reference later
const db = mongoose.connection

// require our Person model
const Person = require('../../models/person')

// This script will connect to the db, take process args to create a person
// firstName
const firstNameUserInput = process.argv[2]
// lastName
const lastNameUserInput = process.argv[3]
// dob
const dobUserInput = process.argv[4]
// height
const heightUserInput = process.argv[5]
// weight
const weightUserInput = process.argv[6]

// examples of our query
// node scripts/people/create.js 'Fred' 'Jones' '1998-03-08' 62 150
// node scripts/people/create.js 'Larry' 'David' '1947-07-02' 71 180
// node scripts/people/create.js 'Guy' 'Fieri' '1968-01-22' 70 210
// node scripts/people/create.js 'Count' 'Chocula' '2019-01-31' 5 15

// pass those process.args to a mongoose model method that creates a document

// open our connection to the db
db.once('open', function () {
    // we'll use the mongoose model method create
    // we'll tell create what to do with our user input
    // mongoose model methods ALL return a PROMISE
    // which means we need to use the promise chain
    Person.create({
        firstName: firstNameUserInput,
        lastName: lastNameUserInput,
        dob: dobUserInput,
        height: heightUserInput,
        weight: weightUserInput
    })
    // here we'll print success or failure
        .then(person => {console.log('NEW PERSON CREATED: \n', person)})
        .catch(console.error)
    // close our connection to the db
    .finally(() => db.close())
})