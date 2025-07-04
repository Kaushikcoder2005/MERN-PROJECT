const express = require("express");
const dotenv = require("dotenv");
const { Products } = require("./models/productModel");
const { connectDB } = require("./config/db");
const ProductRoutes = require("./routes/products.route");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();
const _dirname = path.resolve();

// ✅ Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173 " || "https://mern-project-frontend-6qsv.onrender.com", // frontend dev server
    credentials: true
}));

// ✅ API Routes
app.use("/products", ProductRoutes);

// ✅ Serve frontend static files (for production)
const frontendPath = path.join(_dirname, "frontend", "dist");
app.use(express.static(frontendPath));

// ✅ Catch-all route to serve SPA for unmatched routes (not starting with /api or /products)
app.get(/^\/(?!api|products).*/, (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`🚀 Server started at http://localhost:${PORT}`);
});
