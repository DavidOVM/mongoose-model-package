const models = require('./models')

class ModelPool {
  constructor() {
    this.mongoose = null
    this.models = null
  }

  connect(mongooseInstance) {
    this.mongoose = mongooseInstance
    this.models = models.generate(mongooseInstance)
    // this.services = services.generate(mongooseInstance)
    // ...
  }
}

module.exports = new ModelPool()
