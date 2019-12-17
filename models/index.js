const tester = require('./tester')

module.exports = {
  generate: mongoose => {
    Tester: tester(mongoose)
  },
}
