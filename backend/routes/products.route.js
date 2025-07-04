const express = require("express")
const router = express.Router()
const {createProduct,deleteProduct,getProduct,updateProduct} = require("../controllers/product.controller")

router.get("/",getProduct )
router.put("/:id", updateProduct)
router.post("/",createProduct )
router.delete("/delete/:id", deleteProduct)


module.exports = router
