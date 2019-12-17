const mongoose = require('mongoose')
const schema = require('./schema')

const model = mongoose.model('Tester', schema)

module.exports = model
