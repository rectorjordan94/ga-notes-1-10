const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-vampires', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
const Vampire = require('./models/vampire')

// db.once('open', function () {
//     Vampire.create({
//         name: 'Theresa Whatsherface',
//         hair_color: 'orange',
//         eye_color: 'purple',
//         gender: 'f'
//     })
//         .then(vampire => console.log('NEW VAMP CREATED: \n', vampire))
//         .catch(console.error)
//         .finally(() => db.close())
// })

// find vampires that are females

// db.once('open', function () {
//     Vampire.find().where({ gender: 'f' })
//         .then(vampire => {
//             vampire.forEach(vampire => {
//                 console.log(vampire)
//             })
//         })
//     .catch(console.error)
//     .finally(() => db.close())
// })

// find vampires that have greater than 500 victims

// db.once('open', function () {
//     Vampire.where('victims').gt(500)
//         .then(vampire => {
//             vampire.forEach(vampire => {
//                 console.log(vampire)
//             })
//         })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// find vampires with less than or equal to 150 victims

// db.once('open', function () {
//     Vampire.where('victims').lte(150)
//         .then(vampire => {
//             vampire.forEach(vampire => {
//                 console.log(vampire)
//             })
//         })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// find vampires where victim count is NOT EQUAL to 210234

// db.once('open', function () {
//     Vampire.where('victims').ne(210234)
//         .then(vampire => {
//             vampire.forEach(vampire => {
//                 console.log(vampire)
//             })
//         })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// find vampires where victims are greater than 150 and less than 500

// db.once('open', function () {
//     Vampire.where('victims').gt(150).lt(500)
//         .then(vampire => {
//             vampire.forEach(vampire => {
//                 console.log(vampire)
//             })
//         })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// select all vampires that have a key of 'title'

// db.once('open', function () {
//     Vampire.where('title').exists()
//         .then(vampire => {
//             vampire.forEach(vampire => {
//                 console.log(vampire)
//             })
//         })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// select all vampires that do not have a key of 'victims'

// db.once('open', function () {
//     Vampire.where('victims').exists(false)
//         .then(vampire => {
//             vampire.forEach(vampire => {
//                 console.log(vampire)
//             })
//         })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// select all vampires that have a title AND no victims

// db.once('open', function () {
//     Vampire.where('title').exists().where('victims').exists(false)
//         .then(vampire => {
//             vampire.forEach(vampire => {
//                 console.log(vampire)
//             })
//         })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// select all vampires that have victims and the amount of victims they have are greater than 1000

// db.once('open', function () {
//     Vampire.where('victims').exists().where('victims').gt(1000)
//         .then(vampire => {
//             vampire.forEach(vampire => {
//                 console.log(vampire)
//             })
//         })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// vampires that are from New York, New York, US or New Orleans, Louisiana, US

// db.once('open', function () {
//     Vampire.where().or([{location: 'New Orleans, Louisiana, US'}, {location: 'New York, New York, US'}])
//     .then(vampire => {
//         vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//     })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// vampires that love brooding or being tragic

// db.once('open', function () {
//     Vampire.where().or([{loves: 'brooding'}, {loves: 'being tragic'}])
//     .then(vampire => {
//         vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//     })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// vampires that have more than 1000 victims or love marshmallows

// db.once('open', function () {
//     Vampire.where().or([{ victims: { $gt: 1000 }},{loves: 'marshmallows'}])
//     .then(vampire => {
//         vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//     })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// vampires that have red hair or green eyes

// db.once('open', function () {
//     Vampire.where().or([{ hair_color : 'red' },{ eye_color : 'green'}])
//     .then(vampire => {
//         vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//     })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// vampires that love either frilly shirtsleeves or frilly collars

// db.once('open', function () {
//     Vampire.where().or([{ loves : 'frilly shirtsleeves' },{ loves : 'frilly collars'}])
//     .then(vampire => {
//         vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//     })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// vampires that love brooding

// db.once('open', function () {
//     Vampire.where({ loves: 'brooding'})
//     .then(vampire => {
//         vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//     })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// vampires that love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music

// db.once('open', function () {
//     Vampire.where().or([{ loves : 'appearing innocent' },{ loves : 'trickery'}, { loves : 'lurking in rotting mansions'}, { loves : 'R&B music'}])
//     .then(vampire => {
//         vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//     })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// vampires that love fancy cloaks but not if they also love either top hats or virgin blood - hint: you will also have to use $nin

