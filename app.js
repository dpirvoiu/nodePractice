const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send("Cannot find");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("The quick brown fox");
});
