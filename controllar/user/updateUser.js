const userModels = require("../../models/userModels");

async function updateUser(req, res) {
  try {
    const sessionUser = req.userId

    const { userId, email, name, role } = req.body

    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    }

    const user = await userModels.findById(sessionUser)
    console.log("User.role",user.role)

    const updateUser = await userModels.findByIdAndUpdate(userId, payload)

    res.json({
      data: updateUser,
      message: "User Updated",
      error: false,
      success: true
    })

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    })
  }

}

module.exports = updateUser