const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Place = require('../../models/place')

// name
const nameInput = process.argv[2]
// country
const countryInput = process.argv[3]
// latitude
const latInput = process.argv[4]
// longitude
const longInput = process.argv[5]

// node scripts/place/create.js Tokyo Japan
// node scripts/place/create.js London England
// node scripts/place/create.js Houston USA
// node scripts/place/create.js Madrid Spain
// node scripts/place/create.js Sydney Australia
// node scripts/place/create.js Bangkok Thailand

db.once('open', function () {
    Place.create({
        name: nameInput,
        country: countryInput,
        latitude: latInput,
        longitude: longInput
    })
    .then(place => { console.log('New Place Created: \n', place) })
    .catch(console.error)
    .finally(() => db.close())
})