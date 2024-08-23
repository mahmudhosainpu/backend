const producModel = require("../../models/productModel")


const getCategoryProductOne = async (req, res) => {
  try {
    const productCategory = await producModel.distinct("category")

    console.log("category", productCategory)

    //array to store one product from each category 
    const productByCategory = []

    for (const category of productCategory) {
      const product = await producModel.findOne({category})
      if (product) {
        productByCategory.push(product)
      }
    }

    res.json({
      message: "Category",
      data: productByCategory,
      error: false,
      success: true,
    })


  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false
    })
  }
}

module.exports = getCategoryProductOne;