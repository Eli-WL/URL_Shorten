function Cvts10to62(number) {
  let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  let index = chars.length
  let input = +number
  let arr = []
  do {
    let mod = input % index
    input = (input - mod) / index
    arr.unshift(chars[mod])
  } while (input)
  return arr.join('')
}

// console.log(s10to62(1000009999))
module.exports = Cvts10to62