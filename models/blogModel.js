import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Enter blog title'],
  },
  body: {
    type: String,
    required: [true, 'Enter blof details'],
  },
})

export default mongoose.model('Blog', blogSchema)
