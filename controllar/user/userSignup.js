const userModels = require("../../models/userModels");
const bcrypt = require('bcryptjs');

async function userSignupController(req, res) {
  try {
    const { email, password, name } = req.body;

    const user = await userModels.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists.",
        error: true,
        success: false,
      });
    }

    if (!email || !password || !name) {
      return res.status(400).json({
        message: "Please provide all required fields: email, password, and name.",
        error: true,
        success: false,
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };

    const userData = new userModels(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created successfully!",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
}

module.exports = userSignupController;
