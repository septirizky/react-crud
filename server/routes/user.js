const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");

userRoute.get("/", UserController.getUsers);
userRoute.post("/register", UserController.register);
userRoute.post("/login", UserController.login);
userRoute.put("/update/:id", UserController.update);
userRoute.delete("/delete/:id", UserController.delete);
userRoute.get("/detail/:id", UserController.getDetail);

module.exports = userRoute;
