const express = require("express");
const router = express.Router();

// For user
const userSignupController = require("../controllar/user/userSignup");
const userSignInController = require("../controllar/user/userSignin");
const userDetailsControllar = require("../controllar/user/userDetails");
const authToken = require("../middleware/authToken");
const userLogOut = require("../controllar/user/userLogOut");
const allUsers = require("../controllar/user/allUsers");
const updateUser = require("../controllar/user/updateUser");

// For product
const UploadProductControllar = require("../controllar/product/uploadProduct");
const getProductColtrollar = require("../controllar/product/getProduct");
const updateProductControllar = require("../controllar/product/updateProduct");
const getCategoryProductOne = require("../controllar/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controllar/product/getCategoryWiseProduct");

router.post("/signup", userSignupController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsControllar)
router.get("/userLogout", userLogOut)


// admin panel
router.get("/all-users", authToken, allUsers)
router.post("/update-user", authToken, updateUser)
router.post("/upload-product", authToken, UploadProductControllar)
router.get("/get-product", getProductColtrollar)
router.post("/update-product",authToken,updateProductControllar)

router.get("/get-categoryProduct",getCategoryProductOne)
router.post("/category-product",getCategoryWiseProduct)



module.exports = router;
