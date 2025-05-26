const express = require("express");
const routes = require("./routes/index");

const app = express();
app.use(express.json());
app.use(routes);

app.listen(6500, function () {
  console.log("Servidor em pé na porta 6500");
});
