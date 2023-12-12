const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Person = require('../../models/person')

// get the id of a person
const idUserInput = process.argv[2]

// node scripts/people/delete.js 63c0322eb46715a0c7591809
// node scripts/people/delete.js 63c03aa96c50ca8dc64e0cfb

// open connection to the db
db.once('open', function () {
    // find a person
    Person.findById(idUserInput)
        // delete that person(you can return a deleted document, it'll be the last time you ever see it)
        .then(person => {
            return person.deleteOne()
        })
        // print a success message
        .then(person => {
            console.log('successfully deleted: \n', person.toJSON())
        })
        // catch any errors
        .catch()
        // finally close our connection
        .finally(() => db.close())
})



