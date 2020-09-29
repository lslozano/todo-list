const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const index = "/index.html";

app.get("/", (req, res) => {
  const date = new Date();
  const currentDate = date.getDay();

  if (currentDate === 6 || currentDate === 0) {
    res.send("<h1>It is a weekend! Relax!</h1>");
  } else {
    res.sendFile(`${__dirname}${index}`);
  }

  // const isWeekend = currentDate === 6 ? res.send("<h1>Chill Saturday!</h1>")
  // : currentDate === 0 ? res.send("<h1>Relaxing Sunday!</h1>")
  // : res.sendFile(`${__dirname}${index}`);
})

app.listen(3000, console.log("Server listening on Port 3000"));

