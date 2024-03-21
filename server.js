require("dotenv").config();
const express = require("express");
const router = require("./routers/router");

const PORT = 4000;

const app = express();

app.use(router);
app.set("view engine", "ejs");

app.all("*", (req, res) => {
  res.render("notFound");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
