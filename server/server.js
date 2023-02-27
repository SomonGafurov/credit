const express = require("express");
const cors = require("cors");
const pool = require("./module");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/AuthorizationComponent", (req, res) => {
  pool.query(`SELECT * FROM "user"`, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
