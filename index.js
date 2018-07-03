const antanipsum = require('./antanipsum')
const _ = require('lodash')

module.exports.get = (event, context, callback) => {
  const paragraphs = parseInt(_.get(event, 'pathParameters.paragraphs', 1))
  antanipsum.get(paragraphs).then(text => {
    const response = {
      statusCode: 200,
      body: text
    }

    callback(null, response)
  })
}
