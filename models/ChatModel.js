import mongoose from 'mongoose'

const chatSchema = mongoose.Schema({
  expertId: {
    type: String,
    required: [true, 'Enter expert Id'],
  },
  victimId: {
    type: String,
    required: [true, 'Enter victim Id'],
  },
  victimName: {
    type: String,
    required: [true, 'Enter victim name'],
  },
  expertName: {
    type: String,
    required: [true, 'Enter expert name'],
  },
  messages: [{
    msg: String,
    time: Date,
    role: String,
  }],

})

export default mongoose.model('Chat', chatSchema)
