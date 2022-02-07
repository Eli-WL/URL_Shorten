const express = require('express') //載入express
const app = express() //將載入的express套件存在app裡
const port = 3000 //定義通訊埠
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')

require('./config/mongoose')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public')) //定義如果要找到static檔案時先去找public
app.use(routes)

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
