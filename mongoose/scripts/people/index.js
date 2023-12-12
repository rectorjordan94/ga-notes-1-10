// index is a list of all documents
// this is a R if we're thinking in terms of CRUD
// index = Read all documents

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Person = require('../../models/person')

// example of this query
// node scripts/people/index.js

// when this file runs, we'll use a model method to get all instances of these documents that exist in this collection

// open our connection
db.once('open', function () {
    // use a method to find people
    Person.find()
        .then(people => {
            // then turn those people into JSON or an Object
            // then print those people to the terminal
            // we're going to loop through 'people' and turn them into JSON
            people.forEach(person => {
                const foundPersonJson = person.toJSON()
                console.log('HERE IS THE FOUND PERSON: \n', foundPersonJson)
            })
        })
        // catch any errors
        .catch(console.error)
        // finally close connection to the db
        .finally(() => db.close())
})
