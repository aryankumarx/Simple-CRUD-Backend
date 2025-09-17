// routes/product.route.js: defines the API endpoints and 
// directs them to the correct controller functions.

import express from "express";
import {getProducts,getProduct,createProduct,updateProduct,deleteProduct
} from "../controller/product.controller.js";

const router = express.Router();

// Routes
router.get("/", getProducts);
router.get("/:id",getProduct);
router.post("/",createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;