import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'please enter email '],
  },
  userName: {
    type: String,
    required: [true, 'please enter user name '],
  },
  password: {
    type: String,
    required: [true, 'please enter password'],
  },
  userRole: {
    type: String,
    required: [false],
  },
  profileImg: {
    type: String,
  },
})
export default mongoose.model('User', userSchema)
