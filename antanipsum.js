const request = require('request')
const cheerio = require('cheerio')

const get = (paragraphs = 1) => new Promise((resolve, reject) => {
  const URL = `https://www.antanipsum.it/antani.php?n=${paragraphs}`
  request(URL, function (error, response, html) {
    if (error) {
      reject(error)
      return
    }

    const $ = cheerio.load(html)

    const text = $('p').text()

    resolve(text)
  })
})

module.exports = {
  get
}
