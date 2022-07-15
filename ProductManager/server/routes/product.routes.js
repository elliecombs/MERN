const ProductController = require("../controllers/product.controller");

//Routes that go to controller 
module.exports = app => {
    //Get all- Get
    app.get("/api/product", ProductController.getAllProduct);

    //Create new- Post
    app.post("/api/product", ProductController.createNewProduct);

    //Get one- Get
    app.get("/api/product/:id", ProductController.findOneProduct);

    //Update- Put
    app.put("/api/product/:id", ProductController.updateOneProduct);

    //Delete- post
    app.delete("/api/product/:id", ProductController.deleteOneProduct);
};
