const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

const date = require(`${__dirname}/date.js`);

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", (req, res) => {
  const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});
})

app.get("/work", (req, res) => {
  res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.get("/about", (req, res) => {
  res.render("about");
})

app.post("/", (req, res) => {

  if (req.body.list === "Work") {
    workItems.push(req.body.newItem);
    res.redirect("/work")
  } else {
    items.push(req.body.newItem);
    res.redirect("/")
  }
})

app.listen(3000, console.log("Server listening on Port 3000"));

