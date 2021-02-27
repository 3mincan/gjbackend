import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());


const url = "https://jobs.github.com/";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Home Page Route"));

app.get("/about", (req, res) => res.send("About Page Route"));

app.get("/api", (req, res) => res.status(200).json({ data: "api" }));

app.get("/api/positions.json", (req, res) => {
  axios({
    url: url + "positions.json",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => {
      res.send("errr!!!");
    });
});

app.get("/api/positions/:id.json", (req, res) => {
      let id = req.params.id;
      console.log(id)

  axios({
    url: url + `positions/${id}.json`,
  })
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
