const express = require('express') //載入express
const router = express.Router()
const ShortURL = require('../models/shortURL')
const Cvt10to62 = require('../convert10to62.js')
const host = 'http://localhost:3000/'

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const newnumber = Math.floor(Math.random() * 100000000)
  const inputURL = req.body.originalURL.trim()

  let tracecode = ''
  ShortURL.find()
    .lean()
    .then((urlList) => {
      shortURL = urlList.find((url) => url.originalURL === inputURL)
      if (shortURL) {
        shortURL = host + shortURL.tracecode
        // newUrl = newUrl.tracecode
        console.log(shortURL)
        return res.render('shorten', { shortURL })
      } else {
        tracecode = Cvt10to62(newnumber)
        shortURL = host + tracecode
        console.log(shortURL)

        ShortURL.create({
          originalURL: inputURL,
          tracecode: tracecode,
        })
          // .then((code) => {
          //   shortURL = code.find((code) => code.tracecode === tracecode)
          // })
          // .then((shortURL) => res.render('shorten', { shortURL })) //卡很久原因，因為先return .create導致一直出現原始的資料庫資料，後來改為return render後面為正常
          .catch((error) => console.log(error))
        return res.render('shorten', { shortURL })
      }

    })
})

router.get('/:shorten', (req, res) => {
  const shortenid = req.params.shorten
  ShortURL.findOne({ tracecode: shortenid })
    .lean()
    .then((reURL) => {
      if (reURL) {
        console.log(reURL)
        res.status(301).redirect(reURL.originalURL)
      }
    })
    .catch((error) => console.log(error))
})

module.exports = router