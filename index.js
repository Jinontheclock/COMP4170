import express from "express";
import pg from "pg";
import animals from "./animals.js";

const app = express();
const port = 3000;

const db = new pg.Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

db.connect().catch(err => console.error("DB connection error:", err.message));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/result", (req, res) => {
  const result = animals[req.query.type] || animals["graphic_designer"];
  res.render("result", { result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});