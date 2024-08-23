const mongoose = require("mongoose")

const producSchema = mongoose.Schema({
  productName:  String,
  brandName: String,
  category: String,
  productImage: [],
  description: String,
  price: Number,
  sellingPrice: Number
},{
  timestamps: true,
})

const producModel = mongoose.model("product",producSchema)

module.exports = producModel