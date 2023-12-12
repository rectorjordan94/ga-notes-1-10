const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Person = require('../../models/person')

// show is a single document

// example of this query
// node scripts/people/show.js <person id>
// node scripts/people/show.js 63c03b03851d5e0b76986b6f
// node scripts/people/show.js 63c03aa96c50ca8dc64e0cfb

// get the id of a person
const idUserInput = process.argv[2]

// open our connection
db.once('open', function () {
    // find a person by their id
    Person.findById(idUserInput)
        // print if found
        .then(person => {
            const foundPerson = person.toJSON()
            console.log(`Success! Here is ${foundPerson.fullName}'s info: \n`, foundPerson)
        })
        // console error if error
        .catch(console.error)
        // finally close connection
        .finally(() => db.close())
})




