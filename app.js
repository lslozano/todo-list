const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const index = "/index.html";
let items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", (req, res) => {
  const date = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  let day = date.toLocaleDateString("en-US", options);

  res.render("list", {
    dayOfWeek: day,
    newListItems: items
  });
})

app.post("/", (req, res) => {
  items.push(req.body.newItem);

  res.redirect("/")
})

app.listen(3000, console.log("Server listening on Port 3000"));

