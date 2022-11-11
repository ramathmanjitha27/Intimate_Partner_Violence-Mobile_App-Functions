import mongoose from 'mongoose'

const evidenceSchema = mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'Enter user Id'],
  },
  title: {
    type: String,
    required: [true, 'Enter title'],
  },
  date: {
    type: String,
    required: [true, 'Enter date'],
  },
  time: {
    type: String,
    required: [true, 'Enter time'],
  },
  place: {
    type: String,
    required: [true, 'Enter place'],
  },
  description: {
    type: String,
    required: [true, 'Enter description'],
  },
  proof: [{
    img: String,
  }],

})

export default mongoose.model('Evidence', evidenceSchema)
