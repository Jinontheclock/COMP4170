import express from "express";
import pg from "pg";
import animals from "./animals.js";
import questions from "./questions.js";

const app = express();
const port = 3000;

const db = new pg.Client({
  connectionString:
    "postgresql://postgres.fcigcinspastkslabodv:lLVvOW24HUzzYRHW@aws-0-us-west-2.pooler.supabase.com:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("title");
});

app.get("/question/:num", (req, res) => {
  const num = parseInt(req.params.num);
  if (num < 1 || num > questions.length) return res.redirect("/");
  const question = questions[num - 1];
  const answers = req.query.answers
    ? req.query.answers.split(",").filter(Boolean)
    : [];
  res.render("question", { question, num, total: questions.length, answers });
});

app.post("/question/:num", (req, res) => {
  const num = parseInt(req.params.num);
  const { answer, prevAnswers } = req.body;
  const allAnswers = prevAnswers
    ? [...prevAnswers.split(",").filter(Boolean), answer]
    : [answer];

  if (num < questions.length) {
    res.redirect(`/question/${num + 1}?answers=${allAnswers.join(",")}`);
  } else {
    res.redirect(`/result?answers=${allAnswers.join(",")}`);
  }
});

app.get("/result", async (req, res) => {
  const answersString = req.query.answers || "";
  const answersArray = answersString.split(",").filter(Boolean);

  const scores = {
    graphic_designer: 0,
    agile_pm: 0,
    ux_ui_designer: 0,
    comms_pr: 0,
    frontend_dev: 0,
  };

  answersArray.forEach((type) => {
    if (scores[type] !== undefined) {
      scores[type]++;
    }
  });

  let maxScore = 0;
  let resultType = "graphic_designer";

  for (const type in scores) {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = type;
    }
  }

  await db.query("INSERT INTO results (result_type) VALUES ($1)", [resultType]);

  const result = animals[resultType];

  res.render("result", { result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
