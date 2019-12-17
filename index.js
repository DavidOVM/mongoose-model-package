
const tester = require('./models/tester')

class ModelPool {
  constructor() {
    this.mongoose = null
    this.models = null
  }

  connect(mongooseInstance) {
    this.mongoose = mongooseInstance
    this.generateModels()
  }

  generateModels() {
    this.models = {
      Tester: tester(this.mongoose),
    }
  }
}

module.exports = new ModelPool()
