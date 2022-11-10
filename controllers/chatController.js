import ChatModel from '../models/ChatModel.js'

export const createNewChat = async (req, res) => {
  const { expertId, victimId, victimName, expertName } = req.body

  try {
    const newChat = await ChatModel.create({
      expertId,
      victimId,
      victimName,
      expertName,
    })
    return res.status(201).json({ success: true, chat: newChat })
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

//   update chat with new messages
export const addNewMessages = async (req, res) => {
  const { chatId, msg, time, role } = req.body

  const newMessage = {
    msg: msg,
    time: time,
    role: role,
  }

  ChatModel.findByIdAndUpdate(
    { _id: chatId },
    { $push: { messages: newMessage } }
  )
    .then(() => {
      res.status(200).json({ status: 'New message added' })
    })
    .catch((err) => {
      res.json(err)
      console.log(err)
    })
}

// get chat details by chatId
export const getChatDetailsById = async (req, res) => {
    const { chatId } = req.query
  
    try {
      ChatModel.findById({ _id: chatId })
        .then((chat) => {
          res.json({ success: true, chat: chat })
        })
        .catch((err) => {
          console.log(err)
          res.json(err)
        })
    } catch (err) {
      console.log(err)
      res.json(err)
    }
  }


//   get all chats
export const getAllChats = async (req, res) => {
    ChatModel.find()
      .then((chats) => {
        res.json({ success: true, chats: chats })
      })
      .catch((err) => {
        res.json(err)
        console.log(err)
      })
  }
