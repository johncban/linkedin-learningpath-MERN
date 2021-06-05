const readline = require("readline");
const { EventEmitter } = require("events")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];
*/


module.exports = (questions, done = f => f) => {
    const answers = [];
    const [firstQuestion] = questions;
    const emitter = new EventEmitter()


    const questionAnswered = answer => {
      emitter.emit("answer", answer)

      answers.push(answer);
      if (answers.length < questions.length) {
        rl.question(questions[answers.length], questionAnswered);
      } else {
        emitter.emit("complete", answers)
        done(answers);
      }
    };
  
    rl.question(firstQuestion, questionAnswered);

    return emitter;
};


/*
const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = answer => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);
};
*/

/*
collectAnswers(questions, answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});
*/