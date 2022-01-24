const mongoose = require('mongoose')
const ShortURL = require('../shortURL')
mongoose.connect('mongodb://localhost/shortURL-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  // for (let i = 0; i < 10; i++) {
  //   Todo.create({ name: 'name-' + i }) //在mongodb上建立資料
  // }
  console.log('done')
})