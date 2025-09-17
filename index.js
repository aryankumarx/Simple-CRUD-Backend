//index.js responsible for server creation and database connection.

import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js"; 
import Product from "./models/product.model.js";

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/products", productRoute);

// simple check route
app.get("/", (req, res) => {
  res.send("hello from Node API Server updated");
});


// database connection
mongoose
  .connect("mongodb+srv://aryanvoid505:nHPbkh6VX4MZiMe8@firstbackenddb.bnaezsw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=FirstBackendDB")
  .then(() => {
    console.log("Connected to Database");
    // start server only after DB connects
    app.listen(3000, () => {
      console.log("Backend running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Database connection failed", error);
  });


// install necessary express, mongoose, and nodemon.

//POST /api/products -> create

// GET /api/products -> see all products

// GET /api/products/:id -> see single product

// PUT /api/products/:id -> update a product

// DELETE /api/products/:id -> delete a product