const Schema = mongoose.Schema

const schema = new Schema(
  {
    name: { type: String, required: true },
    notes: { type: String },
  },
  { timestamps: true }
)

module.exports = schema
