const UserModel = require("../models/userModel")
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
  const { name, email, password, phoneNumber, isAdmin = false } = req.body

  try {
    const newUser = await UserModel.create({ name, email, password, phoneNumber, isAdmin })
    res.send({ status: 'success', user: newUser })
  } catch (err) {
    res.status(500).send({ status: 'error', err: err })
  }
}


const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.findOne({ email, password })

    if (!user) {
      res.status(401).send({ status: 'error', msg: "Invalid User" })
    } else {
      //Generate the token
      const userPayload = { email: user.email, name: user.name, isAdmin: user.isAdmin }
      const token = jwt.sign(userPayload, process.env.JWT_SECRET_KEY, { algorithm: 'HS384', expiresIn: '1d' })
      console.log(token)

      //body token:
      //cookie
      res.cookie('jwt', token, { maxAge: 24 * 60 * 60 })
      res.send({ status: 'success', user, token })
    }

  } catch (err) {
    res.status(500).send({ status: 'error', err: err })
  }
}

const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 })
  res.send({ status: 'success', msg: "Logged out successfully" })
}


module.exports = {
  signup, login, logout
}