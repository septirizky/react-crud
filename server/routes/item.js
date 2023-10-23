const itemRoute = require("express").Router();
const ItemController = require("../controllers/ItemController");

itemRoute.get("/", ItemController.getItems);
itemRoute.post("/create", ItemController.create);
itemRoute.put("/update/:id", ItemController.update);
itemRoute.delete("/delete/:id", ItemController.delete);
itemRoute.get("/details/:id", ItemController.getDetail);

module.exports = itemRoute;
