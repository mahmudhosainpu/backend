const producModel = require("../../models/productModel")
const uploadProductPermission = require("../../helper/permission")


async function updateProductControllar(req, res) {
  try {

    if (!uploadProductPermission(req.userId)) {
      throw new Error("Permission Denied")
    }

    const { _id, ...resBody } = req.body

    const updateProduct = await producModel.findByIdAndUpdate(_id, resBody)

    res.json({
      message: "Product Updated Successfully",
      data: updateProduct,
      success: true,
      error: false
    })

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    })
  }
}

module.exports = updateProductControllar