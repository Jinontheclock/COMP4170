import express from "express";
import pg from "pg";
import animals from "./animals.js";
import questions from "./questions.js";

const app = express();
const port = 3000;

const db = new pg.Client({
  host: "localhost",
  port: 5432,
  database: "quiz",
  user: "postgres",
  password: "123",
});

db.connect().catch(err => console.error("DB connection error:", err.message));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/question/1");
});

app.get("/question/:num", (req, res) => {
  const num = parseInt(req.params.num);
  if (num < 1 || num > questions.length) return res.redirect("/");
  const question = questions[num - 1];
  const answers = req.query.answers ? req.query.answers.split(",").filter(Boolean) : [];
  res.render("question", { question, num, total: questions.length, answers });
});

app.post("/question/:num", (req, res) => {
  const num = parseInt(req.params.num);
  const { answer, prevAnswers } = req.body;
  const allAnswers = prevAnswers ? [...prevAnswers.split(",").filter(Boolean), answer] : [answer];

  if (num < questions.length) {
    res.redirect(`/question/${num + 1}?answers=${allAnswers.join(",")}`);
  } else {
    res.redirect(`/result?answers=${allAnswers.join(",")}`);
  }
});

app.get("/result", (req, res) => {
  const result = animals[req.query.type] || animals["graphic_designer"];
  res.render("result", { result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});