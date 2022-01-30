// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/shortURL-list', { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection
const ShortURL = require('../shortURL')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  ShortURL.create({
    originalURL: 'https://google.com',
    tracecode: 'http://localhost:3000/'
  })
  db.close
  console.log('done')
})