const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortURLSchema = new Schema({
  OriginalURL: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  ShortURL: {
    type: String,
  }
})
module.exports = mongoose.model('shortURL', shortURLSchema)