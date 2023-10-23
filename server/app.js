const cors = require("cors");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 7200;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
