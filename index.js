
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

  get models() {
    if (this.models) {
      return this.models
    }
    throw new Error(
      '[ModelPool Error] should connect before getting the models'
    )
  }
}

module.exports = new ModelPool()
