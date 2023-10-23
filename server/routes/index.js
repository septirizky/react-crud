const route = require("express").Router();

route.get("/", (req, res, next) => {
  res.json({
    message: "Wellcome to Home Page",
  });
});

const userRoutes = require("./user");
const itemRoutes = require("./item");

route.use("/users", userRoutes);
route.use("/items", itemRoutes);

module.exports = route;
