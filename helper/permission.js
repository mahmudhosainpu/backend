const userModels = require("../models/userModels")

const uploadProductPermission = async (userId) => {
  const user = await userModels.findById(userId)

  if (user.role !== "ADMIN") {
    return false
  } else {
    return true
  }
}

module.exports = uploadProductPermission