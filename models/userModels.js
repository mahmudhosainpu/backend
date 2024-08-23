const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  profilePicture: String,
  role : String,
}, {
  timestamps: true,
});

const User = model("User", userSchema);
module.exports = User;
