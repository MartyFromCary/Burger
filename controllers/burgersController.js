const express = require("express");
const app = express();

const burger = require("../models/burger.js");

app.get("/", (req, res) =>
  burger.selectAll(burgers => res.render("index", { burgers }))
);

app.post("/", (req, res) =>
  burger.insertOne(
    { burger_name: req.body.burger_name, devoured: false },
    data => res.end()
  )
);

app.put("/", (req, res) =>
  burger.updateOne({ devoured: true }, { id: req.body.id }, data => res.end())
);

module.exports = app;
