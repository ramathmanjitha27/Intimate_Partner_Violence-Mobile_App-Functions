import express from 'express'
import {
  createUser,
  getUserDetails,
  signIn,
} from '../controllers/userController.js'

var userRouter = express.Router()

userRouter.post('/create', createUser)
userRouter.get('/get-user-details', getUserDetails)
userRouter.post('/sign-in', signIn)

export default userRouter
