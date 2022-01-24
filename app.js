const express = require('express') //載入express
const app = express() //將載入的express套件存在app裡
const port = 3000 //定義通訊埠
const exphbs = require('express-handlebars')
const ShortURL = require('./models/shortURL')
const mongoose = require('mongoose')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public')) //定義如果要找到static檔案時先去找public

mongoose.connect('mongodb://locolhost/shortURL-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})


app.get('/', (req, res) => {
  res.send(`This is my first Express Web App`) //在啟用handlebars之前
  //res.render('index') //使用handlebars後將渲染內容交由index處理
  // res.render('index', { movies: movieList.results }) //index後方表示從哪個資料取得資料
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})