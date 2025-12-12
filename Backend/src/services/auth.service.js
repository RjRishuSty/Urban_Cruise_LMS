const bcrypt = require("bcrypt");
const userModel = require("../models/auth.model");
const { generateToken } = require("../utils/jwt.util");

const signUpService = async (data) => {
  const { firstName,lastName, email, password } = data;

  const userExists = await userModel.findOne({ email });
  if (userExists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  return { user, token: generateToken(user._id) };
};

const signInService = async (data) => {
  console.log("DATA IN SERVICE:", data);
  const { email, password } = data;
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("Invalid email or password");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid email or password");

  return { user, token: generateToken(user._id) };
};

module.exports = {signUpService,signInService}
