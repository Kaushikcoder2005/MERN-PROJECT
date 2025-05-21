const express = require("express")
const dotenv = require("dotenv")
const {Products} = require("./models/productModel")
const { connectDB } = require("./config/db")
const app = express()
const ProductRoutes = require("./routes/products.route")
const cors = require("cors");
const path = require("path")


app.use(express.json())
dotenv.config()

app.use(cors({
    origin: "http://localhost:5173", // your frontend port
    credentials: true
}));

app.use("/products",ProductRoutes)

const _dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(_dirname, "/frontend/dist")));
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "/frontend/dist", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB()
    console.log("Server Started at http://localhost:5000/");

})