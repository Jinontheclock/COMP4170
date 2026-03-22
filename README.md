# COMP 4170 Personality Quiz Project

A personality quiz web app built with Node.js, Express, EJS, and PostgreSQL. Answer 6 questions to find out which tech animal you are. Hosted on Vercel.

---

## Team Contributions

### Sharleen
**Files:** `views/title.ejs`, `views/question.ejs`, `questions.js`, `public/css/title.css`, `public/css/question.css`

Built the title/landing page and the question flow. The question page includes a progress bar, per-question animal illustrations, radio button answer choices, and back/next navigation that carries answers forward through the quiz. Wrote `questions.js` to store all 6 questions, their answer options, and the result type each answer maps to.

---

### Belinda
**Files:** `views/result.ejs`, `animals.js`, `public/css/result.css`

Handled the result page and styling. The page is a flip card — the front shows a bouncing question mark, click it and it flips to reveal your result with the animal, title, quote, description, and trait pills. Also wrote `animals.js` to store all five result types and their data, and hooked it up to the `/result` route so the right card shows based on the quiz score.

---

### [Teammate Name]
**Files:** `file1`, `file2`

[Description of what you worked on and how it fits into the project.]

---