// db.once('open', function () {
//     Vampire.where('loves').in(['fancy cloaks']).nin(['top hat', 'virgin blood'])
//     .then(vampire => {
//         vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//     })
//         .catch(console.error)
//     .finally(() => db.close())
// })

// vampires that love ribbons but do not have brown eyes

// db.once('open', function () {
//     Vampire.where({loves: 'ribbons'}).where('eye_color').ne('brown')
//     .then(vampire => {
//         vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//     })
//         .catch(console.error)
//         .finally(()=> db.close())
// })

// vampires that are not from Rome

// db.once('open', function () {
//     Vampire.where('location').ne('Rome, Italy')
//         .then(vampire => {
//             vampire.forEach(vampire => {
//             console.log(vampire)
//         })
//         })
//         .catch(console.error)
//         .finally(() => db.close())
// })

// vampires that do not love: fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding

// db.once('open', function () {
//     Vampire.where('loves').nin(['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding'])
//     .then(vampire => {
//         vampire.forEach(vampire => console.log(vampire))
//     })
//         .catch(console.error)
//         .finally(() => db.close())
// })

// vampires that have less than or equal to 200 victims

// db.once('open', function () {
//     Vampire.where('victims').lte(200)
//     .then(vampire => {
//         vampire.forEach(vampire => console.log(vampire))
//     })
//         .catch(console.error)
//         .finally(() => db.close())
// })

// replace the vampire called 'Claudia' with a vampire called 'Eve', 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'

// db.once('open', function () {
//     Vampire.replaceOne({ name: 'Claudia' }, { name: 'Eve', portrayed_by: 'Tilda Swinton' })
//         .then(vampire => console.log(vampire))
//         .catch(console.error)
//     .finally(()=> db.close())
// })

// replace the first male vampire with another whose name is 'Guy Man' and who has a key 'is_actually' with the value 'were-lizard'

// db.once('open', function () {
//     Vampire.replaceOne({ gender: 'm' }, { name: 'Guy Man', is_actually: 'were-lizard' })
//         .then(vampire => console.log(vampire))
//         .catch(console.error)
//     .finally(()=> db.close())
// })

// update guy man to have a gender of 'f'

// db.once('open', function () {
//     Vampire.replaceOne({name: 'Guy Man'}, { gender: 'f'})
//         .then(vampire => console.log(vampire))
//         .catch(console.error)
//         .finally(() => db.close())
// })

// update 'eve' to have a gender of 'm'

// db.once('open', function () {
//     Vampire.updateOne({name: 'Eve'}, {gender: 'm'})
//         .then(vampire => console.log(vampire))
//         .catch(console.error)
//         .finally(() => db.close)
// })

// update guy man to have an array called 'hates' that includes 'clothes' and 'jobs'

// db.once('open', function() {
//     Vampire.findOneAndUpdate({name:'Guy Man'}, {hates:['clothes', 'jobs']}, {upsert: true})
//         .then(vampire => console.log(vampire))
//         .catch(console.error)
//         .finally(() => db.close())
// })

// update 'guy man's hates array to also include 'alarm clocks' and 'jackalopes'

// db.once('open', function () {
//     Vampire.findOneAndUpdate({name:'Guy Man'}, {$push: {hates: {$each: ['alarm clocks', 'jackalopes']}}})
//         .then(vampire => console.log(vampire))
//         .catch(console.error)
//         .finally(() => db.close())
// })

// rename eve's name field to moniker

// db.once('open', function () {
//     Vampire.where('name', 'Eve').updateOne({ $rename: {'name': 'moniker'} })
//         .then(vampire => console.log(vampire))
//         .catch(console.error)
//         .finally(() => db.close())
// })

// update all females so that they are of gender fems

// db.once('open', function () {
//     Vampire.where({gender: 'f'}).updateMany({ gender: 'fems' })
//         .then(console.log)
//         .catch(console.error)
//         .finally(() => db.close())
// })

// remove a single document where the hair color is brown

// db.once('open', function () {
//     Vampire.where({hair_color: 'brown'}).deleteOne()
//         .then(vampire => console.log(vampire))
//         .catch(console.error)
//         .finally(() => db.close())
// })

// remove all vampires with blue eyes

// db.once('open', function () {
//     Vampire.where({eye_color: 'blue'}).deleteMany()
//         .then(vampire => console.log(vampire))
//         .catch(console.error)
//         .finally(() => db.close())
// })


// FIND ALL VAMPS TO CHECK WORK
// db.once('open', function () {
//     Vampire.find()
//         .then(vampire => vampire.forEach(vampire => console.log(vampire)))
//         .catch(console.error)
//     .finally(()=> db.close())
// })