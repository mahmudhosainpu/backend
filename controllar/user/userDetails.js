const userModels = require("../../models/userModels")

async function userDetailsControllar(req, res) {
  try {
    console.log("user_id", req.userId)
    const user = await userModels.findById(req.userId)

    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User details"
    })

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    })
  }
}

module.exports = userDetailsControllar