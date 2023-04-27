const express = require("express");
const morgan = require("morgan");
const server = express();
const PORT = 3001;
let products = [
  {
    name: "libro",
    price: 234,
    id: 1,
  },
];
server.use(morgan("dev"));
server.use(express.json());
server.get("/products", (req, res) => {
  res.json(products);
});

server.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.send(newProduct);
});

server.put("/products/:id", (req, res) => {
const newData = req.body
 const productsFound = products.find((p) => p.id === parseInt(req.params.id)); //parseInt(req.params.id)
  if (!productsFound)
    res.status(404).json({
      messager: "No se encontro el producto",
    });
 products= products.map(p=> p.id === parseInt(req.params.id)?{...p, ...newData}:p)

res.json({message:"producto actualizado"})
});





server.delete("/products/:id", (req, res) => {
   const productsFound = products.find((p) => p.id === +req.params.id); //parseInt(req.params.id)
    if (!productsFound)
      res.status(404).json({
        error: "No se encontro el producto",
      });
   
    products = products.filter(p=> p.id !== +req.params.id)
    
    console.log(products)
    
    
    res.send("borrando producto");
});

server.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const productsFound = products.find((p) => p.id === +req.params.id); //parseInt(req.params.id)
  if (!productsFound)
    res.status(404).json({
      error: "No se encontro el producto",
    });
  res.json(productsFound);
});
server.listen(PORT, () => {
  console.log(`server is in port ${PORT}`);
});
