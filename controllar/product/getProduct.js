const producModel = require("../../models/productModel")

const getProductColtrollar = async (req, res) => {
  try {

    const allProduct = await producModel.find().sort({ createdAt: -1 })

    res.status(201).json({
      message: "All Product",
      error: false,
      success: true,
      data: allProduct
    })

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    })
  }
}

module.exports = getProductColtrollar