const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cheerio = require('cheerio')
const { Scraper, Root, CollectContent } = require('nodejs-web-scraper')
const fs = require('fs')
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
  const config = {
    baseSiteUrl: `https://www.lyrics.com/lyrics/${params}`,
    startUrl: `https://www.lyrics.com/lyrics/${params}`,
    delay: 10000,
    timeout: 15000
  }

  const getElementContent = elt => console.log('Elt: ', elt)

  const scraper = new Scraper(config)

  const root = new Root()

  const title = new CollectContent('.lyric-meta-title', {
    getElementContent
  }) //Any of these will fit.

  root.addOperation(title)

  await scraper.scrape(root)

  res.sendStatus(200)
  /*
  axios(url).then(async response => {
    const html = response.data
    const $ = cheerio.load(html)
    await fs.writeFile('./result.html', html, err => {
      console.log('Error: ', err)
    })
    console.log($('.sec-lyric').length)
    res.send(200)
  })*/
})

app.listen(port, () => {
  console.log('Server running on port', port)
})
