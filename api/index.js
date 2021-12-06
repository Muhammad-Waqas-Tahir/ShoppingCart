import express from "express";
import cors from "cors";
import products from "./product.js";

const app = express();
app.use(express(JSON));
app.use(cors());

app.get("/", (req, res) => {
  res.send("weclome to my api");
});
app.get("/products", (req, res) => {
  res.send(products);
});

const Port = process.env.PORT || 5000;

app.listen(Port, console.log(`Server is running on Port ${Port}`));
