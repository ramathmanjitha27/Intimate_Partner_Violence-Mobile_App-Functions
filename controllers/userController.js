import userModel from '../models/userModel.js'

export const createUser = async (req, res) => {
  const { email, password, userName, userRole } = req.body
  try {
    const user = await userModel.create({
      email,
      userName,
      password,
      userRole,
    })
    return res.status(201).json({ success: true, user: user })
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export const getUserDetails = async (req, res) => {
  const { userId } = req.query

  try {
    const userDetails = await userModel
      .findById({ _id: userId })
      .then((user) => {
        return res.status(201).json({ success: true, user: user })
      })
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export const signIn = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await userModel.findOne({ email: email })

    if (user) {
      if (user.password == password) {
        return res
          .status(201)
          .json({ success: true, user: user, message: 'Login success' })
      } else {
        return res
          .status(500)
          .json({ success: false, user: null, message: 'Invalid password' })
      }
    } else {
      return res
        .status(500)
        .json({ success: false, user: null, message: 'Invalid email' })
    }
  } catch (e) {
    console.log(err)
    res.json(err)
  }
}
