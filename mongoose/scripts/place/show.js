const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Place = require('../../models/place')

const idInput = process.argv[2]

db.once('open', function () {
    Place.findById(idInput)
        .then(place => {
            const foundPlace = place.toJSON()
            console.log(foundPlace)
        })
        .catch(console.error)
        .finally(() => db.close())
})