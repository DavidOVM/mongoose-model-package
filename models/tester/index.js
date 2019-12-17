const generateSchema = require('./schema')

module.exports = mongoose => mongoose.model('Tester', generateSchema(mongoose))
