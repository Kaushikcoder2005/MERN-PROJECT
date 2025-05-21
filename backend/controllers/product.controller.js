const mongoose = require("mongoose");
const { Products } = require("../models/productModel")

const getProduct = async (req, res) => {
    try {

        const products = await Products.find({})
        return res.status(200).json({
            success: true,
            data: products
        })

    } catch (error) {
        console.error("Error message: ", error.message);
        return res.status(500).json({
            success: true,
            message: "Internal server error"
        })

    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body;

        if (!name || !price || !image) {
            return res.status(400).json({
                success: false,
                message: "Name, price, and image are required fields.",
            });
        }

        const newProduct = await Products.create({ name, price, image });

        return res.status(201).json({
            success: true,
            data: newProduct,
            message: "Product created successfully.",
        });
    } catch (error) {
        console.error("Create Product Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }

}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {

        await Products.findByIdAndDelete(id)
        
        res.status(200).json({
            success: true,
            message: "Item deleted sucecssfully"
        })


    } catch (error) {
        console.error("Create Product Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params
    const newBody = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: "Invalid product ID"
        })
    }
    try {
        const updatedProduct = await Products.findByIdAndUpdate(id, newBody, { new: true })
        return res.status(200).json({
            success: true,
            updatedData: updatedProduct
        })
    } catch (error) {
        console.error("Error message: ", error.message)
        return res.status(500).json({
            success: false,
            message: "Internal Server error"
        })
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    getProduct,
    updateProduct
}