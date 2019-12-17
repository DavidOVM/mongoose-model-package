module.exports = mongoose =>
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      notes: { type: String },
    },
    { timestamps: true }
  )
