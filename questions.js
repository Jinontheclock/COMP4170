const questions = [
  {
    num: 1,
    text: `It's week 1. Your professor says "introduce yourself and tell us your dream job." You say:`,
    animal: "question1.png",
    quote: "I went to Harvard!!",
    answers: [
      { text: "Something confident and slightly rehearsed. You've workshopped this answer before. It lands.", type: "comms_pr" },
      { text: `"I want to work at a company where I can make a real impact" — you mean it, you just also have no idea what that looks like yet.`, type: "agile_pm" },
      { text: "A joke. The class laughs. You still haven't answered the question.", type: "frontend_dev" },
      { text: "Your actual dream job, which has nothing to do with tech, but here you are.", type: "ux_ui_designer" },
    ]
  },
  {
    num: 2,
    text: "Group project. Nobody's taking charge. The group chat has been silent for 3 days. You:",
    animal: "question2.png",
    quote: "Too many chefs!!",
    answers: [
      { text: "Send a message. It's friendly. It has bullet points. There is a colour-coded timeline attached. You are not okay.", type: "agile_pm" },
      { text: "Start doing your part without telling anyone. They'll see it when they see it.", type: "frontend_dev" },
      { text: `Type "so... should we call?" and then stare at the three dots until someone responds.`, type: "graphic_designer" },
      { text: "Create a shared folder, label everything clearly, and consider that your contribution for today.", type: "ux_ui_designer" },
    ]
  },
  {
    num: 3,
    text: `You get your project back with a 65. The feedback says "lacks clarity." You:`,
    animal: "question3.png",
    quote: "Did you user test the door?",
    answers: [
      { text: "Reread it immediately. Find every single unclear moment. Suffer.", type: "ux_ui_designer" },
      { text: "Disagree completely, spend 20 minutes writing a rebuttal in your Notes app, close the app, never speak of it again.", type: "comms_pr" },
      { text: `Text a classmate "what did you get" before you've even finished reading your own feedback.`, type: "graphic_designer" },
      { text: "Close the tab. Open a new doc. Start cleaner. Closure is for other people.", type: "frontend_dev" },
    ]
  },
  {
    num: 4,
    text: "It's 2am the night before a deadline. You are:",
    animal: "question4.png",
    quote: "Just ask ChatGPT",
    answers: [
      { text: "Editing something that has been done since 10pm. You just need it to be right.", type: "graphic_designer" },
      { text: "Completely rebuilding one section because you had a better idea at midnight and honestly this version is better.", type: "frontend_dev" },
      { text: `Sending "hey are we still submitting at 11:59 or" into the group chat void.`, type: "agile_pm" },
      { text: "Reading the rubric for the first time. Taking notes. Genuinely fine.", type: "ux_ui_designer" },
    ]
  },
  {
    num: 5,
    text: "A classmate asks to borrow your notes. You:",
    animal: "question5.png",
    quote: "Can you make the logo bigger?",
    answers: [
      { text: "Send a Notion link. It's organized by week, colour-coded, and honestly better than the slides.", type: "agile_pm" },
      { text: "Send a photo of a page that is 90% diagrams, arrows, and one word circled very aggressively.", type: "graphic_designer" },
      { text: `Say "yeah of course!" and then realize your notes are just the lecture slides with three words added.`, type: "comms_pr" },
      { text: "Say you'll send them later. You do not have notes. You have vibes and a good memory.", type: "frontend_dev" },
    ]
  },
  {
    num: 6,
    text: "The career fair is next week. You:",
    animal: "question6.png",
    quote: "Personal brand!!",
    answers: [
      { text: "Are already registered, resume updated, LinkedIn polished, and have researched every company attending.", type: "agile_pm" },
      { text: "Are going with two questions prepared and zero expectations. You're just feeling it out.", type: "ux_ui_designer" },
      { text: "Heard there's free stuff. Also maybe a job. Either way you're going.", type: "graphic_designer" },
      { text: "Find out about it the morning of, throw on something decent, and somehow walk out with three business cards and a callback.", type: "comms_pr" },
    ]
  },
];

export default questions;