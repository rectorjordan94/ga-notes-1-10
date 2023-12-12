const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Person = require('../../models/person')

// node scripts/people/update.js <person id> <the key of the field to update> <the value to update with>
// node scripts/people/update.js 63c03b03851d5e0b76986b6f firstName 'Bob'

const idUserInput = process.argv[2]
// get the key to update
const keyUserInput = process.argv[3]
// the value to update
const valueUserInput = process.argv[4]

// open connection to db
db.once('open', function () {
    // find the person by id
    Person.findById(idUserInput)
    // update the person -> and save to the db
        .then(person => {
            // use the key and the value to update the person object
            person[keyUserInput] = valueUserInput

            // when we update something, we want to save the document
            // to pass it down the promise chain, we can return the saved doc
            return person.save()
        })
        .then(person => {    
        // then print the updated person
            console.log('SUCCESS! UPDATED: \n', person.toJSON())
        })
        // catch any errors
        .catch(console.error)
        // finally close connection
        .finally(()=> db.close())
})