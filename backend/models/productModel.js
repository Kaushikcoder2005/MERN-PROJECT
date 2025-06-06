const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        image:{
            type:String,
            require:true
        },
},{
    timestamps:true
}
)

const Products = mongoose.model("Product", productSchema)

module.exports = {
    Products
}