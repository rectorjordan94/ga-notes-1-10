const express = require('express')
const app = express()

const greetingRoutes = require('./routes/greeting-routes')
const tipRoutes = require('./routes/tip-routes')
const magicRoutes = require('./routes/magic-routes')
const bottleRoutes = require('./routes/bottle-routes')

app.use('/greeting', greetingRoutes)
app.use('/tip', tipRoutes)
app.use('/magic', magicRoutes)
app.use('/bottles', bottleRoutes)

app.listen(3000, () => {
    console.log('SERVER RUNNING ON PORT 3000')
})