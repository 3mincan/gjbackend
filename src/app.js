const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/positions", (req, res) => {
  const API = "https://jobs.github.com/positions.json";
  axios(API)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => {
      res.send("errr!!!");
    });
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
