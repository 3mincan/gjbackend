import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Home Page Route"));

app.get("/about", (req, res) => res.send("About Page Route"));

app.get("/api", (req, res) => res.status(200).json({ data: "api" }));

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
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
