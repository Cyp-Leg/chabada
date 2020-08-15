require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(bodyParser.text({ type: 'text/html' }))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

app.get('/lookup', async (req, res) => {
  const params = req.query.keywords.replace(' ', '%20')
  const { API_KEY, USER_ID } = process.env

  console.log('Api key: ', API_KEY)
  console.log('Env', process.env)
  axios
    .get(
      `https://www.stands4.com/services/v2/lyrics.php?uid=${USER_ID}&tokenid=${API_KEY}&term=${params}&format=json`
    )
    .then(response => {
      //const $ = cheerio.load(res.data)
      //console.log('Res: ', $('album').html())
      console.log('Res: ', response.data)
      res.send(response.data)
    })
    .catch(err => console.log('Err: ', err))
})

app.listen(port, () => {
  console.log('Server running on port', port)
})
