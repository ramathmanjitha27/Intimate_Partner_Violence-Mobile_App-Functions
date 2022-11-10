import express from 'express'
import { addNewMessages, createNewChat, getAllChats, getChatDetailsById } from '../controllers/chatController.js'
const chatRouter = express.Router()

chatRouter.post('/create-chat', createNewChat)
chatRouter.put('/new-message', addNewMessages)
chatRouter.get('/get-one-chat', getChatDetailsById)
chatRouter.get('/get-all-chats', getAllChats)


export default chatRouter