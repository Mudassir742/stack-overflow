const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/generateToken")

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "fields are empty" });
    }

    const existedUser = await User.findOne({ email: email });

    if (!existedUser) {
      return res.status(404).json({ error: "user not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existedUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(422).json({ error: "incorrect email or password" });
    }

    const token = generateToken(existedUser)

    return res.status(201).json({
      data: {
        name: existedUser.firstName + " " + existedUser.lastName,
        email:existedUser.email,
        userID: existedUser._id,
        token: token,
      },
    });
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({ error: err.message });
  }
};
exports.userRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "fields are empty" });
    }

    const isEmailAlreadyExists = await User.find({ email: email });

    if (isEmailAlreadyExists.length !== 0) {
      return res.status(422).json({ error: "email already exists" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    const registerUser = await newUser.save();

    const token = generateToken(registerUser)

    if (registerUser) {
      return res.status(200).json({
        data: {
          userID: registerUser._id,
          name: registerUser.firstName + " " + registerUser.lastName,
          email:registerUser.email,
          token:token
        },
      });
    }

    return res.status(422).json({ error: "unable to register user" });
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({ error: "unexpected error occurred" });
  }
};
