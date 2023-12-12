const { application } = require('express')
const express = require('express')
const router = express.Router()

const magicResponses = ['it is certain', 'it is decidedly so', 'without a doubt', 'yes definitely', 'you may rely on it', 'as i see it yes', 'most likely', 'outlook good', 'yes', 'signs point to yes', 'reply hazy try again', 'ask again later', 'better not tell you now', 'cannot predict now', 'concentrate and ask again', `don't count on it`, 'my reply is no', 'my sources say no', 'outlook not so good', 'very doubtful']

router.get('/:question', (req, res) => {
    const randomIndex = Math.floor(Math.random() * 20)
    const question = req.params.question
    res.send(`${question}?</br><h1>${magicResponses[randomIndex]}</h1>`)
})











module.exports = router